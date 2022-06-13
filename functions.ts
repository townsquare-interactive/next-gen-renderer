export function getDomain() {
    const bucketUrl = 'https://townsquareinteractive.s3.amazonaws.com/'
    const domain = process.env.NEXT_PUBLIC_BASE_URL
    //const env = process.env.NEXT_PUBLIC_URL_ENV

    if (process.env.URL_ENV === '1') {
        return encodeURI(bucketUrl + domain + '/live')
    } else if (process.env.URL_ENV === '0') {
        return encodeURI(bucketUrl + domain + '/preview')
    } else {
        // console.log('didnt work')
        return bucketUrl + 'jremodeling.com/live'
    }

    // return process.env.NEXT_PUBLIC_BASE_URL ? encodeURI(domain + '') : 'travel365.com/preview'
    //return process.env.NEXT_PUBLIC_BASE_URL ? encodeURI(domain + '') : 'jremodeling.com:3000'
}
//Adds current domain name in amazon for image urls
export function domainImage(url: string) {
    return encodeURI(getDomain() + '/assets' + url)
}

//Capitalize first letter of word
export function capitalize(str: string) {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}
