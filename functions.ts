import { ConditionalWrapperProps, GlobalData, CMSPage } from 'types'
const bucketUrl = process.env.BUCKET_URL || 'https://townsquareinteractive.s3.amazonaws.com'
const localUrl = 'wanderlustadventures'
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'clttestsiteforjoshedwards'
const assetFolder = '/assets/'
//const globalAssets = bucketUrl + '/global-assets'
const env = process.env.NEXT_PUBLIC_URL_ENV
const domain = process.env.NEXT_PUBLIC_CMS_URL
const usePostgres = false
import { sql } from '@vercel/postgres'
//import { SiteDataSchema, CMSPageSchema, PageListSchema } from './zod-objects'

export const bucketAndSiteUrl = getDomain(true)

//determines environment (preview/live) and creates url for it
function envCheck(api: string) {
    if (env === '1') {
        let liveUrl = encodeURI(api + '/' + domain)
        return liveUrl
    } else if (env === '0') {
        let previewUrl = encodeURI(api + '/' + domain + '/preview')
        return previewUrl
    } else {
        return api + '/' + localUrl
    }
}
//Grabs domain using env variables for json page fetching
export function getDomain(cms = false) {
    //checking if using cms url
    if (cms === false || process.env.NEXT_PUBLIC_CMS_CLIENT === 'strapi') {
        const apiUrl = bucketUrl
        let domainUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(apiUrl) : apiUrl + '/' + localUrl
        return domainUrl
    } else {
        let domainUrl = bucketUrl + '/' + cmsUrl
        return domainUrl
    }
}

//Determines url for grabbing images
export function domainImage(url: string, cms = false, cmsSiteUrl = '', type = '') {
    const useStrapi = process.env.NEXT_PUBLIC_CMS_CLIENT === 'strapi' ? true : false
    if (cms == true) {
        if (useStrapi === true) {
            //http://127.0.0.1:1337'
            //let imageUrl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + url
            let imageUrl = url
            return imageUrl
        } else {
            //let imageUrl = 'http://' + (cmsSiteUrl || cmsUrl + '.production.townsquareinteractive.com') + url
            //return encodeURI(imageUrl)
            return url
        }
    } /* else {
        const assetsApi = process.env.NEXT_PUBLIC_API_URL_ASSETS || bucketUrl
        let imageUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(assetsApi) + '/assets' + url : assetsApi + '/' + localUrl + '/assets' + url
        return encodeURI(imageUrl)
    } */ else if (type === 'favicon') {
        if (useStrapi === true) {
            //http://127.0.0.1:1337'
            //let imageUrl = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + url
            let imageUrl = url
            return imageUrl
        } else {
            let imageUrl = bucketUrl + '/' + cmsSiteUrl + assetFolder + url

            return encodeURI(imageUrl)
        }
    } else {
        //let imageUrl = globalAssets + url
        return encodeURI(url)
    }
}

/*------------------------- Alternate CMS ----------------------------*/
/* //Sanity CMS
const client = createClient({
    projectId: '5q931z68',
    dataset: 'production',
    apiVersion: '2023-05-26',
    useCdn: false,
})

export async function getSanityPages() {
    const sanityPages = await client.fetch(`*[_type == "pages"]`)
    return sanityPages
}

export async function getSanitySiteData() {
    const sanitySiteData = await client.fetch(`*[_type == "sitedata"]`)
    return sanitySiteData
} */

/*----------------------------- End of Alt CMS --------------------------------*/

/*----------------------------- Forms --------------------------------*/

export async function subscribeMailChimp(url: string, headers: any, minData: any) {
    await fetch(url, {
        headers: headers,
        method: 'POST',
        //body: JSON.stringify({ email_address: email }),
        body: JSON.stringify(minData),
    })
}

export async function postContactFormRoute(url: string, data: any) {
    console.log(data)
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
    })
}

/*----------------------------- End of Forms --------------------------------*/

export function capitalize(str: string) {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}

export const findHomePageSlug = (pageList: any) => {
    const homePage = pageList?.pages?.filter((e: any) => e.page_type === 'homepage')
    const homePageSlug = homePage.length != 0 ? homePage[0].slug : pageList.pages[0].slug
    return homePageSlug
}

export const transformFetchingDomain = async (params: { slug?: string; domain: string }) => {
    let fetchingDomain
    let vercelDomain = params?.domain

    if (params?.domain.includes('favicon')) {
        console.log('using favicon')
        fetchingDomain = bucketUrl + '/' + cmsUrl

        //determine if we are on a live vercel hosted site
    } else if (params?.domain && (vercelDomain?.includes('vercel') || vercelDomain?.includes('.com'))) {
        //use domain mapping with postgres in vercel storage
        if (usePostgres) {
            const apexId = await getDomainListFromVercel(params.domain)
            console.log('using postgres apexId', apexId)
            return bucketUrl + '/' + apexId
        } else {
            console.log('using vercelDomain')
            const removeAfterPeriod = /\..*/
            fetchingDomain = vercelDomain?.replace(removeAfterPeriod, '')

            //remove vercel url prefixes (prev/preview indicate using the preview branch)
            fetchingDomain = fetchingDomain.replace('-preview', '')
            fetchingDomain = fetchingDomain.replace('-prev', '')
            fetchingDomain = fetchingDomain.replace('-main', '')
            fetchingDomain = bucketUrl + '/' + fetchingDomain
        }
    } else {
        console.log('using local domain')
        fetchingDomain = bucketUrl + '/' + cmsUrl
    }
    return fetchingDomain
}

