import '../styles/globals.scss'
//import { getHomePage, generateLayout } from '../functions'
//import { use, useEffect, useState } from 'react'
//import { Inter, Lora, Abril_Fatface, Lato } from 'next/font/google'

//prevent large loading of fontawesome icons flashing
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'joshedwardsclttestsite'
const bucketUrl = process.env.BUCKET_URL || 'https://townsquareinteractive.s3.amazonaws.com'
const s3ColorStyles = bucketUrl + '/' + cmsUrl + '/' + 'global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
