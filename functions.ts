import { ConditionalWrapperProps, ThemeStyles, GlobalData, CMSPage, ContactFormData } from 'types'
import { revalidateTag } from 'next/cache'
const bucketUrl = process.env.BUCKET_URL || 'https://townsquareinteractive.s3.amazonaws.com'
const localUrl = 'wanderlustadventures'
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'clttestsiteforjoshedwards'
const assetFolder = '/assets/'
const globalAssets = bucketUrl + '/global-assets'
const env = process.env.NEXT_PUBLIC_URL_ENV
const domain = process.env.NEXT_PUBLIC_CMS_URL
//import { createClient } from 'next-sanity'

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
            let imageUrl = 'http://' + (cmsSiteUrl || cmsUrl + '.production.townsquareinteractive.com') + url
            return encodeURI(imageUrl)
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
        let imageUrl = globalAssets + url
        return encodeURI(imageUrl)
    }
}

/*------------------------- CMS ----------------------------*/
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

// Strapi CMS
export async function getStrapiPages() {
    const token = process.env.STRAPI_TOKEN
    try {
        //need populate=deep to get all records, plugin for strapi
        const resStrapiPages = await fetch('http://127.0.0.1:1337/api/pages?populate=deep', {
            next: { revalidate: 10 },
        })
        const strapiPages = await resStrapiPages.json()
        return { strapiPages }
    } catch (error) {
        console.log(error)
        return { error: 'Strapi fetch error' }
    }
}

/*----------------------------- End of CMS --------------------------------*/

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

export async function generateLayout() {
    const resLayout = await fetch(getDomain(true) + '/layout.json', {
        next: { revalidate: 5 },
    })

    const CMSLayout = await resLayout.json()

    return { CMSLayout }
}

export async function getPageData(params: { slug: string }) {
    let pageSlug
    if (!params) {
        const resPageList = await fetch(getDomain(true) + '/pages/page-list.json', {
            //next: { revalidate: 10 },
            next: { tags: ['pageData'] },
        })
        revalidateTag('pageData')
        const pageList = await resPageList.json()

        pageSlug = findHomePageSlug(pageList)
    } else {
        pageSlug = params.slug
    }

    const resPage = await fetch(getDomain(true) + '/pages/' + pageSlug + '.json', { cache: 'no-store' })
    let page = await resPage.json()

    return { page }
}

export async function getHomePage() {
    let pageSlug

    const resPageList = await fetch(getDomain(true) + '/pages/page-list.json', {
        next: { revalidate: 10 },
    })
    const pageList = await resPageList.json()

    pageSlug = findHomePageSlug(pageList)

    const resPage = await fetch(getDomain(true) + '/pages/' + pageSlug + '.json', { cache: 'no-store' })
    let page = await resPage.json()

    return { page }
}

/* export async function getHomePage2() {
    let pageSlug

    try {
        const resPageList = await fetch(getDomain(true) + '/pages/page-list.json', {
            next: { revalidate: 10 },
        })
        const pageList = await resPageList.json()

        pageSlug = findHomePageSlug(pageList)

        const resPage = await fetch(getDomain(true) + '/pages/' + pageSlug + '.json', {
            next: { revalidate: 5 },
        })
        let page = await resPage.json()

        return { page }
    } catch (err) {
        console.log(err)
    }
} */

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
