const domain = encodeURI(process.env.NEXT_PUBLIC_BASE_URL + '')

//Adds current domain name in amazon for image urls
export function domainImage(url: string) {
    return 'https://townsquareinteractive.s3.amazonaws.com/' + domain + '/Assets' + url
}

//Capitalize first letter of word
export function capitalize(str: string) {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}
