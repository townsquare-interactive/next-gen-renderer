import styles from './myheader.module.scss'
import { MyHeaderProps, SocialBarProps } from '../types'
import cn from 'classnames'
import { domainImage } from '../functions'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import SocialLinks from 'elements/SocialLinks'
import NavToggle from 'elements/NavToggle'
import Nav from './Nav'
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
    }, [setHeight])

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

                <Nav navType={'desktop'} cmsNav={CMSLayout.cmsNav} themeStyles={themeStyles} />
                <NavToggle navSwitch={navSwitch} themeStyles={themeStyles} />
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
                            <Link href={'tel:' + CMSLayout.contact.phone[0].number} aria-label="phone" className={cn('socialIcon')} passHref>
                                <FontAwesomeIcon icon={faPhone} /> {CMSLayout.contact.phone[0].number}
                            </Link>
                        </li>
                    )}
                    {CMSLayout.contact.email[0] && (
                        <li className={cn(styles.icon, styles.email)}>
                            <Link href={`mailto:${CMSLayout.contact.email[0].email}`} aria-label="email" className={cn('socialIcon')} passHref>
                                <FontAwesomeIcon icon={faEnvelope} /> {CMSLayout.contact.email[0].name}:{CMSLayout.contact.email[0].email}
                            </Link>
                        </li>
                    )}

                    {CMSLayout.siteName && (
                        <li className={cn(styles.icon, styles.map)}>
                            <a href={'www.google.com'} aria-label="location" className={cn('socialIcon')}>
                                <FontAwesomeIcon icon={faLocationPin} />
                                {CMSLayout.siteName}
                            </a>
                        </li>
                    )}
                </ul>
            </aside>
        </div>
    )
}

export default MyHeader
