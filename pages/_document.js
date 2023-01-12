import { Html, Head, Main, NextScript } from 'next/document'
const cmsUrl = process.env.CMS_URL || 'clttestsiteforjoshedwards'
const s3Stylesheet = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'global.scss'

function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href={s3Stylesheet} type="text/css"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
