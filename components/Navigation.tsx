import styles from './navigation.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import Logo from './Logo'
import Burger from './Burger'
import { NavtigationProps } from './types'

const Navigation = (props: NavtigationProps) => {
    const { navSwitch, navCheck = false } = props
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logoBlock}>
                    <Logo />
                </div>
                <div className={styles.burgerBlock}>
                    <Burger navSwitch={navSwitch} navCheck={navCheck} />
                </div>
            </div>
        </div>
    )
}

export default Navigation
