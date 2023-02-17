'use client'
import styles from './containerheader.module.scss'
import { ContainerHeaderProps, HeaderLogoBlockProps, HeaderOptions, LogoSlot } from '../types'
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

    const headerOptions2: HeaderOptions = {
        reverseHeaderLayout: true,
        //desktopBurgerNav: true,
        reverseSocial: true,
        ctaBanner: [
            {
                label: 'Contact Us Today',
                btnType: 'btn_banner',
                link: '/article',
                window: 1,
                active: true,
                btnSize: 'btn_lg',
                icon: { iconModel: 'list-alt', iconPrefix: 'far' },
            },
        ],
        ctaBtns: [
            /* {
                label: 'Contact Us Today',
                btnType: 'btn_cta',
                link: '/article',
                window: 1,
                active: true,
                icon: { iconModel: 'list-alt', iconPrefix: 'far' },
                btnSize: 'btn_sm',
            }, */
            {
                label: 'btn next',
                btnType: 'btn_cta',
                link: '/test',
                //bgColor: 'orange',
                window: 1,
                active: true,
                btnSize: 'btn_sm',
            },
        ],
        /* textCta: [
            {
                text: 'Welcome',
            },
        ], */
    }

    //const currentLayout = siteData.headerOptions || {}
    const currentLayout = siteData.headerOptions || headerOptions2

    return (
        <header
            className={cn(styles.root, 'header-background', {
                [styles.shrink]: ref?.current?.offsetHeight && windowHeight > ref?.current?.offsetHeight,
                [styles['reverse-head']]: currentLayout.reverseHeaderLayout,
            })}
            ref={ref}
        >
            {currentLayout?.ctaBanner && <ButtonWrap buttonList={currentLayout.ctaBanner} type="cta_banner" />}
            <div className={styles.wrapper}>
                {siteData.logos?.header?.slots && <HeaderLogoBlock type="desktop" logos={siteData.logos.header.slots} />}

                {siteData.logos?.mobile?.slots && <HeaderLogoBlock type="mobile" logos={siteData.logos.mobile.slots} />}
                {!currentLayout.desktopBurgerNav && <Nav navType={'desktop-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />}

                {currentLayout && (
                    <div className={styles['cta-block']}>
                        {currentLayout.textCta &&
                            currentLayout.textCta.map((item, index: number) => (
                                <Fragment key={index}>
                                    <TextWidget text={item.text} type="header" />
                                </Fragment>
                            ))}
                        {currentLayout?.ctaBtns && <ButtonWrap buttonList={currentLayout.ctaBtns} type="cta" />}
                    </div>
                )}
                <NavToggle navSwitch={navSwitch} desktopBurgerNav={currentLayout.desktopBurgerNav} />
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