export async function generateLayout(params: { slug: string; domain: string }) {
    const fetchingDomain = await getFetchingUrl(params)

    try {
        const resLayout = await fetch(fetchingDomain + '/layout.json', {
            next: { revalidate: 0 },
        })

        const CMSLayout = await resLayout.json()

        // Attempt to validate the incoming data against the schema
        //zodDataCheck(CMSLayout, SiteDataSchema, 'Layout File')

        return { CMSLayout }
    } catch (err) {
        console.log('layout fetch error', err)

        return { CMSLayout: 'error on fetch' }
    }
}

//check domain list to find basepath for fetching
export async function getDomainList(domainName?: string) {
    console.log('getDomainList arg', domainName)

    try {
        const resDomains = await fetch(bucketUrl + '/sites/domains.json', {
            next: { revalidate: 0 },
        })
        const domainList: any[] = await resDomains.json()

        for (const [key, value] of Object.entries(domainList)) {
            if (key === domainName) {
                console.log('key is domainname')
                return value
            }
        }
    } catch (err) {
        console.log('layout fetch error', err)

        return 'error on fetch'
    }
}

export function removeAfterFirstSlash(inputString: string) {
    const parts = inputString.split('/')
    const result = parts[0]
    return result
}

const fetchRedirect = async (url: string) => {
    const resRedirect = await fetch(url)

    if (resRedirect.ok) {
        const redirect = await resRedirect.json()
        return redirect
    } else if (resRedirect.status === 404) {
        // Handle the case where the file does not exist
        console.log('Redirect file not found')
        return 'redirect file not found'
    } else {
        // Handle other HTTP errors, also not found
        //console.error(`Error: ${resRedirect.status} - ${resRedirect.statusText}`)
        console.log('Redirect file not found')
        return 'redirect file not found'
    }
}

//get url to fetch s3 files from
export const getFetchingUrl = async (params: { slug?: string; domain: string }) => {
    let fetchingDomain
    fetchingDomain = await transformFetchingDomain(params)
    const redirect = await fetchRedirect(fetchingDomain + '/redirect.json')

    //if redirect file exists, use that new fetchingDomain
    if (redirect?.apexId) {
        console.log('redirecting', redirect.apexId)
        fetchingDomain = bucketUrl + '/' + redirect.apexId
    } else {
        console.log('no redirect')
    }

    return fetchingDomain
}

export async function getAnyPageData(params: { domain: string; slug?: string }) {
    let pageSlug
    const fetchingDomain = await getFetchingUrl(params)

    //zodDataCheck(pageList, PageListSchema, 'Page List')

    //determining the page slug
    if (!params?.slug) {
        try {
            const resPageList = await fetch(fetchingDomain + '/pages/page-list.json', {
                next: { revalidate: 10 },
            })
            const pageList = await resPageList.json()

            //zodDataCheck(pageList, PageListSchema, 'Page List')

            pageSlug = findHomePageSlug(pageList)
        } catch (err) {
            console.log('pagelist error', err)
        }
    } else {
        pageSlug = params.slug
    }

    try {
        const resPage = await fetch(fetchingDomain + '/pages/' + pageSlug + '.json', {
            next: { revalidate: 0 },
        })
        let page = await resPage.json()
        console.log('fetch worked for anypage')

        //zodDataCheck(page, CMSPageSchema, 'Page')

        return { page }
    } catch (err) {
        console.log('anypage fetch error', err)
        return { page: 'error on fetch' }
    }
}

export const getDomainListFromVercel = async (domain: string) => {
    const row = await sql`SELECT * FROM Domains WHERE domain = ${domain};`
    const apexId = row?.rows[0]?.apex_id || row?.rows[0]?.apexid || 'notfound'
    return apexId || 'notfound'
}

//check data based off Zod schema
const zodDataCheck = (data: any, schema: any, type: string) => {
    const validatedPageData = schema.safeParse(data)

    if (validatedPageData.success === false) {
        return console.log(`${type} zod error:`, JSON.stringify(validatedPageData))
    }
}

export function decideHeadTag(columns: number | string, tag: string, headerTag: string) {
    if ((headerTag === '1' || headerTag === 'h1') && tag === 'hd') {
        return 'h1'
    } else if (columns === 4) {
        return 'h5'
    } else if (columns === 3) {
        return 'h4'
    } else if (columns === 2) {
        return 'h2'
    } else {
        return 'h2'
    }
}

export function printPage() {
    print()
    return
}

export function defineContainerVars(page: CMSPage, siteData: GlobalData) {
    const cmsUrl = siteData.cmsUrl
    const themeStyles = siteData.cmsColors
    const columnStyles = page.data.columnStyles

    return { cmsUrl, themeStyles, columnStyles }
}

//Used to have conditional tag wraps around code without repeating inside code
export const ConditionalWrapper = ({ condition, falseOutput, trueOutput, children }: ConditionalWrapperProps) =>
    condition ? trueOutput(children) : falseOutput(children)
