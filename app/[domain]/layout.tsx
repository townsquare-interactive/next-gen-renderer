import '../../styles/globals.scss'
//prevent large loading of fontawesome icons flashing
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { domain: string; slug?: string } }) {
    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
            {/*             <GoogleAnalytics gaId="G-X2KTSC74LF" />
            <GoogleTagManager gtmId="GTM-XYZ" /> */}
        </html>
    )
}
