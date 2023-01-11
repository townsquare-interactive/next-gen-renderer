import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://townsquareinteractive.s3.amazonaws.com/clttestsiteforjoshedwards/global.scss"
                    type="text/css"
                    precedence="default"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
