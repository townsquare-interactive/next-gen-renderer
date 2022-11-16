'use client'
import styles from './myheader.module.scss'
import { MyHeaderProps, SocialBarProps, ContactLinkProps } from '../types'
import cn from 'classnames'
import { domainImage } from '../functions'
import { useState, useEffect } from 'react'

import Logo from './Logo'
import SocialLinks from 'elements/SocialLinks'
import NavToggle from 'elements/NavToggle'
import Nav from '../elements/Nav'
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'

const MyHeader = (props: MyHeaderProps) => {
    const { CMSLayout, themeStyles, navSwitch, setHeight } = props
    const [windowHeight, setWindowHeight] = useState(0)

    //set state for scroll
    const handleScroll = () => {
        setWindowHeight(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

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

const SocialBar = ({ CMSLayout, themeStyles }: SocialBarProps) => {
    return (
        <div className={styles['social-bar']} style={{ background: themeStyles.BckdHeaderSocial }}>
            <SocialLinks CMSLayout={CMSLayout} />
            <aside className={styles.contact}>
                <ul>
                    {CMSLayout.contact.phone[0] && (
                        <ContactLink
                            cname="phone"
                            link={'tel:' + CMSLayout.contact.phone[0].number}
                            icon={faPhone}
                            content={CMSLayout.contact.phone[0].number}
                        />
                    )}
                    {CMSLayout.contact.email[0] && (
                        <ContactLink
                            cname="email"
                            link={`mailto:${CMSLayout.contact.email[0].email}`}
                            icon={faEnvelope}
                            content={CMSLayout.contact.email[0].name + ':' + CMSLayout.contact.email[0].email}
                        />
                    )}

                    {CMSLayout.siteName && <ContactLink cname="map" link={'www.google.com'} icon={faLocationPin} content={CMSLayout.siteName} />}
                </ul>
            </aside>
        </div>
    )
}

const ContactLink = ({ cname, link, icon, content }: ContactLinkProps) => {
    return (
        <li className={cn(styles[`${cname}`], styles.icon)}>
            <a href={link} aria-label={cname} className={cn('socialIcon')}>
                <FontAwesomeIcon icon={icon} />
                {content}
            </a>
        </li>
    )
}

export default MyHeader
