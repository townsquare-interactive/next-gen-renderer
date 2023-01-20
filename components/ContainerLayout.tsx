'use client'
import { LayoutProps } from '../types'
import styles from './containerlayout.module.scss'
import cn from 'classnames'
import ContainerHeader from './ContainerHeader'
import ContainerFooter from './ContainerFooter'
import { useState } from 'react'
import SlidingHeader from 'elements/SlidingHeader'

export default function Layout(props: LayoutProps) {
    const { children, siteData, themeStyles, cName } = props
    const [navCheck, setNav] = useState<boolean>(false)

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <>
            <div className={cn(styles.root, `page-${cName}`)}>
                <SlidingHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} siteData={siteData} />
                <ContainerHeader siteData={siteData} navSwitch={navSwitch} />

                <main>{children}</main>

                <ContainerFooter siteData={siteData} navSwitch={navSwitch} />
            </div>
        </>
    )
}
