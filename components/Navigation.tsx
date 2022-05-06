import styles from './navigation.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import Logo from './Logo'

const Navigation = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logoBlock}>
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default Navigation
