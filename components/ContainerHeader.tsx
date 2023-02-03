'use client'
import styles from './containerheader.module.scss'
import { ContainerHeaderProps, HeaderLogoBlockProps } from '../types'
import cn from 'classnames'
import { domainImage } from '../functions'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import NavToggle from 'elements/NavToggle'
import Nav from '../elements/Nav'
import { useRef } from 'react'
import SocialBar from 'elements/SocialBar'

const ContainerHeader = (props: ContainerHeaderProps) => {
    const { siteData, navSwitch } = props
    const [windowHeight, setWindowHeight] = useState(0)

    //set state for scroll
    const handleScroll = () => {
        setWindowHeight(window.scrollY)
    }

    //Setting scroll class for logo based on scroll height
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    //Determine Height of header for margins in layout
    const ref = useRef<HTMLDivElement>(null)

    return (
        <header
            className={cn(styles.root, 'header-background', {
                [styles.shrink]: ref?.current?.offsetHeight && windowHeight > ref?.current?.offsetHeight,
                [styles['reverse-head']]: siteData.headerOptions?.reverseHeaderLayout,
            })}
            ref={ref}
        >
            <div className={styles.wrapper}>
                {siteData.logos?.image_src && <HeaderLogoBlock type="desktop" logoSrc={siteData.logos.image_src} link={siteData.logos.image_link} />}

                {siteData.mobileLogos?.image_src && (
                    <HeaderLogoBlock type="mobile" logoSrc={siteData.mobileLogos.image_src} link={siteData.mobileLogos.image_link} />
                )}
                {!siteData.headerOptions?.desktopBurgerNav && <Nav navType={'desktop-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />}
                <NavToggle navSwitch={navSwitch} desktopBurgerNav={siteData.headerOptions?.desktopBurgerNav} />
            </div>
            <SocialBar siteData={siteData} />
        </header>
    )
}

export default ContainerHeader

const HeaderLogoBlock = (props: HeaderLogoBlockProps) => {
    const { type, alignment, logoSrc, link } = props
    return (
        <div className={cn(styles['logo-block'], styles[`${type}`], styles[`${alignment}`])}>
            <Logo logoUrl={domainImage(logoSrc, true)} link={link} />
        </div>
    )
}
