import '../../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */
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
                {
                    CMSLayout.analytics?.gtmId && (
                        /* Google Tag Manager (noscript) */
                        <noscript>
                            <iframe
                                src={`https://www.googletagmanager.com/ns.html?id=${CMSLayout.analytics?.gtmId}`}
                                height="0"
                                width="0"
                                style={{ display: 'none', visibility: 'hidden' }}
                            ></iframe>
                        </noscript>
                    )
                    /* End Google Tag Manager (noscript) */
                }
                <ContextProviders>
                    <div>{children}</div>
                </ContextProviders>
            </body>
        </html>
    )
}
