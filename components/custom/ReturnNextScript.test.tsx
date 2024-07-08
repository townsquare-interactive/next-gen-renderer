import { render, waitFor } from '@testing-library/react'
import ReturnNextScript from './ReturnNextScript'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'

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
        default: ({ src, ...props }: ScriptProps) => <script src={src} {...props}></script>,
    }))

    // Mock the NoSrcScripts component
    vi.mock('./NoSrcScripts', () => ({
        __esModule: true,
        default: ({ noSrcScripts }: NoSrcScriptsProps) => (
            <div>
                {noSrcScripts.map((script) => (
                    <script key={script.id} dangerouslySetInnerHTML={{ __html: script.script }} />
                ))}
            </div>
        ),
    }))

    it('should parse and set scripts with a src correctly', async () => {
        const sampleHTML = `
        <script src="https://example.com/script.js" data-api-key="123"></script>
    `
        const { container } = render(<ReturnNextScript code={sampleHTML} />)

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
        const { container } = render(<ReturnNextScript code={divInput} />)

        await waitFor(() => {
            const divs = container.querySelectorAll('div')

            // Check divTags
            expect(divs.length).toBe(2)
            expect(divs[0].outerHTML).toBe('<div id="test-div">Test Div</div>')
        })
    })

    it('should parse and set multiple scripts and divs correctly', async () => {
        const sampleInputAll = `
        <div id="test-div">Test Div</div>
        <script>console.log('No src script')</script>
        <script src="https://example.com/script.js" data-api-key="123"></script>
    `
        const { container } = render(<ReturnNextScript code={sampleInputAll} />)

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
