import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { FooterProps } from '../components/types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Burger from '../components/Burger'
import Navigation from '../components/Navigation'

import data from '../components/moduleData'

/* export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { moduleData: data },
    }
}
 */

function MyApp({ Component, pageProps }: AppProps) {
    /* const [isHover, handleHover] = useState<boolean>(false)

        function hoverSwitch() {
        handleHover(!isHover)
        console.log(isHover)
    } */

    const [navCheck, setNav] = useState<boolean>(false)

    function navSwitch() {
        setNav(!navCheck)
        console.log(navCheck)
    }

    const [isHover, handleHover] = useState<boolean>(false)
    function hoverSwitch() {
        handleHover(!isHover)
        console.log(isHover)
    }

    return (
        <div>
            <Navbar navCheck={navCheck} />
            <Navigation navSwitch={navSwitch} navCheck={navCheck} />
            {/* <Burger navSwitch={navSwitch} navCheck={navCheck} /> */}
            {/* <Burger /> */}

            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
