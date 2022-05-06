import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import Image from 'next/image'

const Nav = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Image src="/images/company-logo.png" layout="responsive" width={722} height={156} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Nav
