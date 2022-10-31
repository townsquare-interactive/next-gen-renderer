import styles from './myheader.module.scss'
import { MyHeaderProps, SocialBarProps, MobileHeaderProps } from './types'
import cn from 'classnames'
import { domainImage } from '../functions'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import SocialLinks from 'elements/SocialLinks'
import NavToggle from 'elements/NavToggle'
import Nav from './Nav'

// import your icons
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyHeader = (props: MyHeaderProps) => {
    const { CMSLayout, themeStyles, navSwitch, navCheck } = props
    const [windowHeight, setWindowHeight] = useState(0)

    console.log(CMSLayout.cmsNav)

    //set state for scroll
    const handleScroll = () => {
        setWindowHeight(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <header
            className={cn(styles.root, {
                [styles.shrink]: windowHeight > 50,
            })}
            style={{ background: themeStyles.headerBackground }}
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

                <Nav navType={'desktop'} cmsNav={CMSLayout.cmsNav} themeStyles={themeStyles} />

                <NavToggle navSwitch={navSwitch} themeStyles={themeStyles} />
                <MobileHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} CMSLayout={CMSLayout} />
            </div>
            <SocialBar CMSLayout={CMSLayout} themeStyles={themeStyles} />
        </header>
    )
}

const SocialBar = ({ CMSLayout, themeStyles }: SocialBarProps) => {
    return (
        <div className={styles['social-bar']} style={{ background: themeStyles.BckdHeaderSocial }}>
            <SocialLinks CMSLayout={CMSLayout} themeStyles={themeStyles} />
            <aside className={styles.contact}>
                <ul>
                    {CMSLayout.contact.phone[0] && (
                        <li className={cn(styles.icon, styles.phone)}>
                            <Link href={'tel:' + CMSLayout.contact.phone[0].number}>
                                <a aria-label="phone" className={cn('socialIcon')}>
                                    <FontAwesomeIcon icon={faPhone} /> {CMSLayout.contact.phone[0].number}
                                </a>
                            </Link>
                        </li>
                    )}
                    {CMSLayout.contact.email[0] && (
                        <li className={cn(styles.icon, styles.email)}>
                            <Link href={`mailto:${CMSLayout.contact.email[0].email}`}>
                                <a aria-label="email" className={cn('socialIcon')}>
                                    <FontAwesomeIcon icon={faEnvelope} /> {CMSLayout.contact.email[0].name}:{CMSLayout.contact.email[0].email}
                                </a>
                            </Link>
                        </li>
                    )}

                    {CMSLayout.siteName && (
                        <li className={cn(styles.icon, styles.map)}>
                            <Link href={'google.com'}>
                                <a aria-label="location" className={cn('socialIcon')}>
                                    <FontAwesomeIcon icon={faLocationPin} />
                                    {CMSLayout.siteName}
                                </a>
                            </Link>
                        </li>
                    )}
                </ul>
            </aside>
        </div>
    )
}

const MobileHeader = (props: MobileHeaderProps) => {
    const { navSwitch, navCheck, themeStyles, CMSLayout } = props

    return (
        <div
            className={cn(styles['mobile-header'], {
                [styles.hidden]: !navCheck,
                [styles.visible]: navCheck,
            })}
            style={{ background: themeStyles.headerBackground }}
        >
            <button
                className={styles['nav-toggle']}
                onClick={navSwitch}
                aria-label="close-mobile-nav"
                style={{ color: themeStyles.textColorAccent, backgroundColor: themeStyles.mainColor }}
            ></button>

            <div className={styles['mobile-body']}>
                <div className={styles.social}>
                    <SocialLinks CMSLayout={CMSLayout} themeStyles={themeStyles} modType="mob-header" />
                </div>

                <Nav navType={'mobile'} themeStyles={themeStyles} cmsNav={CMSLayout.cmsNav} />
            </div>
        </div>
    )
}

export default MyHeader
