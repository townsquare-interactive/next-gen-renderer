import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import { useState } from 'react'
import { FooterProps, ModuleData, HomeProps, NavProps } from '../types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import { Ubuntu } from '@next/font/google'
import { Inter } from '@next/font/google'

/* const ubuntu = Ubuntu({
    weight: '400',
    variable: '--oxygen-font',
})
 */
const inter = Inter({
    variable: '--inter-font',
})

function MyApp({ Component, pageProps }: AppProps) {
    const [navCheck, setNav] = useState<boolean>(false)

    return (
        <div className={inter.variable}>
            <div className={'text'}>
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp
