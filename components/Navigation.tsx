import styles from './navigation.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import Logo from './Logo'
import Burger from './Burger'

interface BurgerProps {
    //navSwitch: () => void
    //navSwitch: React.MouseEvent<HTMLInputElement>
    navSwitch: () => void
    navCheck: boolean
}

const Navigation = (props: BurgerProps) => {
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
