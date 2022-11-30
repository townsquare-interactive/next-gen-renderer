'use client'
import { LayoutProps } from '../types'
import styles from './containerlayout.module.scss'
import cn from 'classnames'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import { useState } from 'react'
import SlidingHeader from 'elements/SlidingHeader'

export default function Layout(props: LayoutProps) {
    const { children, CMSLayout, themeStyles } = props
    const [navCheck, setNav] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(0)

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <>
            <div className={cn(styles.root)}>
                <SlidingHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} CMSLayout={CMSLayout} />

                <MyHeader CMSLayout={CMSLayout} themeStyles={themeStyles} navSwitch={navSwitch} setHeight={setHeight} />

                <main style={{ marginTop: height }}>{children}</main>

                <MyFooter CMSLayout={CMSLayout} themeStyles={themeStyles} navSwitch={navSwitch} />
            </div>
        </>
    )
}
