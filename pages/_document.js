import { Html, Head, Main, NextScript } from 'next/document'
const cmsUrl = process.env.CMS_URL || 'clttestsiteforjoshedwards'
const s3ColorStyles = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'global.css'
const s3CustomStyles = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'custom.css'

function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href={s3ColorStyles} type="text/css"></link>
                <link rel="stylesheet" href={s3CustomStyles} type="text/css"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
