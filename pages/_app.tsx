import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { FooterProps } from '../components/types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Burger from '../components/Burger'

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
            <Burger navSwitch={navSwitch} />
            {/* <Burger /> */}
            {/* <Navbar /> */}

            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
