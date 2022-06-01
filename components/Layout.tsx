import data from '../components/moduleData'
import { GetStaticProps } from 'next'
import { FooterProps, ModuleData, LayoutProps, NavProps, NavigationProps, NavModule, FooterModule } from '../components/types'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'

import styles from './layout.module.scss'
import cn from 'classnames'
import { Renderer } from '../components/Renderer'

export default function Layout(props: LayoutProps) {
    /* const { children, moduleData, pageList } = props */
    const { children, moduleData } = props

    const navigationModule: NavModule[] = []
    const footerModule: FooterModule[] = []

    moduleData.modules.forEach((item: any) => {
        if (item.componentType === 'navigation') {
            navigationModule.push(item)
            console.log(navigationModule)
        } else if (item.componentType === 'footer') {
            footerModule.push(item)
        }
    })

    /* return (
        <div
            className={cn(styles.root, {
                [styles.layout1]: moduleData.navData.navStyle === 'layout1',
            })}
        >
            <Navigation navSwitch={navSwitch} navCheck={navCheck} logoUrl={moduleData.logoUrl} navData={moduleData.navData} />

            <main>{children}</main>
            <Footer footerData={moduleData.footerData as FooterData} navData={moduleData.navData} logoUrl={moduleData.logoUrl} />
        </div>
    ) */
    /* return <Renderer config={moduleData.modules} type="global" /> */
    return (
        <div
            className={cn(styles.root, {
                [styles.layout1]: moduleData.modules[0].attributes.navStyle === 'layout1',
            })}
        >
            <header>
                <Renderer config={navigationModule} />
            </header>
            <main>{children}</main>
            <footer>
                <Renderer config={footerModule} />
            </footer>
        </div>
    )
}
