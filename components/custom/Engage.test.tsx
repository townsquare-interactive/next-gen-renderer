import React from 'react'
import { render, waitFor } from '@testing-library/react'
import Engage from './Engage'
import { describe, it, expect, vi } from 'vitest'
import ContextProviders from '../../context/ContextProviders'

describe('Engage Component', () => {
    const mockPropsDefault = {
        businessId: 'WI-URPAA9YRD6TQG05IX80Z',
        setEngageLinks: vi.fn(),
    }

    it('renders without crashing', async () => {
        render(
            <ContextProviders>
                <Engage {...mockPropsDefault} />
            </ContextProviders>
        )

        await waitFor(() => {
            const scriptElement = document.getElementById('livesite-jssdk')
            expect(scriptElement).toBeInTheDocument()
            expect(scriptElement).toHaveAttribute('src', expect.stringContaining('d2ra6nuwn69ktl.cloudfront.net/assets/livesite.js'))
        })
    })

    it('applies theme colors to styles', async () => {
        const themeColors = {
            color: '#000000',
            bgColor: '#ffffff',
            buttonTextColor: '#111111',
            buttonBgColor: '#222222',
            labelTextColor: '#333333',
            labelBgColor: '#444444',
        }

        const { container } = render(
            <ContextProviders>
                <Engage {...mockPropsDefault} themeColors={themeColors} />
            </ContextProviders>
        )

        await waitFor(() => {
            const styleTag = container.querySelector('style')
            expect(styleTag).not.toBeNull()
            expect(styleTag?.innerHTML).toContain('#livesite_active_engage .ls-ae-text-T { color: #000000; }')
            expect(styleTag?.innerHTML).toContain('#livesite_active_engage .ls-ae-bg-T { background-color: #ffffff; }')
        })
    })
})
