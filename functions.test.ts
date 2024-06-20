import { transformFetchingDomain, decideHeadTag, removeAfterFirstSlash } from './functions'
import { it, describe, expect } from 'vitest'

describe('transformFetchingDomain', () => {
    const cmsUrl = 'clttestsiteforjoshedwards'
    const s3Bucket = 'https://townsquareinteractive.s3.amazonaws.com/'

    it('should return our local domain when a normal string is passed', async () => {
        expect(await transformFetchingDomain({ domain: 'Hi' })).toBe(`${s3Bucket}${cmsUrl}`)
    })

    it('should return a stripped siteID when a vercel url is passed', async () => {
        expect(await transformFetchingDomain({ domain: 'bluesky.vercel.app' })).toBe(`${s3Bucket}bluesky`)
    })

    it('should return our local domain when favicon is passed', async () => {
        expect(await transformFetchingDomain({ domain: 'favicon.ico' })).toBe(`${s3Bucket}${cmsUrl}`)
    })

    it('should return stripped domain when given a .com url', async () => {
        expect(await transformFetchingDomain({ domain: 'bluesky.com' })).toBe(`${s3Bucket}bluesky`)
    })

    it('should return stripped domain without -preview', async () => {
        expect(await transformFetchingDomain({ domain: 'bluesky-preview.com' })).toBe(`${s3Bucket}bluesky`)
    })
})

describe('Decide Head Tag', () => {
    it('should return h2 for a headline with 1 column', () => {
        expect(decideHeadTag(1, 'hd', '')).toBe(`h2`)
    })
    it('should return h2 for a subheadline with 1 column', () => {
        expect(decideHeadTag(1, 'sh', '')).toBe(`h2`)
    })
    it('should return h2 for a headline with 2 column', () => {
        expect(decideHeadTag(2, 'hd', '')).toBe(`h2`)
    })
    it('should return h4 for a headline with 3 column', () => {
        expect(decideHeadTag(3, 'hd', '')).toBe(`h4`)
    })
    it('should return h5 for a headline with 4 column', () => {
        expect(decideHeadTag(4, 'hd', '')).toBe(`h5`)
    })
    it('should return h1 when 1 is passed as headerTag and the type is hd', () => {
        expect(decideHeadTag(1, 'hd', '1')).toBe(`h1`)
    })
    it('should return h2 when 1 is passed as headerTag but the type is sh', () => {
        expect(decideHeadTag(1, 'sh', '1')).toBe(`h2`)
    })
})

describe('Remove after first slash', () => {
    it('should remove content after the slash', () => {
        expect(removeAfterFirstSlash('josh/remove')).toBe(`josh`)
    })
    it('should remove everything after the first slash', () => {
        expect(removeAfterFirstSlash('josh/remove/thistoo')).toBe(`josh`)
    })
    it('should leave the string without a slash untouched ', () => {
        expect(removeAfterFirstSlash('josh')).toBe(`josh`)
    })
})
