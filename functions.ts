export function getDomain() {
    const apiUrl = process.env.API_URL_DATA || 'https://townsquareinteractive.s3.amazonaws.com'
    const domain = process.env.NEXT_PUBLIC_BASE_URL
    const env = process.env.NEXT_PUBLIC_URL_ENV

    if (env === '1') {
        let liveUrl = encodeURI(apiUrl + '/' + domain + '/live')
        return liveUrl
    } else if (env === '0') {
        let previewUrl = encodeURI(apiUrl + '/' + domain + '/preview')
        return previewUrl
    } else {
        // return apiUrl + '/' + 'jremodeling.com/live'
        return apiUrl + '/' + 'jremodeling.com/preview'
    }
}
//Adds current domain name in amazon for image urls
export function domainImage(url: string) {
    const assetsApi = process.env.NEXT_PUBLIC_API_URL_ASSETS || 'https://townsquareinteractive.s3.amazonaws.com'
    const domain = process.env.NEXT_PUBLIC_BASE_URL
    const env = process.env.NEXT_PUBLIC_URL_ENV
    let assetUrl

    if (env === '1') {
        let liveUrl = encodeURI(assetsApi + '/' + domain + '/live')
        assetUrl = liveUrl
    } else if (env === '0') {
        let previewUrl = encodeURI(assetsApi + '/' + domain + '/preview')
        assetUrl = previewUrl
    } else {
        /* assetUrl = 'https://jedwards4044.github.io/website-assets/jremodeling.com/live' */
        assetUrl = 'https://townsquareinteractive.s3.amazonaws.com/jremodeling.com/preview'
    }

    let imageUrl = assetUrl + '/assets' + url
    return encodeURI(imageUrl)
}

//jedwards4044.github.io/website-assets/jremodeling.com/live/assets/bathroom-1.jpg

//Capitalize first letter of word
export function capitalize(str: string) {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}
