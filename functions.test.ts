import { transformFetchingDomain } from './functions'
import { it, describe, expect } from 'vitest'

describe('transformFetchingDomain', () => {
    const cmsUrl = 'clttestsiteforjoshedwards'
    const s3Bucket = 'https://townsquareinteractive.s3.amazonaws.com/'

    it('should return our local domain when a normal string is passed', () => {
        expect(transformFetchingDomain({ domain: 'Hi' })).toBe(`${s3Bucket}${cmsUrl}`)
    })
    it('should return a stripped siteID when a vercel url is passed', () => {
        expect(transformFetchingDomain({ domain: 'bluesky.vercel.app' })).toBe(`${s3Bucket}bluesky`)
    })
    it('should return our local domain when favicon is passed', () => {
        expect(transformFetchingDomain({ domain: 'favicon.ico' })).toBe(`${s3Bucket}${cmsUrl}`)
    })
    it('should return sripped domain when given a .com url', () => {
        expect(transformFetchingDomain({ domain: 'bluesky.com' })).toBe(`${s3Bucket}bluesky`)
    })
})
