import '../../styles/globals.scss'
//prevent large loading of fontawesome icons flashing
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'joshedwardsclttestsite'
const bucketUrl = process.env.BUCKET_URL || 'https://townsquareinteractive.s3.amazonaws.com'

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { domain: string; slug?: string } }) {
    console.log('can we get layout params??', params)

    let fetchingDomain
    if (params.domain && !params.domain?.includes('jremod') && params.domain?.includes('vercel')) {
        console.log('using siteIDUrl')
        fetchingDomain = params.domain.replace('.vercel.app', '')
        fetchingDomain = fetchingDomain.replace('-preview', '')
        fetchingDomain = bucketUrl + '/' + fetchingDomain
    } else {
        console.log('using local domain')
        fetchingDomain = bucketUrl + '/' + cmsUrl
    }

    const s3ColorStyles = fetchingDomain + '/' + 'global.css'

    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href={s3ColorStyles} type="text/css"></link>
            </head>
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}
