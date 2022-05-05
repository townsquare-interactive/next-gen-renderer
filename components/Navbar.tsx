import styles from './navbar.module.scss'
import Link from 'next/dist/client/link'
import Nav from './Nav'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.navDrop}>
                    <div className={styles.navItems}>
                        <Nav />
                    </div>
                    <div className={styles.imageTile}>
                        <Image src="/images/company-logo.png" height={156} width={722} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
