import '../../styles/globals.scss'
//prevent large loading of fontawesome icons flashing
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { getFetchingUrl } from 'functions'
config.autoAddCss = false /* eslint-disable import/first */

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { domain: string; slug?: string } }) {
    const fetchingDomain = await getFetchingUrl(params)
    const s3ColorStyles = fetchingDomain + '/' + 'global.css'

    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}
