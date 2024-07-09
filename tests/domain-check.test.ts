import { describe, it, expect } from 'vitest'

describe('Deployed Home Page Build Status', () => {
    it('main branch live URL should retunr a 200 status', async () => {
        const response = await fetch('https://next-gen-renderer-git-main-townsquare-interactive.vercel.app/')
        expect(response.status).toBe(200)
    })
    it('preview branch live URL should retunr a 200 status', async () => {
        const response = await fetch('https://vercel.live/link/next-gen-renderer-git-preview-townsquare-interactive.vercel.app?')
        expect(response.status).toBe(200)
    })
})
