import styles from './burger.module.scss'
import Link from 'next/dist/client/link'
import Nav from './Nav'
import Image from 'next/image'
import { useState } from 'react'

interface BurgerProps {
    //navSwitch: () => void
    //navSwitch: React.MouseEvent<HTMLInputElement>
    navSwitch: () => void
}

const Burger = (props: BurgerProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.burgerBtn}>
                    <button onClick={props.navSwitch}>
                        <div className={styles.top}></div>
                        <div className={styles.middle}></div>
                        <div className={styles.bottom}></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Burger
