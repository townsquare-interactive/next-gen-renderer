import data from '../components/moduleData'
import { GetStaticProps } from 'next'
import { FooterProps, ModuleData, LayoutProps, FooterData, NavProps } from '../components/types'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import useSWR, { Key, Fetcher } from 'swr'
import { useState } from 'react'
import styles from './layout.module.scss'
import cn from 'classnames'

export default function Layout(props: LayoutProps) {
    const { children, moduleData } = props
    const [navCheck, setNav] = useState<boolean>(false)

    //Flipping state value for navbar visibility
    function navSwitch() {
        setNav(!navCheck)
        console.log(navCheck)
    }

    return (
        <div
            className={cn(styles.root, {
                [styles.layout1]: moduleData.navData.navStyle === 'layout1',
            })}
        >
            {/* <Navbar navCheck={navCheck} navData={moduleData.navData} navStyle={moduleData.navData.navStyle} /> */}
            <Navigation navSwitch={navSwitch} navCheck={navCheck} logoUrl={moduleData.logoUrl} navData={moduleData.navData} />

            <main>{children}</main>
            <Footer footerData={moduleData.footerData as FooterData} navData={moduleData.navData} logoUrl={moduleData.logoUrl} />
        </div>
    )
}
