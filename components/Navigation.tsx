import styles from './navigation.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import Logo from './Logo'
import Burger from './Burger'
import Nav from './Nav'
import cn from 'classnames'
import { NavigationProps, NavBarProps } from './types'

const Navigation = (props: NavigationProps) => {
    const { navSwitch, navCheck = false, navStyle = 'layout1', logoUrl, navData } = props
    return (
        <div
            className={cn(styles.root, {
                [styles.layout2]: navStyle === 'layout2',
            })}
        >
            <div className={styles.wrapper}>
                <div className={styles.logoBlock}>
                    <Logo logoUrl={logoUrl} />
                </div>
                <div className={styles.burgerBlock}>
                    <Burger navSwitch={navSwitch} navCheck={navCheck} />
                </div>
            </div>
            <Navbar navCheck={navCheck} navData={navData} navStyle={navData.navStyle} />
        </div>
    )
}

const Navbar = (props: NavBarProps) => {
    const { navData, navCheck = false, navStyle = 'layout1' } = props
    return (
        <div
            className={cn(styles.navBar, {
                [styles.visible]: navCheck,
                [styles.layout2]: navStyle === 'layout2',
            })}
        >
            <div className={styles.wrapper}>
                <div className={styles.navDrop}>
                    <div className={styles.navItems}>{<Nav pages={navData.pages} modLayout="header" borderNum={navData.borderNum} />}</div>
                    <div className={styles.imageTile}>
                        <Image src={navData.navImage || ''} layout="fill" alt="logo" objectFit="cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
