export function domain() {
    let domain = process.env.NEXT_PUBLIC_BASE_URL
    return process.env.NEXT_PUBLIC_BASE_URL ? encodeURI(domain + '') : 'localhost:3000'
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
