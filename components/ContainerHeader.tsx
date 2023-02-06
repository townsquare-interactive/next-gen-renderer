'use client'
import styles from './containerheader.module.scss'
import { ContainerHeaderProps, HeaderLogoBlockProps, HeaderCTAProps } from '../types'
import cn from 'classnames'
import { ConditionalWrapper, domainImage } from '../functions'
import { useState, useEffect, ReactChild, Fragment } from 'react'
import Logo from './Logo'
import NavToggle from 'elements/NavToggle'
import Nav from '../elements/Nav'
import { useRef } from 'react'
import SocialBar from 'elements/SocialBar'
import Link from 'next/link'

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

    const ctaBanner = {
        text: 'Contact Us',
        type: 'banner',
        link: '/',
    }

    const ctaBtn = [
        {
            text: 'Hello There',
            type: 'button',
            link: '/',
            bgColor: 'teal',
        },
        {
            text: 'btn next',
            type: 'button',
            link: '/article',
            bgColor: 'orange',
        },
    ]

    return (
        <header
            className={cn(styles.root, 'header-background', {
                [styles.shrink]: ref?.current?.offsetHeight && windowHeight > ref?.current?.offsetHeight,
                [styles['reverse-head']]: siteData.headerOptions?.reverseHeaderLayout,
            })}
            ref={ref}
        >
            {ctaBanner.type === 'banner' && <HeaderCTA cta={ctaBanner} />}
            <div className={styles.wrapper}>
                {siteData.logos?.image_src && <HeaderLogoBlock type="desktop" logoSrc={siteData.logos.image_src} link={siteData.logos.image_link} />}

                {siteData.mobileLogos?.image_src && (
                    <HeaderLogoBlock type="mobile" logoSrc={siteData.mobileLogos.image_src} link={siteData.mobileLogos.image_link} />
                )}
                {!siteData.headerOptions?.desktopBurgerNav && <Nav navType={'desktop-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />}

                {/* {ctaBtn.type === 'button' && <HeaderCTA cta={ctaBtn} />} */}
                {ctaBtn && (
                    <div className={styles['cta-block']}>
                        {ctaBtn.map((item, index: number) => (
                            <Fragment key={index}>
                                <HeaderCTA cta={item} />
                            </Fragment>
                        ))}
                    </div>
                )}
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

const HeaderCTA = (props: HeaderCTAProps) => {
    const { cta } = props
    return (
        <div
            className={cn('accent-txt', styles['cta'], {
                [styles['btn']]: cta.type === 'button',
                [styles['banner']]: cta.type === 'banner',
                //['promo-background']: !cta.bgColor,
            })}
        >
            <ConditionalWrapper
                condition={cta.link ? true : false}
                trueOutput={(children: ReactChild) => (
                    <Link
                        href={cta.link || ''}
                        className={cn('accent-txt', 'cta', {
                            [styles['btn']]: cta.type === 'button',
                            [styles['banner']]: cta.type === 'banner',
                        })}
                        style={{ backgroundColor: cta.bgColor }}
                    >
                        {children}
                    </Link>
                )}
                falseOutput={(children: ReactChild) => (
                    <span
                        className={cn('accent-txt', 'cta', {
                            [styles['btn']]: cta.type === 'button',
                            [styles['banner']]: cta.type === 'banner',
                        })}
                        style={{ backgroundColor: cta.bgColor }}
                    >
                        {children}
                    </span>
                )}
            >
                {cta.text}
            </ConditionalWrapper>
        </div>
    )
}
