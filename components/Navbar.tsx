import styles from './navbar.module.scss'
import Link from 'next/dist/client/link'

const Navbar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.nav}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                    <Link href="/gallery">
                        <a>Gallery</a>
                    </Link>
                    <Link href="/images">
                        <a>Image Testing</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
