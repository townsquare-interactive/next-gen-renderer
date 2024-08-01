import { render, waitFor } from '@testing-library/react'
import ReturnNextScript from '../components/custom/ReturnNextScript'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import HeadScripts from '../components/custom/HeadScripts'

interface ScriptProps {
    src?: string
    [key: string]: any
}

interface NoSrcScriptsProps {
    noSrcScripts: { id: number; script: string }[]
}

describe('ReturnNextScript Component', () => {
    vi.mock('next/script', () => ({
        __esModule: true,
        default: ({ src, ...props }: ScriptProps) => <script src={src} {...props} async></script>,
    }))

    // Mock the NoSrcScripts component
    vi.mock('./NoSrcScripts', () => ({
        __esModule: true,
        default: ({ noSrcScripts }: NoSrcScriptsProps) => (
            <div>
                {noSrcScripts.map((script) => (
                    <script key={script.id} dangerouslySetInnerHTML={{ __html: script.script }} async />
                ))}
            </div>
        ),
    }))

    it('should parse and set scripts with a src correctly', async () => {
        const sampleHTML = `
        <script src="https://example.com/script.js" data-api-key="123"></script>
    `
        const { container } = render(<ReturnNextScript code={sampleHTML} location="body" />)

        await waitFor(() => {
            const scripts = container.querySelectorAll('script')

            expect(scripts.length).toBe(1)
            expect(scripts[0].src).toBe('https://example.com/script.js')
            expect(scripts[0].getAttribute('data-api-key')).toBe('123')
        })
    })

    it('should parse and add divs to dom', async () => {
        const divInput = `
        <div id="test-div">Test Div</div>
    `
        const { container } = render(<ReturnNextScript code={divInput} location="body" />)

        await waitFor(() => {
            const divs = container.querySelectorAll('div')

            // Check divTags
            expect(divs.length).toBe(1)
            expect(divs[0].outerHTML).toBe('<div id="test-div">Test Div</div>')
        })
    })

    it('should parse and set multiple scripts and divs correctly', async () => {
        const sampleInputAll = `
        <div id="test-div">Test Div</div>
        <div id="test-div">Test Div2</div>
        <script>console.log('No src script')</script>
        <script src="https://example.com/script.js" data-api-key="123"></script>
    `
        const { container } = render(<ReturnNextScript code={sampleInputAll} location="body" />)

        await waitFor(() => {
            const scripts = container.querySelectorAll('script')
            const divs = container.querySelectorAll('div')

            //check first src script
            expect(scripts.length).toBe(2)
            expect(scripts[0].src).toBe('https://example.com/script.js') //script with src should be first
            expect(scripts[0].getAttribute('data-api-key')).toBe('123')

            // Check divTags
            expect(divs.length).toBe(2)
            expect(divs[0].outerHTML).toBe('<div id="test-div">Test Div</div>')

            // Check noSrcScripts added after src scripts
            expect(scripts[1].innerHTML).toContain("console.log('No src script')")
        })
    })
})

describe('HeadScript Component', () => {
    it('should parse and set scripts with a src correctly in the head', async () => {
        const sampleHTML = `
            <script src="https://example.com/script.js" data-api-key="123"></script>
        `
        render(<HeadScripts code={sampleHTML} />)

        await waitFor(() => {
            const headScripts = document.head.querySelectorAll('script')

            expect(headScripts.length).toBe(1)
            expect(headScripts[0].src).toBe('https://example.com/script.js')
            expect(headScripts[0].getAttribute('data-api-key')).toBe('123')
        })
    })
})
