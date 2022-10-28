import { LayoutProps, GlobalModule } from '../components/types'
import styles from './layout.module.scss'
import cn from 'classnames'
import { Renderer } from '../components/Renderer'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import { useState } from 'react'

export default function Layout(props: LayoutProps) {
    const { children, CMSLayout, themeStyles } = props
    const [navCheck, setNav] = useState<boolean>(false)

    function navSwitch() {
        setNav(!navCheck)
    }

    //Placing nav data na footer data into two different arrays
    //const navigationModule = CMSLayout.modules.filter((module: GlobalModule) => module.componentType === 'navigation')
    //const footerModule = CMSLayout.modules.filter((module: GlobalModule) => module.componentType === 'footer')

    return (
        <div
            className={cn(styles.root, {
                //[styles.layout1]: navigationModule[0].attributes.navStyle === 'layout1',
            })}
        >
            <MyHeader CMSLayout={CMSLayout} themeStyles={themeStyles} navSwitch={navSwitch} navCheck={navCheck} />
            {/*             <header>
                <Renderer config={navigationModule} themeStyles={themeStyles} />
            </header> */}
            <main>{children}</main>
            <footer>
                {/* <Renderer config={footerModule} themeStyles={themeStyles} /> */}
                <MyFooter CMSLayout={CMSLayout} themeStyles={themeStyles} navSwitch={navSwitch} navCheck={navCheck} />
            </footer>
        </div>
    )
}
