import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import Image from 'next/image'

const Nav = () => {
    return (
        <div className={styles.logo}>
            <Image src="/images/company-logo.png" height={156} width={722} alt="logo" />
        </div>
    )
}

export default Nav
