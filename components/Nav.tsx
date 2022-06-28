import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { NavProps } from '../components/types'

const Nav = (props: NavProps) => {
    const { pages, modLayout = 'header', borderNum, themeStyles } = props

    const themeStylesObj = {
        color: themeStyles ? `${themeStyles['textColorAccent']}` : '#fff',
    }

    const navHover = `.navLink:hover{color: ${themeStyles['altColor']}}`

    return (
        <nav className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.footerNav]: modLayout === 'footer',
                    [styles.headerNav]: modLayout === 'header',
                })}
                style={themeStylesObj}
            >
                <style>{navHover}</style>

                <ul>
                    {pages.map((item, index) => (
                        <li
                            key={index}
                            className={cn({
                                [styles.bordered]: index === borderNum,
                            })}
                        >
                            <Link href={item.slug}>
                                <a className="navLink">{item.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
