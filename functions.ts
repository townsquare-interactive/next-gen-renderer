export function domain() {
    let domain = process.env.BASE_URL
    let env = process.env.URL_ENV

    //let domain = process.env.NEXT_PUBLIC_BASE_URL
    if (process.env.URL_ENV == '1') {
        return encodeURI(domain + '/live')
    } else if (process.env.URL_ENV == '0') {
        return encodeURI(domain + '/preview')
    } else {
        return 'jremodeling.com/live'
    }

    // return process.env.NEXT_PUBLIC_BASE_URL ? encodeURI(domain + '') : 'travel365.com/preview'
    //return process.env.NEXT_PUBLIC_BASE_URL ? encodeURI(domain + '') : 'jremodeling.com:3000'
}
//Adds current domain name in amazon for image urls
export function domainImage(url: string) {
    return 'https://townsquareinteractive.s3.amazonaws.com/' + domain() + '/Assets' + url
}

//Capitalize first letter of word
export function capitalize(str: string) {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}
