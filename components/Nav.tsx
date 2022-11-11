import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { Pagelist, NavItem } from '../types'
import { Fragment } from 'react'

const Nav = (props: Pagelist) => {
    const { navType, cmsNav, themeStyles } = props

    const NavItem = ({ item, arrow = false }: any) => {
        return (
            <Link
                href={item.title ? item.title.toLowerCase() : ''}
                passHref={true}
                className={cn({
                    [styles.arrow]: arrow == true,
                    ['navLink']: navType === 'desktop-nav' || navType === 'mobile-nav',
                    ['socialIcon']: navType === 'footer-nav',
                })}
                aria-label={item.title}
            >
                {item.title}
            </Link>
        )
    }

    return (
        <nav className={styles.access}>
            <ul className={cn(styles.menu, styles[`${navType}`])}>
                {cmsNav &&
                    cmsNav.map((item: NavItem, index: number) => (
                        <Fragment key={index}>
                            {item.menu_item_parent == 0 && (
                                <li>
                                    <NavItem item={item} arrow={item.submenu?.length ? true : false} />
                                    {item.submenu && (
                                        <ul className={cn(styles['sub-menu'])}>
                                            {item.submenu.map((subItem: any, idx: number) => (
                                                <Fragment key={idx}>
                                                    <li>
                                                        <NavItem item={subItem} />
                                                    </li>
                                                    {subItem.submenu && (
                                                        <ul className={cn(styles['sub-menu'], {})}>
                                                            {subItem.submenu.map((subItem2: any, subidx: number) => (
                                                                <li key={subidx}>
                                                                    <NavItem item={subItem2} />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </Fragment>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            )}
                        </Fragment>
                    ))}
            </ul>
        </nav>
    )
}

export default Nav
