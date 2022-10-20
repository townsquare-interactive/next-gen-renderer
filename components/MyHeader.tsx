import styles from './myheader.module.scss'
import { Pagelist, MyHeaderProps, SocialBarProps, MobileHeaderProps, NavItem } from './types'
import cn from 'classnames'
import { domainImage, socialConvert, iconConvert } from '../functions'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

// import your icons
import { faEnvelope, faPrint, faPhone, faLocationPin, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyHeader = (props: MyHeaderProps) => {
    const { pages, CMSLayout, themeStyles } = props
    const [navCheck, setNav] = useState<boolean>(false)
    const [windowHeight, setWindowHeight] = useState(0)

    //set state for scroll
    const handleScroll = () => {
        setWindowHeight(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <header
            className={cn(styles.root, {
                [styles.shrink]: windowHeight > 50,
            })}
            style={{ background: themeStyles.headerBackground }}
        >
            <div className={styles.wrapper}>
                {CMSLayout.logos && (
                    <div className={cn(styles['logo-block'], styles['desktop-logo-block'])}>
                        <Logo logoUrl={domainImage(CMSLayout.logos.image_src, true)} />
                    </div>
                )}

                {CMSLayout.mobileLogos && (
                    <div className={cn(styles['logo-block'], styles['mobile-logo-block'])}>
                        <Logo logoUrl={domainImage(CMSLayout.mobileLogos.image_src, true)} />
                    </div>
                )}

                <Nav pages={pages} navType={'desktop'} cmsNav={CMSLayout.cmsNav} themeStyles={themeStyles} />
                <button className={styles['nav-open']} onClick={navSwitch} aria-label="toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <MobileHeader pages={pages} navSwitch={navSwitch} navCheck={navCheck} themeStyles={CMSLayout.themeStyles} CMSLayout={CMSLayout} />
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
                    {CMSLayout.contact.phone && (
                        <li className={cn(styles.icon, styles.phone)}>
                            <Link href={'tel:' + CMSLayout.contact.phone.number}>
                                <a aria-label="phone" className={cn('socialIcon')}>
                                    <FontAwesomeIcon icon={faPhone} /> {CMSLayout.phoneNumber}
                                </a>
                            </Link>
                        </li>
                    )}
                    {CMSLayout.contact.email && (
                        <li className={cn(styles.icon, styles.email)}>
                            <Link href={`mailto:${CMSLayout.contact.email.email}`}>
                                <a aria-label="email" className={cn('socialIcon')}>
                                    <FontAwesomeIcon icon={faEnvelope} /> {CMSLayout.contact.email.name}:{CMSLayout.email}
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
const SocialLinks = ({ CMSLayout, themeStyles }: SocialBarProps) => {
    return (
        <ul className={styles['social-media-links']}>
            <li>
                <a aria-label="share-site" className={cn('socialIcon')}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </li>

            {CMSLayout.social.map((url: string, index: number) => (
                <li key={index}>
                    <Link href={url}>
                        <a target="blank" aria-label={iconConvert(url)} className={cn('socialIcon')}>
                            <FontAwesomeIcon icon={socialConvert(url)} />
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

const MobileHeader = (props: MobileHeaderProps) => {
    const { pages, navSwitch, navCheck, themeStyles, CMSLayout } = props

    return (
        <div
            className={cn(styles['mobile-header'], {
                [styles.hidden]: !navCheck,
                [styles.visible]: navCheck,
            })}
        >
            <button className={styles['nav-toggle']} onClick={navSwitch} aria-label="close-mobile-nav"></button>

            <div className={styles['mobile-body']}>
                <div className={styles.social}>
                    <SocialLinks CMSLayout={CMSLayout} themeStyles={themeStyles} />{' '}
                </div>

                <Nav pages={pages} navType={'mobile'} themeStyles={themeStyles} cmsNav={CMSLayout.cmsNav} />
            </div>
        </div>
    )
}

const Nav = (props: Pagelist) => {
    const { navType, cmsNav, themeStyles } = props

    const NavItem = ({ item, arrow = false }: any) => {
        return (
            <Link href={item.title.toLowerCase()} passHref={true}>
                <a className={cn('navLink', { [styles.arrow]: arrow == true })} aria-label={item.title}>
                    {item.title}
                </a>
            </Link>
        )
    }

    return (
        <div className={styles.access}>
            <ul
                className={cn(styles.menu, {
                    [styles['desktop-nav']]: navType == 'desktop',
                    [styles['mobile-nav']]: navType == 'mobile',
                })}
            >
                {cmsNav &&
                    cmsNav.map((item: NavItem, index: number) => (
                        <>
                            {item.menu_item_parent === 0 && (
                                <li key={index}>
                                    <NavItem item={item} arrow={item.submenu && item.submenu.length} />
                                    {item.submenu && (
                                        <ul
                                            className={cn({
                                                [styles['sub-menu']]: navType == 'desktop',
                                            })}
                                        >
                                            {item.submenu.map((subItem: any, idx: number) => (
                                                <>
                                                    <li key={idx}>
                                                        <NavItem item={subItem} />
                                                    </li>
                                                    {subItem.submenu && (
                                                        <ul
                                                            className={cn({
                                                                [styles['sub-menu']]: navType == 'desktop',
                                                            })}
                                                        >
                                                            {subItem.submenu.map((subItem2: any, subidx: number) => (
                                                                <li key={subidx}>
                                                                    <NavItem item={subItem2} />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            )}
                        </>
                    ))}
            </ul>
        </div>
    )
}

export default MyHeader
