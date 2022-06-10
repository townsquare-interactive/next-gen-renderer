export function getDomain() {
    let domain = process.env.NEXT_PUBLIC_BASE_URL
    let env = process.env.NEXT_PUBLIC_URL_ENV
    //test
    //let domain = process.env.NEXT_PUBLIC_BASE_URL
    if (process.env.NEXT_PUBLIC_URL_ENV === '1') {
        return encodeURI('https://townsquareinteractive2.s3.amazonaws.com/' + domain + '/live')
    } else if (process.env.NEXT_PUBLIC_URL_ENV === '0') {
        return encodeURI('https://townsquareinteractive2.s3.amazonaws.com/' + domain + '/preview')
    } else {
        // console.log('didnt work')
        return 'https://townsquareinteractive2.s3.amazonaws.com/jremodeling.com/live'
    }

    // return process.env.NEXT_PUBLIC_BASE_URL ? encodeURI(domain + '') : 'travel365.com/preview'
    //return process.env.NEXT_PUBLIC_BASE_URL ? encodeURI(domain + '') : 'jremodeling.com:3000'
}
//Adds current domain name in amazon for image urls
export function domainImage(url: string) {
    return getDomain() + '/Assets' + url
}

//Capitalize first letter of word
export function capitalize(str: string) {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}
