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
    const { siteData, themeStyles, navSwitch, setContentMargin } = props
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

    //This works better but may be slower on site speed?
    /*  useEffect(() => {
        const currentItem = ref.current

        const myObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setContentMargin(entry.contentRect.height)
            })
        })
        currentItem && myObserver.observe(currentItem)

        return () => {
            if (currentItem) myObserver.unobserve(currentItem)
        }
    }) */

    /*     useEffect(() => {
        setContentMargin(ref?.current?.offsetHeight)
    }, [setContentMargin, ref?.current?.offsetHeight])   */

    return (
        <header
            className={cn(styles.root, 'header-background', {
                [styles.shrink]: ref?.current?.offsetHeight && windowHeight > ref?.current?.offsetHeight,
            })}
            //style={{ height: '203px', top: 203 - newH }}
            ref={ref}
        >
            <div className={styles.wrapper}>
                {siteData.logos?.image_src && <HeaderLogoBlock type="desktop" logoSrc={siteData.logos.image_src} link={siteData.logos.image_link} />}

                {siteData.mobileLogos?.image_src && (
                    <HeaderLogoBlock type="mobile" logoSrc={siteData.mobileLogos.image_src} link={siteData.mobileLogos.image_link} />
                )}

                <Nav navType={'desktop-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />
                <NavToggle navSwitch={navSwitch} themeStyles={themeStyles} />
            </div>
            <SocialBar siteData={siteData} themeStyles={themeStyles} />
        </header>
    )
}

export default ContainerHeader

const HeaderLogoBlock = (props: any) => {
    const { type, alignment, logoSrc, link } = props
    return (
        <div className={cn(styles['logo-block'], styles[`${type}`], styles[`${alignment}`])}>
            <Logo logoUrl={domainImage(logoSrc, true)} link={link} />
        </div>
    )
}

/* const useObserver = ({ callback, element }: any) => {
    const current = element && element.current

    const observer = useRef<any>(null)

    useEffect(() => {
        // if we are already observing old element
        if (observer && observer.current && current) {
            observer.current.unobserve(current)
        }
        const resizeObserverOrPolyfill = ResizeObserver
        observer.current = new resizeObserverOrPolyfill(callback)
        observe()

        return () => {
            if (observer && observer.current && element && element.current) {
                observer.current.unobserve(element.current)
            }
        }
    }, [current])

    const observe = () => {
        if (element && element.current && observer.current) {
            observer.current.observe(element.current)
        }
    }
}
 */
