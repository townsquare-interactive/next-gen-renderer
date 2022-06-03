const domain = encodeURI(process.env.NEXT_PUBLIC_BASE_URL + '')

export function domainImage(url: string) {
    return 'https://townsquareinteractive.s3.amazonaws.com/' + domain + '/Assets' + url
}
