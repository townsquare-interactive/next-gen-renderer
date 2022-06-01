import styles from './navbar.module.scss'
import Link from 'next/dist/client/link'
import Nav from './Nav'
import Image from 'next/image'
import cn from 'classnames'
import { NavBarProps } from './types'

const Navbar = (props: NavBarProps) => {
    const { navCheck = false, navStyle = 'layout1', pages, borderNum, navImage } = props
    return (
        <div
            className={cn(styles.root, {
                [styles.visible]: navCheck,
                [styles.layout2]: navStyle === 'layout2',
            })}
        >
            <div className={styles.wrapper}>
                <div className={styles.navDrop}>
                    <div className={styles.navItems}>{<Nav pages={pages} modLayout="header" borderNum={borderNum} />}</div>
                    <div className={styles.imageTile}>
                        <Image src={navImage || ''} layout="fill" alt="logo" objectFit="cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
