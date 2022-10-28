import { ConditionalWrapperProps, Module, PageProps, CMSColors, Pagelist } from 'components/types'

import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRocket, faEnvelope, faPrint, faPhone, faLocationPin, faBars } from '@fortawesome/free-solid-svg-icons'

const bucketUrl = 'https://townsquareinteractive.s3.amazonaws.com'
const localUrl = 'elitesports.com/preview'
const cmsUrl = 'clttestsiteforjoshedwards'
//const cmsUrl = 'joshedwards'
//const cmsUrl = 'kaseypaztest'
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
export function getDomain(cms = false) {
    //checking if using cms url
    if (cms === false) {
        const apiUrl = process.env.API_URL_DATA || bucketUrl
        let domainUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(apiUrl) : apiUrl + '/' + localUrl
        return domainUrl
    } else {
        let domainUrl = bucketUrl + '/' + cmsUrl
        /*  let domainUrl = bucketUrl + '/' + 'wordpress' */
        return domainUrl
    }
}

//Determines url for grabbing images
export function domainImage(url: string, cms = false, cmsSiteUrl = '') {
    if (cms == true) {
        let imageUrl = 'http://' + (cmsSiteUrl || cmsUrl + '.production.townsquareinteractive.com') + url
        return encodeURI(imageUrl)
    } else {
        const assetsApi = process.env.NEXT_PUBLIC_API_URL_ASSETS || bucketUrl
        let imageUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(assetsApi) + '/assets' + url : assetsApi + '/' + localUrl + '/assets' + url
        return encodeURI(imageUrl)
    }
}

export const setColors = (cmsGlobalDesign: CMSColors, cmsTheme: string) => {
    if (cmsTheme === 'beacon-theme_charlotte') {
        return {
            mainColor: cmsGlobalDesign.color_31.value,
            textColor: cmsGlobalDesign.color_4.value,
            headingColor: cmsGlobalDesign.color_2.value,
            subHeadingColor: cmsGlobalDesign?.color_3.value,
            textColorAccent: cmsGlobalDesign.color_9.value,
            linkColor: cmsGlobalDesign.color_5.value,
            accentBackgroundColor: cmsGlobalDesign.color_8.value,
            accentColor2: cmsGlobalDesign.color_32.value,
            altColor: cmsGlobalDesign.color_31.value,
            headerBackground: cmsGlobalDesign.color_23.value,
            footerBackground: cmsGlobalDesign.color_27.value,
            navBackground: cmsGlobalDesign.color_23.value,
            BckdHeaderSocial: cmsGlobalDesign.color_24.value,
            NavText: cmsGlobalDesign.color_18.value,
            linkHover: cmsGlobalDesign.color_6.value,
            bckdContent: cmsGlobalDesign.color_22.value,
            footerText: cmsGlobalDesign.color_28.value,
        }
    } else {
        return {
            mainColor: cmsGlobalDesign?.color_3.value,
            textColor: cmsGlobalDesign?.color_3a.value,
            headingColor: cmsGlobalDesign?.color_2.value,
            subHeadingColor: cmsGlobalDesign?.color_3.value,
            textColorAccent: cmsGlobalDesign?.color_4.value,
            linkColor: cmsGlobalDesign?.color_19.value,
            accentBackgroundColor: cmsGlobalDesign?.color_3.value,
            accentColor2: cmsGlobalDesign?.color_16.value,
            altColor: cmsGlobalDesign?.color_16.value,
            headerBackground: cmsGlobalDesign?.color_17.value,
            footerBackground: cmsGlobalDesign?.color_20.value,
            navBackground: cmsGlobalDesign?.color_16.value,
            BckdHeaderSocial: cmsGlobalDesign?.color_17.value,
            NavText: cmsGlobalDesign?.color_18.value,
            linkHover: cmsGlobalDesign?.color_7.value,
            footerText: cmsGlobalDesign?.color_12.value,
        }
    }
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

export const decideColumns = (page: PageProps) => {
    if (page.sections[1].wide == '938') {
        return 'wide-column'
    } else if (page.sections[1].wide == '484' && page.sections[2].wide == '484') {
        return 'half-columns'
    } else if (page.sections[1].wide == '316' && page.sections[2].wide == '316' && page.sections[3].wide == '316') {
        return 'third-columns'
    } else if (page.sections[1].wide == '232' && page.sections[2].wide == '232' && page.sections[3].wide == '232' && page.sections[4].wide == '232') {
        return 'fourth-columns'
    } else if (page.sections[1].wide == '652' && page.sections[2].wide == '316') {
        return 'two-third_one-third'
    } else if (page.sections[1].wide == '316' && page.sections[2].wide == '652') {
        return 'one-third_two-third'
    } else if (page.sections[1].wide == '232' && page.sections[2].wide == '736') {
        return 'one-fourth_three-fourth'
    } else if (page.sections[1].wide == '736' && page.sections[2].wide == '232') {
        return 'three-fourth_one-fourth'
    } else if (page.sections[1].wide == '484' && page.sections[2].wide == '232' && page.sections[3].wide == '232') {
        return 'half_one-fourth_one-fourth'
    } else if (page.sections[1].wide == '232' && page.sections[2].wide == '232' && page.sections[3].wide == '484') {
        return 'one-fourth_one-fourth_half'
    } else if (page.sections[1].wide == '232' && page.sections[2].wide == '484' && page.sections[3].wide == '232') {
        return 'one-fourth_half_one-fourth'
    }
}

export const findHomePageSlug = (pageList: Pagelist) => {
    if (pageList.pages) {
        const homePage = pageList.pages?.filter((e: any) => e.page_type === 'homepage')
        const homePageSlug = homePage.length != 0 ? homePage[0].slug : pageList.pages[0].slug
        return homePageSlug
    } else {
        return pageList
    }
}

export function iconConvert(str: string) {
    if (str.indexOf('google') !== -1) {
        return 'google'
    } else if (str.indexOf('facebook') !== -1) {
        return 'facebook'
    } else if (str.indexOf('instagram') !== -1) {
        return 'instagram'
    } else if (str.indexOf('twitter') !== -1) {
        return 'twitter'
    } else {
        return 'social'
    }
}

export function socialConvert(str: string) {
    let icon = iconConvert(str)
    if (icon === 'google') {
        return faGoogle
    } else if (icon === 'facebook') {
        return faFacebook
    } else if (icon === 'instagram') {
        return faInstagram
    } else if (icon === 'twitter') {
        return faTwitter
    } else {
        return faRocket
    }
}

export function extUrl(url: string) {
    if (url.includes('http')) {
        return url
    } else {
        return 'http://' + url
    }
}

//Used to have conditional tag wraps around code without repeating inside code
export const ConditionalWrapper = ({ condition, falseOutput, trueOutput, children }: ConditionalWrapperProps) =>
    condition ? trueOutput(children) : falseOutput(children)
