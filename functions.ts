import { ConditionalWrapperProps, Module } from 'components/types'

const bucketUrl = 'https://townsquareinteractive.s3.amazonaws.com'
const localUrl = 'elitesports.com/preview'
const env = process.env.NEXT_PUBLIC_URL_ENV
const domain = process.env.NEXT_PUBLIC_BASE_URL

//determines environment (preview/live) and creates url for it
function envCheck(api: string) {
    if (env === '1') {
        let liveUrl = encodeURI(api + '/' + domain + '/live')
        return liveUrl
    } else if (env === '0') {
        let previewUrl = encodeURI(api + '/' + domain + '/preview')
        return previewUrl
    } else {
        return api + '/' + localUrl
    }
}
//Grabs domain using env variables for json page fetching
export function getDomain() {
    const apiUrl = process.env.API_URL_DATA || bucketUrl
    let domainUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(apiUrl) : apiUrl + '/' + localUrl
    return domainUrl
}
//Determines url for grabbing images
export function domainImage(url: string, cms = false) {
    if (cms == true) {
        let imageUrl = 'http://clttestsiteforjoshedwards.production.townsquareinteractive.com' + url
        return encodeURI(imageUrl)
    } else {
        const assetsApi = process.env.NEXT_PUBLIC_API_URL_ASSETS || bucketUrl
        let imageUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(assetsApi) + '/assets' + url : assetsApi + '/' + localUrl + '/assets' + url
        return encodeURI(imageUrl)
    }
    /*  const assetsApi = process.env.NEXT_PUBLIC_API_URL_ASSETS || bucketUrl
    let imageUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(assetsApi) + '/assets' + url : assetsApi + '/' + localUrl + '/assets' + url
    return encodeURI(imageUrl) */
    //jedwards4044.github.io/website-assets/jremodeling.com/live/assets/bathroom-1.jpg
}

//Capitalize first letter of word
export function capitalize(str: string) {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}

//modifies cms page data
export function cmsPageDataMod(page: Module) {
    let newData = []

    for (const [key, value] of Object.entries(page)) {
        let modType

        if (value.type === 'article_1' || value.type === 'article_2' || value.type === 'article_3' || value.type === 'article') {
            modType = 'MyArticle'
        }

        const modData = { ...value, modId: key }

        const arr = { attributes: modData, componentType: modType }
        newData.push(arr)
    }
    return newData
}

//Used to have conditional tag wraps around code without repeating inside code
export const ConditionalWrapper = ({ condition, falseOutput, trueOutput, children }: ConditionalWrapperProps) =>
    condition ? trueOutput(children) : falseOutput(children)
