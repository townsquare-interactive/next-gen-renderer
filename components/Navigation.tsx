import styles from './navigation.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import Logo from './Logo'
import Nav from './Nav'
import cn from 'classnames'
import { NavigationProps, NavBarProps, BurgerProps } from './types'
import { useState } from 'react'
import { domainImage } from '../functions'

const Navigation = (props: NavigationProps) => {
    const { navStyle = 'layout1', logoUrl, pages, navImage, borderNum, altText = '' } = props
    const [navCheck, setNav] = useState<boolean>(false)

    const navImageDomain = navImage && domainImage(navImage)
    const logoDomain = logoUrl && domainImage(logoUrl)

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <div
            className={cn(styles.root, {
                [styles.layout2]: navStyle === 'layout2',
            })}
        >
            <div className={styles.wrapper}>
                <div className={styles.logoBlock}>
                    <Logo logoUrl={logoDomain} />
                </div>
                <div className={styles.burgerBlock}>
                    <Burger navSwitch={navSwitch} navCheck={navCheck} />
                </div>
            </div>
            <Navbar navCheck={navCheck} pages={pages} navStyle={navStyle} navImage={navImageDomain} borderNum={borderNum} altText={altText} />
        </div>
    )
}

const Navbar = (props: NavBarProps) => {
    const { navCheck = false, navStyle = 'layout1', navImage, pages, borderNum, altText = '' } = props
    return (
        <div
            className={cn(styles.navBar, {
                [styles.visible]: navCheck,
                [styles.layout2]: navStyle === 'layout2',
                [styles.hasImage]: navImage,
            })}
        >
            <div className={styles.wrapper}>
                <div className={styles.navDrop}>
                    <div className={styles.navItems}>{<Nav pages={pages} modLayout="header" borderNum={borderNum} />}</div>
                    {navImage && (
                        <div className={styles.imageTile}>
                            <Image
                                //src={'https://townsquareinteractive.s3.amazonaws.com/' + domain + '/Assets' + navImage}
                                src={navImage}
                                layout="fill"
                                alt={altText}
                                objectFit="cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const Burger = (props: BurgerProps) => {
    const { navSwitch, navCheck = false } = props
    return (
        <div className={styles.burger}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.burgerBtn, {
                        [styles.navActive]: navCheck,
                    })}
                >
                    <button onClick={navSwitch} name="togglenav">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigation
