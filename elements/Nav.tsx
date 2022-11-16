import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { MyNavProps, NavItem, NavListItemProps } from '../types'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Nav = (props: MyNavProps) => {
    const { navType, cmsNav } = props

    return (
        <nav className={styles.access}>
            <ul className={cn(styles.menu, styles[`${navType}`])}>
                {cmsNav &&
                    cmsNav.map((item: NavItem, index: number) => (
                        <Fragment key={index}>
                            {item.menu_item_parent == 0 && (
                                <li>
                                    <NavListItem item={item} arrow={item.submenu?.length ? true : false} navType={navType} />
                                    {item.submenu && (
                                        <ul className={cn(styles['sub-menu'])}>
                                            {item.submenu.map((subItem: any, idx: number) => (
                                                <Fragment key={idx}>
                                                    <li>
                                                        <NavListItem item={subItem} navType={navType} />

                                                        {subItem.submenu && (
                                                            <ul className={cn(styles['sub-menu'])}>
                                                                {subItem.submenu.map((subItem2: any, subidx: number) => (
                                                                    <li key={subidx}>
                                                                        <NavListItem item={subItem2} navType={navType} />
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
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

const NavListItem = ({ item, arrow = false, navType }: NavListItemProps) => {
    const [currentPage, setCurrentPage] = useState('home')

    useEffect(() => {
        setCurrentPage(window.location.pathname.replace('/', ''))
    }, [])

    const title = item.title ? item.title.toLowerCase() : ''

    function currentNav() {
        if (navType != 'footer-nav') {
            if (currentPage == title || (currentPage == '' && title === 'home')) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    return (
        <Link
            href={item.title ? title : ''}
            className={cn({
                [styles.arrow]: arrow == true,
                ['navLink']: navType === 'desktop-nav' || navType === 'mobile-nav',
                ['socialIcon']: navType === 'footer-nav',
                ['currentNav']: currentNav(),
            })}
            aria-label={item.title}
        >
            {item.title}
        </Link>
    )
}

export default Nav
