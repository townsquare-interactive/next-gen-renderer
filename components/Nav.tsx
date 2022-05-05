import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'

const Nav = () => {
    const navData = [
        {
            text: 'Home',
            linkUrl: '/',
        },
        {
            text: 'Menu',
            linkUrl: '/menu',
        },
        {
            text: 'Images',
            linkUrl: '/images',
        },
        {
            text: 'Blog',
            linkUrl: '/blog',
        },
        {
            text: 'Contact',
            linkUrl: '/',
        },
        {
            text: 'About Us',
            linkUrl: '/',
        },
        {
            text: 'Our Sponsors',
            linkUrl: '/',
        },
    ]

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <ul>
                    {navData.map((item, index) => (
                        <li key={index}>
                            <Link href={item.linkUrl}>
                                <a>{item.text}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Nav
