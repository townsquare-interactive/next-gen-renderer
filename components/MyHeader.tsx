import styles from './myheader.module.scss'
import { Pagelist, MyHeaderProps, SocialBarProps, MobileHeaderProps } from './types'
import cn from 'classnames'
import { domainImage, socialConvert } from '../functions'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

// import your icons
import { faEnvelope, faPrint, faPhone, faLocationPin, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyHeader = (props: MyHeaderProps) => {
    const { pages, CMSLayout } = props
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
        >
            <div className={styles.wrapper}>
                <div className={cn(styles['logo-block'], styles['desktop-logo-block'])}>
                    <Logo
                        logoUrl={domainImage('/files/2022/07/jremodeling-logo.png', true, 'clttestsiteforjoshedwards.production.townsquareinteractive.com')}
                    />
                </div>

                <div className={cn(styles['logo-block'], styles['mobile-logo-block'])}>
                    <Logo logoUrl={domainImage('/files/2022/09/Yos2.jpg', true, 'clttestsiteforjoshedwards.production.townsquareinteractive.com')} />
                </div>

                <Nav pages={pages} navType={'desktop'} />
                <button className={styles['nav-open']} onClick={navSwitch}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <MobileHeader pages={pages} navSwitch={navSwitch} navCheck={navCheck} themeStyles={CMSLayout.themeStyles} CMSLayout={CMSLayout} />
            </div>
            <SocialBar CMSLayout={CMSLayout} />
        </header>
    )
}

const SocialBar = ({ CMSLayout }: SocialBarProps) => {
    return (
        <div className={styles['social-bar']}>
            <SocialLinks CMSLayout={CMSLayout} />
            <aside className={styles.contact}>
                <ul>
                    <li className={styles.phone}>
                        <Link href={'tel:' + CMSLayout.contact.phone.number}>
                            <a>
                                <FontAwesomeIcon icon={faPhone} /> {CMSLayout.phoneNumber}
                            </a>
                        </Link>
                    </li>
                    <li className={styles.phone}>
                        <Link href={'mailto:' + CMSLayout.contact.email.email}>
                            <a>
                                <FontAwesomeIcon icon={faEnvelope} /> {CMSLayout.contact.email.name}: {CMSLayout.email}
                            </a>
                        </Link>
                    </li>
                    <li className={styles.phone}>
                        <a>
                            <FontAwesomeIcon icon={faLocationPin} /> {CMSLayout.siteName}
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
const SocialLinks = ({ CMSLayout }: SocialBarProps) => {
    return (
        <ul className={styles['social-media-links']}>
            <li>
                <a>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </li>
            <li>
                <a>
                    <FontAwesomeIcon icon={faPrint} />
                </a>
            </li>
            {CMSLayout.social.map((url: string, index: number) => (
                <li key={index}>
                    <Link href={url}>
                        <a target="blank">
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
            <button className={styles['nav-toggle']} onClick={navSwitch}></button>

            <div className={styles.social}>
                <SocialLinks CMSLayout={CMSLayout} />
            </div>

            <Nav pages={pages} navType={'mobile'} />
        </div>
    )
}

const Nav = (props: Pagelist) => {
    const { pages, navType } = props
    return (
        <div className={styles.access}>
            <ul
                className={cn(styles.menu, {
                    [styles['desktop-nav']]: navType == 'desktop',
                    [styles['mobile-nav']]: navType == 'mobile',
                })}
            >
                {pages.map((item, index: number) => (
                    <Link href={item.url} key={index} passHref={true}>
                        <li>
                            <a className="navLink">{item.name}</a>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default MyHeader
