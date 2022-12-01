'use client'
import styles from './containerheader.module.scss'
import { ContainerHeaderProps } from '../types'
import cn from 'classnames'
import { domainImage } from '../functions'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import NavToggle from 'elements/NavToggle'
import Nav from '../elements/Nav'
import { useRef } from 'react'
import SocialBar from 'elements/SocialBar'

const ContainerHeader = (props: ContainerHeaderProps) => {
    const { CMSLayout, themeStyles, navSwitch, setHeight } = props
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
        setHeight(ref?.current?.offsetHeight)
    }, [setHeight, ref?.current?.offsetHeight])

    return (
        <header
            className={cn(styles.root, {
                [styles.shrink]: windowHeight > 150,
            })}
            style={{ background: themeStyles.headerBackground }}
            ref={ref}
        >
            <div className={styles.wrapper}>
                {CMSLayout.logos?.image_src && (
                    <div className={cn(styles['logo-block'], styles['desktop-logo-block'])}>
                        <Logo logoUrl={domainImage(CMSLayout.logos.image_src, true)} link={CMSLayout.logos.image_link} />
                    </div>
                )}

                {CMSLayout.mobileLogos?.image_src && (
                    <div
                        className={cn(styles['logo-block'], styles['mobile-logo-block'], {
                            [styles.center]: CMSLayout.mobileLogos.alignment == 'center',
                            [styles.right]: CMSLayout.mobileLogos.alignment == 'right',
                        })}
                    >
                        <Logo logoUrl={domainImage(CMSLayout.mobileLogos.image_src, true)} link={CMSLayout.mobileLogos.image_link} />
                    </div>
                )}

                <Nav navType={'desktop-nav'} cmsNav={CMSLayout.cmsNav} />
                <NavToggle navSwitch={navSwitch} themeStyles={themeStyles} />
            </div>
            <SocialBar CMSLayout={CMSLayout} themeStyles={themeStyles} />
        </header>
    )
}

export default ContainerHeader
