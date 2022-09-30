import styles from './myheader.module.scss'
import { Pagelist, NavigationProps } from './types'
import cn from 'classnames'

import { domainImage } from '../functions'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

// import your icons
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRocket, faEnvelope, faPrint, faPhone, faLocationPin, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyHeader = (props: NavigationProps) => {
    const { pages, themeStyles } = props
    const [navCheck, setNav] = useState<boolean>(false)
    const [clientWindowHeight, setClientWindowHeight] = useState(0)

    /*   useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  }) */

    /*   useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}); */

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    function navSwitch() {
        setNav(!navCheck)
    }

    /*     function socialConvert(str: string) {
        let icon = str
        if (icon === 'mail') {
            return faEnvelope
        }
    } */

    return (
        <header
            className={cn(styles.root, {
                [styles.shrink]: clientWindowHeight > 50,
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
                <MobileHeader pages={pages} navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} />
            </div>
            <SocialBar />
        </header>
    )
}

const SocialBar = () => {
    return (
        <div className={styles['social-bar']}>
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
            </ul>
            <aside className={styles.contact}>
                <ul>
                    <li className={styles.phone}>
                        <a>
                            <FontAwesomeIcon icon={faPhone} /> Phone Number: (394) 940-39404
                        </a>
                    </li>
                    <li className={styles.phone}>
                        <a>
                            <FontAwesomeIcon icon={faEnvelope} /> EMAIL: fake@gmail.com
                        </a>
                    </li>
                    <li className={styles.phone}>
                        <a>
                            <FontAwesomeIcon icon={faLocationPin} /> Company Name
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

const MobileHeader = (props: NavigationProps) => {
    const { pages, navSwitch, navCheck, themeStyles } = props

    return (
        <div
            className={cn(styles['mobile-header'], {
                [styles.hidden]: !navCheck,
                [styles.visible]: navCheck,
            })}
        >
            <button className={styles['nav-toggle']} onClick={navSwitch}></button>

            {/*settings/contact/contact_list/wide/items/0 : 
            "selectedPrimaryPhoneNumber": "9195400390", 
            "selectedPrimaryEmailAddress": "email@email.com", 
            address.name
            */}
            <div className={styles.social}>Social</div>

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
