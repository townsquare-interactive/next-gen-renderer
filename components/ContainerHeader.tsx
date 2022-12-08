'use client'
import styles from './containerheader.module.scss'
import { ContainerHeaderProps } from '../types'
import cn from 'classnames'
import { domainImage } from '../functions'
import { useState, useEffect, useLayoutEffect } from 'react'
import Logo from './Logo'
import NavToggle from 'elements/NavToggle'
import Nav from '../elements/Nav'
import { useRef } from 'react'
import SocialBar from 'elements/SocialBar'

const ContainerHeader = (props: ContainerHeaderProps) => {
    const { siteData, themeStyles, navSwitch, setHeight } = props
    const [windowHeight, setWindowHeight] = useState(0)

    //set state for scroll
    const handleScroll = () => {
        setWindowHeight(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [windowHeight])

    //Determine Height of header for margins in layout
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const myObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setHeight(entry.contentRect.height)
            })
        })

        ref.current && myObserver.observe(ref.current)
    })

    return (
        <header
            className={cn(styles.root, {
                [styles.shrink]: windowHeight > 150,
            })}
            style={{ background: themeStyles.headerBackground }}
            ref={ref}
        >
            <div className={styles.wrapper}>
                {siteData.logos?.image_src && (
                    <div className={cn(styles['logo-block'], styles['desktop-logo-block'])}>
                        <Logo logoUrl={domainImage(siteData.logos.image_src, true)} link={siteData.logos.image_link} />
                    </div>
                )}

                {siteData.mobileLogos?.image_src && (
                    <div
                        className={cn(styles['logo-block'], styles['mobile-logo-block'], {
                            [styles.center]: siteData.mobileLogos.alignment == 'center',
                            [styles.right]: siteData.mobileLogos.alignment == 'right',
                        })}
                    >
                        <Logo logoUrl={domainImage(siteData.mobileLogos.image_src, true)} link={siteData.mobileLogos.image_link} />
                    </div>
                )}

                <Nav navType={'desktop-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />
                <NavToggle navSwitch={navSwitch} themeStyles={themeStyles} />
            </div>
            <SocialBar siteData={siteData} themeStyles={themeStyles} />
        </header>
    )
}

export default ContainerHeader
