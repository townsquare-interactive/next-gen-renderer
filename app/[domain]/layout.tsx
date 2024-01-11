import '../../styles/globals.scss'
//prevent large loading of fontawesome icons flashing
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { getFetchingUrl } from 'functions'
import { use } from 'react'
config.autoAddCss = false /* eslint-disable import/first */

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { domain: string; slug?: string } }) {
    let fetchingDomain = use(getFetchingUrl(params))
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
