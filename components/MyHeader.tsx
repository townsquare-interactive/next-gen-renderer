import styles from './myheader.module.scss'
import { Pagelist, NavigationProps } from './types'
import cn from 'classnames'

import { domainImage } from '../functions'
import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const MyHeader = (props: NavigationProps) => {
    const { pages, themeStyles } = props
    const [navCheck, setNav] = useState<boolean>(false)

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <header className={styles.root}>
            <div className={styles.wrapper}>
                {/* <div className={styles.logo}>
                    <Image
                        src={domainImage('/files/2022/07/jremodeling-logo.png', true, props.cmsUrl || '')}
                        onLoadingComplete={calcImageSize}
                        width={imageWidth}
                        height={imageHeight}
                        layout="responsive"
                        alt="logo"
                        objectPosition="top"
                    /> 
                </div>*/}
                <div className={styles['logo-block']}>
                    <Logo
                        logoUrl={domainImage('/files/2022/07/jremodeling-logo.png', true, 'clttestsiteforjoshedwards.production.townsquareinteractive.com')}
                    />

                    {/*                    <Logo
                        logoUrl={domainImage('/files/2022/07/jremodeling-logo.png', true, 'clttestsiteforjoshedwards.production.townsquareinteractive.com')}
                    />
                    <Logo
                        logoUrl={domainImage('/files/2022/07/jremodeling-logo.png', true, 'clttestsiteforjoshedwards.production.townsquareinteractive.com')}
                    /> */}
                </div>
                {/*  <div className={styles.access}>
                    <ul className={styles.menu}>
                        {pages.map((item, index: number) => (
                            <Link href={item.url} key={index} passHref={true}>
                                <li>
                                    <a className="navLink">{item.name}</a>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div> */}
                <Nav pages={pages} />
                <button className={styles['nav-open']} onClick={navSwitch}></button>
                <MobileNav pages={pages} navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} />
            </div>
            {/* <div className={styles['social-bar']}></div> */}
        </header>
    )
}

const MobileNav = (props: NavigationProps) => {
    const { pages, navSwitch, navCheck, themeStyles } = props

    return (
        <div
            className={cn(styles['mobile-header'], {
                [styles.hidden]: !navCheck,
                [styles.visible]: navCheck,
            })}
        >
            <button className={styles['nav-toggle']} onClick={navSwitch}></button>
            <div className={styles.social}>Social</div>
            <div className={styles['mobile-nav']}>
                <Nav pages={pages} />
            </div>
        </div>
    )
}

const Nav = (props: Pagelist) => {
    const { pages } = props
    return (
        <div className={styles.access}>
            <ul className={styles.menu}>
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
