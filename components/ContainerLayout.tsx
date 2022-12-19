'use client'
import { LayoutProps } from '../types'
import styles from './containerlayout.module.scss'
import cn from 'classnames'
import ContainerHeader from './ContainerHeader'
import ContainerFooter from './ContainerFooter'
import { useEffect, useState } from 'react'
import SlidingHeader from 'elements/SlidingHeader'

export default function Layout(props: LayoutProps) {
    const { children, siteData, themeStyles } = props
    const [navCheck, setNav] = useState<boolean>(false)
    const [contentMargin, setContentMargin] = useState<number>(203)
    /* const [showChild, setShowChild] = useState(false)
     */
    function navSwitch() {
        setNav(!navCheck)
    }

    /*     useEffect(() => {
        setShowChild(true)
    }, []) */

    return (
        <>
            <div className={cn(styles.root)}>
                <SlidingHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} siteData={siteData} />
                <ContainerHeader siteData={siteData} themeStyles={themeStyles} navSwitch={navSwitch} setContentMargin={setContentMargin} />

                <main
                //style={{ marginTop: contentMargin }}
                >
                    {children}
                </main>

                <ContainerFooter siteData={siteData} themeStyles={themeStyles} navSwitch={navSwitch} />
            </div>
        </>
    )
}
