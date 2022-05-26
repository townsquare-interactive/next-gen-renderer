import styles from './navbar.module.scss'
import Link from 'next/dist/client/link'
import Nav from './Nav'
import Image from 'next/image'
import cn from 'classnames'
import { NavBarProps } from './types'

const Navbar = (props: NavBarProps) => {
    const { navData, navCheck = false, navStyle = 'layout1' } = props
    return (
        <div
            className={cn(styles.root, {
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

export default Navbar
