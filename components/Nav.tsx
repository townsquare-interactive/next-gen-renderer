import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { PagesProps, NavProps, PagesData } from '../components/types'

/* const Nav = (props: NavProps) => {
    const { navData } = props */
const Nav = (props: NavProps) => {
    const { pages, modLayout = 'header', borderNum } = props
    // const modLayout = 'header'

    console.log(borderNum)

    return (
        <div className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.footerNav]: modLayout === 'footer',
                    [styles.headerNav]: modLayout === 'header',
                })}
            >
                <ul>
                    {pages.map((item, index) => (
                        <li
                            key={index}
                            className={cn({
                                [styles.bordered]: index === borderNum,
                            })}
                        >
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
