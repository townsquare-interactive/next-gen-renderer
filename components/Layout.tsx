import data from '../components/moduleData'
import { GetStaticProps } from 'next'
import { FooterProps, ModuleData, LayoutProps, FooterData, NavProps } from '../components/types'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import useSWR, { Key, Fetcher } from 'swr'
import { useState } from 'react'

//export default function Layout({ children }: React.PropsWithChildren<{}>, { moduleData }: any) {
export default function Layout(props: LayoutProps) {
    const { children, moduleData } = props
    const [navCheck, setNav] = useState<boolean>(false)

    //Flipping state value for navbar visibility
    function navSwitch() {
        setNav(!navCheck)
        console.log(navCheck)
    }

    return (
        <>
            <Navbar navCheck={navCheck} navData={moduleData.navData} navStyle={moduleData.navData.navStyle} />
            <Navigation navSwitch={navSwitch} navCheck={navCheck} navStyle={moduleData.navData.navStyle} />

            <main>{children}</main>
            {/* <Footer {...(moduleData.FooterData as FooterProps)} /> */}
            <Footer footerData={moduleData.footerData as FooterData} navData={moduleData.navData} />
        </>
    )
}
