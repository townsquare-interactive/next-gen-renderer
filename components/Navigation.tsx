import styles from './navigation.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import Logo from './Logo'
import Burger from './Burger'
import cn from 'classnames'
import { NavigationProps } from './types'

const Navigation = (props: NavigationProps) => {
    const { navSwitch, navCheck = false, navStyle = 'layout1' } = props
    return (
        <div
            className={cn(styles.root, {
                [styles.layout2]: navStyle === 'layout2',
            })}
        >
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
