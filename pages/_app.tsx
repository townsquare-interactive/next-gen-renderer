import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import { useState } from 'react'
import { FooterProps, ModuleData, HomeProps, NavProps } from '../components/types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
    const [navCheck, setNav] = useState<boolean>(false)

    function navSwitch() {
        setNav(!navCheck)
        console.log(navCheck)
    }

    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
