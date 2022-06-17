import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { PagesProps, NavProps, PagesData } from '../components/types'
import theme from '../pages/theme.json'

const Nav = (props: NavProps) => {
    const { pages, modLayout = 'header', borderNum } = props

    const themeStyles = {
        color: `${theme['text-color-accent']}`,
    }

    const navHover = `#navLink:hover{color:${theme['alt-color']}}`

    /*     function changeColor(e) {
        e.target.style.color = 'red'
    } */

    return (
        <nav className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.footerNav]: modLayout === 'footer',
                    [styles.headerNav]: modLayout === 'header',
                })}
                style={themeStyles}
            >
                <style>{navHover}</style>
                {/*                 <style>
                #navLink:hover {color:'red';}
  </style> */}
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
