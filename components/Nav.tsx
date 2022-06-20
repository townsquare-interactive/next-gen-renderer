import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { PagesProps, NavProps, PagesData } from '../components/types'
import theme from '../pages/theme.json'

const Nav = (props: NavProps) => {
    const { pages, modLayout = 'header', borderNum, themeStyles } = props

    console.log('nav styles', themeStyles)

    const themeStylesObj = {
        color: themeStyles ? `${theme['textColorAccent']}` : '#fff',
    }

    const navHover = `#navLink:hover{color: ${theme['altColor']}}`

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
                            id="navLink"
                            /*  onMouseOver={changeColor()} */
                        >
                            <Link href={item.slug}>
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
