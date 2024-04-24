import '../../styles/globals.scss'
//prevent large loading of fontawesome icons flashing
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { generateLayout } from 'functions'

export default async function RootLayout({ params, children }: { children: React.ReactNode; params: { domain: string; slug: string } }) {
    const { CMSLayout } = await generateLayout(params)
    //Testing IDs, gaId:"G-X2KTSC74LF" , gtmId:"GTM-XYZ"

    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
            {CMSLayout.analytics?.gaId && <GoogleAnalytics gaId={CMSLayout.analytics.gaId} />}
            {CMSLayout.analytics?.gtmId && <GoogleTagManager gtmId={CMSLayout.analytics.gtmId} />}
        </html>
    )
}
