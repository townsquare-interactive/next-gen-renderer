import styles from './navigation.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import Logo from './Logo'
import Nav from './Nav'
import cn from 'classnames'
import { NavigationProps, NavBarProps, BurgerProps } from './types'
import { useState } from 'react'
import { domainImage } from '../functions'
import theme from '../pages/theme.json'

const Navigation = (props: NavigationProps) => {
    const { navStyle = 'layout1', logoUrl, pages, navImage, borderNum, altText = '' } = props
    const [navCheck, setNav] = useState<boolean>(false)

    const navImageDomain = navImage && domainImage(navImage)
    const logoDomain = logoUrl && domainImage(logoUrl)

    const themeStyles = {
        background: `${theme['header-background']}`,
        color: `${theme['text-color-accent']}`,
    }

    function navSwitch() {
        setNav(!navCheck)
    }

    return (
        <div
            className={cn(styles.root, {
                [styles.layout2]: navStyle === 'layout2',
            })}
            style={themeStyles}
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

    const navStyles = {
        background: `${theme['nav-background']}`,
    }

    return (
        <div
            className={cn(styles.navBar, {
                [styles.visible]: navCheck,
                [styles.layout2]: navStyle === 'layout2',
                [styles.hasImage]: navImage,
            })}
        >
            <div className={styles.wrapper}>
                <div className={styles.navDrop} style={navStyles}>
                    <div className={styles.navItems}>{<Nav pages={pages} modLayout="header" borderNum={borderNum} />}</div>
                    {navImage && (
                        <div className={styles.imageTile}>
                            <Image
                                //src={'https://townsquareinteractive.s3.amazonaws.com/' + domain + '/Assets' + navImage}
                                src={navImage}
                                layout="fill"
                                alt={altText}
                                objectFit="cover"
                                quality="50"
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

    const burgerStyles = {
        background: `${theme['text-color-accent']}`,
    }

    return (
        <div className={styles.burger}>
            <div className={styles.wrapper}>
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
