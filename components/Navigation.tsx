import styles from './navigation.module.scss'
import Image from 'next/image'
import Logo from './Logo'
import Nav from './Nav'
import cn from 'classnames'
import { NavigationProps, NavBarProps, BurgerProps } from './types'
import { useState } from 'react'
import { domainImage } from '../functions'

const Navigation = (props: NavigationProps) => {
    const { navStyle = 'layout1', logoUrl, pages, navImage, borderNum, altText = '', themeStyles } = props
    const [navCheck, setNav] = useState<boolean>(false)

    const navImageDomain = navImage && domainImage(navImage)
    const logoDomain = logoUrl && domainImage(logoUrl)

    const themeStylesObj = {
        background: `${themeStyles['headerBackground']}`,
        color: `${themeStyles['textColorAccent']}`,
    }

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <div
            className={cn(styles.root, {
                [styles.layout2]: navStyle === 'layout2',
            })}
            style={themeStylesObj}
        >
            <div className={styles.wrapper}>
                <div className={styles.logoBlock}>{logoUrl && <Logo logoUrl={logoDomain} />}</div>
                <div className={styles.burgerBlock}>
                    <Burger navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} />
                </div>
            </div>
            <Navbar
                navCheck={navCheck}
                pages={pages}
                navStyle={navStyle}
                navImage={navImageDomain}
                borderNum={borderNum}
                altText={altText}
                themeStyles={themeStyles}
            />
        </div>
    )
}

const Navbar = (props: NavBarProps) => {
    const { navCheck = false, navStyle = 'layout1', navImage, pages, borderNum, altText = '', themeStyles } = props

    const navStyles = {
        background: `${themeStyles['navBackground']}`,
    }

    return (
        <div
            className={cn(styles.navBar, {
                [styles.visible]: navCheck,
                [styles.layout2]: navStyle === 'layout2',
                [styles.hasImage]: navImage,
            })}
        >
            <div className={styles.navBar_wrapper}>
                <div className={styles.navDrop} style={navStyles}>
                    <div className={styles.navItems}>{<Nav pages={pages} modLayout="header" borderNum={borderNum} themeStyles={themeStyles} />}</div>
                    {navImage && (
                        <div className={styles.imageTile}>
                            <Image src={navImage} layout="fill" alt={altText} objectFit="cover" quality="50" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const Burger = (props: BurgerProps) => {
    const { navSwitch, navCheck = false, themeStyles } = props

    const burgerStyles = {
        background: `${themeStyles['textColorAccent']}`,
    }

    return (
        <div className={styles.burger}>
            <div className={styles.burger_wrapper}>
                <div
                    className={cn(styles.burgerBtn, {
                        [styles.navActive]: navCheck,
                    })}
                >
                    <button onClick={navSwitch} aria-label="toggle navigation">
                        <div style={burgerStyles}></div>
                        <div style={burgerStyles}></div>
                        <div style={burgerStyles}></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigation
