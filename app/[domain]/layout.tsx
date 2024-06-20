import '../../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { generateLayout } from 'functions'
import ContextProviders from '../../context/ContextProviders'

type RootLayoutProps = {
    children: React.ReactNode
    params: { domain: string; slug: string }
}

export default async function RootLayout({ params, children }: RootLayoutProps) {
    const { CMSLayout } = await generateLayout(params)

    return (
        <html lang="en">
            <body>
                <ContextProviders>
                    <div>{children}</div>
                </ContextProviders>
                {CMSLayout.analytics?.gaId && <GoogleAnalytics gaId={CMSLayout.analytics.gaId} />}
                {CMSLayout.analytics?.gtmId && <GoogleTagManager gtmId={CMSLayout.analytics.gtmId} />}
            </body>
        </html>
    )
}
