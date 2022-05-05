import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { PagesProps, NavData, NavProps, PagesData, NavData2 } from '../components/types'

/* const Nav = (list: PagesProps[]) => { */
const Nav = () => {
    const modLayout = 'header'

    const pages = [
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
            <div
                className={cn(styles.wrapper, {
                    //[styles.footerNav]: modLayout === 'footer',
                    [styles.headerNav]: modLayout === 'header',
                })}
            >
                <ul>
                    {pages.map((item, index) => (
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
