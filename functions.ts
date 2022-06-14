export function getDomain() {
    const apiUrl = process.env.API_URL || 'https://townsquareinteractive.s3.amazonaws.com'
    const domain = process.env.NEXT_PUBLIC_BASE_URL
    const env = process.env.NEXT_PUBLIC_URL_ENV

    if (env === '1') {
        let liveUrl = encodeURI(apiUrl + '/' + domain + '/live')
        return liveUrl
    } else if (env === '0') {
        let previewUrl = encodeURI(apiUrl + '/' + domain + '/preview')
        return previewUrl
    } else {
        console.log('Environment was not able to be determined')
        return apiUrl + 'elitesports.com/preview'
    }
}
//Adds current domain name in amazon for image urls
export function domainImage(url: string) {
    let imageUrl = getDomain() + '/assets' + url
    return encodeURI(imageUrl)
}

//Capitalize first letter of word
export function capitalize(str: string) {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}
