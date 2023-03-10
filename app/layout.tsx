/* import { getCssFileFromS3 } from 'functions'
import { use } from 'react' */
import '../styles/globals.scss'

const cmsUrl = process.env.CMS_URL || 'clttestsiteforjoshedwards'
const s3ColorStyles = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    /* const s3Styles = use(getCssFileFromS3())
    console.log(s3Styles.s3Styles) */

    //bottom of body has better results for lighthouse with <link>

    return (
        <html lang="en">
            <head></head>
            <body>
                {children}
                {/* <style>{`@import url(${s3ColorStyles});`}</style> */}
                {/*   <style>{CMSLayout.fontImport}</style> */}
                <link rel="stylesheet" href={s3ColorStyles} type="text/css"></link>
            </body>
        </html>
    )
}
