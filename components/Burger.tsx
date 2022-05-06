import styles from './burger.module.scss'
import Link from 'next/dist/client/link'
import Nav from './Nav'
import Image from 'next/image'
import { useState } from 'react'
import cn from 'classnames'

interface BurgerProps {
    //navSwitch: () => void
    //navSwitch: React.MouseEvent<HTMLInputElement>
    navSwitch: () => void
    navCheck: boolean
}

const Burger = (props: BurgerProps) => {
    const { navSwitch, navCheck = false } = props
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.burgerBtn, {
                        [styles.navActive]: navCheck,
                    })}
                >
                    <button onClick={navSwitch}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Burger
