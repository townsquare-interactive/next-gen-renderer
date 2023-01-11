import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { MyNavProps, NavItem, NavListItemProps } from '../types'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Nav = (props: MyNavProps) => {
    const { navType, cmsNav, navSwitch } = props

    return (
        <nav className={styles.access}>
            <ul className={cn(styles.menu, styles[`${navType}`])}>
                {cmsNav &&
                    cmsNav.map((item: NavItem, index: number) => (
                        <Fragment key={index}>
                            {item.menu_item_parent == 0 && (
                                <li>
                                    <NavListItem item={item} arrow={item.submenu?.length ? true : false} navType={navType} navSwitch={navSwitch} />
                                    {item.submenu && (
                                        <ul className={cn(styles['sub-menu'], styles['sub-1'])}>
                                            {item.submenu.map((subItem: any, idx: number) => (
                                                <Fragment key={idx}>
                                                    <li>
                                                        <NavListItem item={subItem} navType={navType} navSwitch={navSwitch} />

                                                        {subItem.submenu && (
                                                            <ul className={cn(styles['sub-menu'])}>
                                                                {subItem.submenu.map((subItem2: any, subidx: number) => (
                                                                    <li key={subidx}>
                                                                        <NavListItem item={subItem2} navType={navType} navSwitch={navSwitch} />
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

const NavListItem = ({ item, arrow = false, navType, navSwitch }: NavListItemProps) => {
    const [currentPage, setCurrentPage] = useState('home')
    const router = useRouter()

    useEffect(() => {
        setCurrentPage(router.asPath.replace('/', ''))
    }, [router])

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
                ['social-icon']: navType === 'footer-nav',
                ['currentNav']: currentNav(),
            })}
            aria-label={item.title}
            onClick={navType != 'desktop-nav' ? navSwitch : undefined}
        >
            {item.title}
        </Link>
    )
}

export default Nav
