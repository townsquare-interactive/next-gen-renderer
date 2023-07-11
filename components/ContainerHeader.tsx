'use client'
import styles from './containerheader.module.scss'
import { ContainerHeaderProps, HeaderLogoBlockProps, LogoSlot } from '../types'
import cn from 'classnames'
import { domainImage } from '../functions'
import { useState, useEffect, Fragment } from 'react'
import Logo from './Logo'
import NavToggle from 'elements/NavToggle'
import Nav from '../elements/Nav'
import { useRef } from 'react'
import SocialBar from 'elements/SocialBar'
import { ButtonWrap } from 'elements/ButtonWrap'
import TextWidget from 'elements/TextWidget'

const ContainerHeader = (props: ContainerHeaderProps) => {
    const { siteData, navSwitch, setContactModal } = props
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
            {siteData.headerOptions?.ctaBanner && <ButtonWrap buttonList={siteData.headerOptions.ctaBanner} type="cta_banner" />}
            <div className={styles.wrapper}>
                {siteData.logos?.header?.slots && <HeaderLogoBlock type="desktop" logos={siteData.logos.header.slots} />}

                {siteData.logos?.mobile?.slots && <HeaderLogoBlock type="mobile" logos={siteData.logos.mobile.slots} />}
                {!siteData.headerOptions?.desktopBurgerNav && <Nav navType={'desktop-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />}

                {siteData.headerOptions && (
                    <div className={styles['cta-block']}>
                        {siteData.headerOptions.textCta &&
                            siteData.headerOptions.textCta.map((item, index: number) => (
                                <Fragment key={index}>
                                    <TextWidget text={item.text} type="header" />
                                </Fragment>
                            ))}
                        {siteData.headerOptions?.ctaBtns && <ButtonWrap buttonList={siteData.headerOptions.ctaBtns} type="cta" />}
                    </div>
                )}
                {siteData.cmsNav && siteData.cmsNav.length != 0 && (
                    <NavToggle navSwitch={navSwitch} desktopBurgerNav={siteData.headerOptions?.desktopBurgerNav} />
                )}
            </div>
            <SocialBar siteData={siteData} setContactModal={setContactModal} />
        </header>
    )
}

const HeaderLogoBlock = (props: HeaderLogoBlockProps) => {
    const { type, logos } = props

    return (
        <div
            className={cn(styles['logo-block'], styles[`${type}`], {
                [styles['one-logo']]: logos.filter((element: LogoSlot) => element.image_src).length === 1,
                [styles['two-logos']]: logos.filter((element: LogoSlot) => element.image_src).length === 2,
            })}
        >
            {logos.map((item: any, index: number) => (
                <Fragment key={index}>
                    {item.image_src && (
                        <div className={cn(styles[`${item.alignment}`], styles['logo-item'])}>
                            <Logo logoUrl={domainImage(item.image_src, true)} link={item.image_link} />
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    )
}

export default ContainerHeader
