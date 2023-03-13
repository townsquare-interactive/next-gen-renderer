import { getCssFileFromS3, generateLayout } from 'functions'
import { use } from 'react'
import '../styles/globals.scss'
import cn from 'classnames'
//import { Inter, Lora, Lato, Abril_Fatface } from 'next/font/google'
import {
    Inter,
    Lora,
    Abril_Fatface,
    Lato,
    Alegreya_Sans,
    Alegreya_Sans_SC,
    Amatic_SC,
    Anton,
    Artifika,
    Arvo,
    Autour_One,
    Barlow,
    Barlow_Condensed,
    BenchNine,
    Bevan,
    Bree_Serif,
    Cantarell,
    Changa_One,
    Cormorant_Garamond,
    Dosis,
} from 'next/font/google'

//const fonts = require('next/font/google')

/* if (true) {
    import('next/font/google').then((something) => {
        console.log(something)
    })
} */

//console.log(Object.entries(exports).forEach(([name, exported]) => (window[name] = exported)))
/* const stuff = require('next/font/google')
console.log(stuff) */

import * as fonts from '../node_modules/next/dist/compiled/@next/font/dist/google/font-data.json'

//console.log(fontFuncs.Lato)
/*
async function load() {
    let say = await import('next/font/google')
    console.log(say)
}

load() */

const inter = Inter({ subsets: ['latin'] })

const lato = Lato({ weight: ['300', '400', '700'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--lato' })
const lora = Lora({ subsets: ['latin'], variable: '--lora' })
const abril_flatface = Abril_Fatface({ weight: ['400'], style: ['normal'], subsets: ['latin'], variable: '--abril_flatface' })

const alegreya_sans = Alegreya_Sans({ weight: ['300', '400', '700'], subsets: ['latin'] })
const alegreya_sans_sc = Alegreya_Sans_SC({ weight: ['300', '400', '700'], subsets: ['latin'] })
const amatic_sC = Amatic_SC({ weight: ['400', '700'], subsets: ['latin'] })

const anton = Anton({ weight: ['400'], subsets: ['latin'] })
const artifika = Artifika({ weight: ['400'], subsets: ['latin'] })
const arvo = Arvo({ weight: ['400', '700'], subsets: ['latin'] })

const autour_one = Autour_One({ weight: ['400'], subsets: ['latin'] })

//const function_name = eval('Barlow')
const barlow = Barlow({ weight: ['400', '700'], subsets: ['latin'] })
const barlow_condensed = Barlow_Condensed({ weight: ['400', '700'], subsets: ['latin'] })
const benchnine = BenchNine({ weight: ['400', '700'], subsets: ['latin'] })

const bevan = Bevan({ weight: ['400'], subsets: ['latin'] })
const bree_serif = Bree_Serif({ weight: ['400'], subsets: ['latin'] })
const cantarell = Cantarell({ weight: ['400', '700'], subsets: ['latin'] })

const changa_one = Changa_One({ weight: ['400'], subsets: ['latin'] })
const cormorant_garamond = Cormorant_Garamond({ weight: ['400', '700'], subsets: ['latin'] })
const dosis = Dosis({ weight: ['400', '700'], subsets: ['latin'] })

const theChart = ['barlow', 'dosis']

//import { Inter } from 'next/font/google'

/* const DynamicHeader = dynamic(() => import { Inter } from 'next/font/google', {
  loading: () => <p>Loading...</p>,
})  */

// If loading a variable font, you don't need to specify the font weight
//const inter = Inter({ subsets: ['latin'] })

const cmsUrl = process.env.CMS_URL || 'clttestsiteforjoshedwards'
const s3ColorStyles = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'global.css'

const fontStyle = `@font-face {
    font-family: "Cal Sans";
    font-display: fallback;
    src: url(PASTE-BASE64-HERE) format('woff2')
  }`

export default function RootLayout({ children }: { children: React.ReactNode }) {
    /*  const s3Styles = use(getCssFileFromS3())
    console.log(s3Styles.s3Styles) */

    //bottom of body has better results for lighthouse with <link>
    //const { CMSLayout } = use(generateLayout())

    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href={s3ColorStyles} type="text/css"></link>
            </head>
            <body className={cn(lato.variable, lora.variable, abril_flatface.variable)}>
                <div>
                    {children}
                    {/* <style>{`@import url(${s3ColorStyles});`}</style> */}
                    {/*  <style>{CMSLayout.fontImport}</style> */}
                </div>
            </body>
        </html>
    )
}
