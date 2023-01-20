import { Html, Head, Main, NextScript } from 'next/document'
const cmsUrl = process.env.CMS_URL || 'clttestsiteforjoshedwards'
const s3ColorStyles = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'global.css'

//
function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href={s3ColorStyles} type="text/css"></link>
            </Head>
            <body>
                <Main />
                <NextScript></NextScript>
            </body>
        </Html>
    )
}

export default Document
