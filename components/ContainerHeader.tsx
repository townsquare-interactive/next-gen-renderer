'use client'
import styles from './containerheader.module.scss'
import { ContainerHeaderProps, HeaderLogoBlockProps, HeaderOptions } from '../types'
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

    const currentButtons = headerOptions2
    //const currentButtons = siteData.headerOptions

    return (
        <header
            className={cn(styles.root, 'header-background', {
                [styles.shrink]: ref?.current?.offsetHeight && windowHeight > ref?.current?.offsetHeight,
                [styles['reverse-head']]: currentButtons.reverseHeaderLayout,
            })}
            ref={ref}
        >
            {currentButtons?.ctaBanner && <ButtonWrap buttonList={currentButtons.ctaBanner} type="cta_banner" />}
            <div className={styles.wrapper}>
                {siteData.logos.header.slots && <HeaderLogoBlock type="desktop" logos={siteData.logos.header.slots} />}

                {siteData.logos.mobile.slots && <HeaderLogoBlock type="mobile" logos={siteData.logos.mobile.slots} />}
                {!currentButtons.desktopBurgerNav && <Nav navType={'desktop-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />}

                {currentButtons && (
                    <div className={styles['cta-block']}>
                        {currentButtons.textCta &&
                            currentButtons.textCta.map((item, index: number) => (
                                <Fragment key={index}>
                                    <TextWidget text={item.text} type="header" />
                                </Fragment>
                            ))}
                        {currentButtons?.ctaBtns && <ButtonWrap buttonList={currentButtons.ctaBtns} type="cta" />}
                    </div>
                )}
                <NavToggle navSwitch={navSwitch} desktopBurgerNav={currentButtons.desktopBurgerNav} />
            </div>
            <SocialBar siteData={siteData} setContactModal={setContactModal} />
        </header>
    )
}

const HeaderLogoBlock = (props: any) => {
    const { type, logos } = props
    return (
        <div
            className={cn(styles['logo-block'], styles[`${type}`], {
                [styles['one-logo']]: logos.length === 1,
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
