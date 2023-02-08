import '../styles/globals.scss'

const cmsUrl = process.env.CMS_URL || 'clttestsiteforjoshedwards'
const s3ColorStyles = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href={s3ColorStyles} type="text/css"></link>{' '}
            </head>
            <body>{children}</body>
        </html>
    )
}
