import './global.css'
import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
    variable: '--ubuntu-font',
    subsets: ['latin'],
    weight: '700',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={ubuntu.variable}>{children}</body>
        </html>
    )
}

/* 'use client'
import './global.css'
import { LayoutProps } from '../types'
import styles from './layout.module.scss'
import cn from 'classnames'
import MyHeader from '../components/MyHeader'
import MyFooter from '../components/MyFooter'
import { useState } from 'react'
import AltHeader from 'elements/AltHeader'
import { Ubuntu } from '@next/font/google'
import { getLayout, getPageData, setColors } from 'functions'
import { use } from 'react'

const ubuntu = Ubuntu({
    variable: '--ubuntu-font',
    subsets: ['latin'],
    weight: '700',
})

export default function Layout({ children }: { children: React.ReactNode }) {
    const [navCheck, setNav] = useState<boolean>(false)
    const [height, setHeight] = useState<any>(0)

    const { CMSLayout } = use(getLayout())

    const cmsTheme = CMSLayout.theme

    const themeStyles = setColors(CMSLayout.cmsColors, cmsTheme)

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <div className={cn(styles.root, ubuntu.variable)}>
            <AltHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} CMSLayout={CMSLayout} />

            <MyHeader CMSLayout={CMSLayout} themeStyles={themeStyles} navSwitch={navSwitch} setHeight={setHeight} />
            <main style={{ marginTop: height }}>{children}</main>
            <MyFooter CMSLayout={CMSLayout} themeStyles={themeStyles} navSwitch={navSwitch} />
        </div>
    )
} */
