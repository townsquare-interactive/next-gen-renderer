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
import { Button } from 'elements/Button'
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
        desktopBurgerNav: true,
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
            {
                label: 'Contact Us Today',
                btnType: 'btn_cta',
                link: '/article',
                window: 1,
                active: true,
                icon: { iconModel: 'list-alt', iconPrefix: 'far' },
                btnSize: 'btn_sm',
            },
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
            {currentButtons?.ctaBanner && <Button buttonList={currentButtons.ctaBanner} type="cta_banner" isWrapLink={false} />}
            <div className={styles.wrapper}>
                {siteData.logos?.image_src && <HeaderLogoBlock type="desktop" logoSrc={siteData.logos.image_src} link={siteData.logos.image_link} />}

                {siteData.mobileLogos?.image_src && (
                    <HeaderLogoBlock type="mobile" logoSrc={siteData.mobileLogos.image_src} link={siteData.mobileLogos.image_link} />
                )}
                {!currentButtons.desktopBurgerNav && <Nav navType={'desktop-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />}

                {currentButtons && (
                    <div className={styles['cta-block']}>
                        {/* {currentButtons.ctaBtns.map((item, index: number) => (
                            <Fragment key={index}>
                                 <HeaderCTA cta={item} btnCount={index + 1} /> 
                                <Button buttonList={currentButtons.ctaBtns} type="cta" />
                            </Fragment>
                        ))} */}

                        {currentButtons.textCta &&
                            currentButtons.textCta.map((item, index: number) => (
                                <Fragment key={index}>
                                    <TextWidget text={item.text} type="header" />
                                </Fragment>
                            ))}
                        {currentButtons?.ctaBtns && <Button buttonList={currentButtons.ctaBtns} type="cta" isWrapLink={false} />}
                    </div>
                )}
                <NavToggle navSwitch={navSwitch} desktopBurgerNav={currentButtons.desktopBurgerNav} />
            </div>
            <SocialBar siteData={siteData} setContactModal={setContactModal} />
        </header>
    )
}

const HeaderLogoBlock = (props: HeaderLogoBlockProps) => {
    const { type, alignment, logoSrc, link } = props
    return (
        <div className={cn(styles['logo-block'], styles[`${type}`], styles[`${alignment}`])}>
            <Logo logoUrl={domainImage(logoSrc, true)} link={link} />
        </div>
    )
}

export default ContainerHeader
