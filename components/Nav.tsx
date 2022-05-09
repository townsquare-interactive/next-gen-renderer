import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { PagesProps, NavProps, PagesData } from '../components/types'

/* const Nav = (props: NavProps) => {
    const { navData } = props */
const Nav = (props: NavProps) => {
    const { pages, modLayout } = props
    // const modLayout = 'header'

    console.log('pages', pages)

    /* const pages = [
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
    ] */

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
