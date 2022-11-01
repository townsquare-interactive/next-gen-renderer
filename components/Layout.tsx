import { LayoutProps, GlobalModule } from '../types'
import styles from './layout.module.scss'
import cn from 'classnames'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import { useState } from 'react'
import AltHeader from 'elements/AltHeader'

export default function Layout(props: LayoutProps) {
    const { children, CMSLayout, themeStyles } = props
    const [navCheck, setNav] = useState<boolean>(false)

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <div
            className={cn(styles.root, {
                //[styles.layout1]: navigationModule[0].attributes.navStyle === 'layout1',
            })}
        >
            <AltHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} CMSLayout={CMSLayout} />
            <MyHeader CMSLayout={CMSLayout} themeStyles={themeStyles} navSwitch={navSwitch} />
            <main>{children}</main>
            <MyFooter CMSLayout={CMSLayout} themeStyles={themeStyles} navSwitch={navSwitch} />
        </div>
    )
}
