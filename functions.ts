import { ConditionalWrapperProps, Module, PageProps, CMSColors, Pagelist, ThemeStyles } from 'types'

import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRocket, faEnvelope, faPrint, faPhone, faLocationPin, faBars, faAnchor, faArchway } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

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

export function createInlineStyles(themeStyles: ThemeStyles) {
    const textColors = `.accent-txt{color:${themeStyles['textColorAccent']}} .txt-color{color:${themeStyles['textColor']}} .txt-color-heading{color:${themeStyles['headingColor']}} .navLink:hover{color: ${themeStyles['navHover']}} .navLink{color:${themeStyles['NavText']}} .socialIcon:hover{background-color: ${themeStyles['navHover']}} .socialIcon{color:${themeStyles['NavText']}} .currentNav{color:${themeStyles['navCurrent']}} .caption-txt{color:${themeStyles.captionText}}`

    const btnStyles = `.btn_1{color: ${themeStyles['textColorAccent']}; background-color: ${themeStyles['btnBackground']}} .btn_1:hover{color: ${themeStyles['btnBackground']}; background-color: ${themeStyles['textColorAccent']}} .btn_2{color: ${themeStyles['linkColor']}; border-color: ${themeStyles['linkColor']}} .btn_2:hover{color: ${themeStyles['btnBackground']}; border-color: ${themeStyles['btnBackground']}}`

    const colorStyles = textColors + btnStyles

    return colorStyles
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

export const findHomePageSlug = (pageList: any) => {
    const homePage = pageList?.pages?.filter((e: any) => e.page_type === 'homepage')
    const homePageSlug = homePage.length != 0 ? homePage[0].slug : pageList.pages[0].slug
    return homePageSlug
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

//Key to determine which imported logo to use
export const icons: { [key: string]: IconProp } = {
    faRocket,
    faAnchor,
    faArchway,
}

export function btnIconConver(icon: any) {
    if (icon) {
        //replaces fas fa-rocket with faRocket

        const newicon = icon.replace('fas', '')
        const newicon2 = newicon.replace(/^(.*?)-/, '')

        const theicon = 'fa' + capitalize(newicon2)

        return icons[theicon]
    }
}

export function extUrl(url: string) {
    if (url.includes('http')) {
        return url
    } else {
        return 'http://' + url
    }
}

export async function getLayout() {
    const resLayout = await fetch(getDomain(true) + '/layout.json', {
        next: { revalidate: 10 },
    })

    const CMSLayout = await resLayout.json()

    return { CMSLayout }
}

export async function getPageData(params: { slug: string }) {
    let pageSlug
    if (!params) {
        const resPageList = await fetch(getDomain(true) + '/pages/page-list.json', {
            next: { revalidate: 10 },
        })
        const pageList = await resPageList.json()

        pageSlug = findHomePageSlug(pageList)
    } else {
        pageSlug = params.slug
    }

    const resPage = await fetch(getDomain(true) + '/pages/' + pageSlug + '.json', {
        next: { revalidate: 10 },
    })
    let page = await resPage.json()

    return { page }
}

export function decideHeadTag(columns: number | string, tag: string, headerTag: string) {
    if (headerTag === '1' && tag === 'hd') {
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

//Used to have conditional tag wraps around code without repeating inside code
export const ConditionalWrapper = ({ condition, falseOutput, trueOutput, children }: ConditionalWrapperProps) =>
    condition ? trueOutput(children) : falseOutput(children)
