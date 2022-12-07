'use client'
import { LayoutProps } from '../types'
import styles from './containerlayout.module.scss'
import cn from 'classnames'
import ContainerHeader from './ContainerHeader'
import ContainerFooter from './ContainerFooter'
import { useState } from 'react'
import SlidingHeader from 'elements/SlidingHeader'

export default function Layout(props: LayoutProps) {
    const { children, siteData, themeStyles } = props
    const [navCheck, setNav] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(0)

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <>
            <div className={cn(styles.root)}>
                <SlidingHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} siteData={siteData} />

                <ContainerHeader siteData={siteData} themeStyles={themeStyles} navSwitch={navSwitch} setHeight={setHeight} />

                <main style={{ marginTop: height }}>{children}</main>

                <ContainerFooter siteData={siteData} themeStyles={themeStyles} navSwitch={navSwitch} />
            </div>
        </>
    )
}
