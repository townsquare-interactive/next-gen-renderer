import styles from './nav.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { MyNavProps, NavItem, NavListItemProps } from '../types'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Nav = (props: MyNavProps) => {
    const { navType, cmsNav, navSwitch, navAlign } = props

    return (
        <nav className={cn(styles.access, styles[`${navType}`])} style={{ textAlign: navAlign || 'left' }}>
            {cmsNav && (
                <ul className={cn(styles.menu)}>
                    {cmsNav.map((item: NavItem, index: number) => (
                        <Fragment key={index}>
                            {item.menu_item_parent == 0 && (
                                <li>
                                    <NavListItem item={item} arrow={item.submenu?.length ? true : false} navType={navType} navSwitch={navSwitch} />
                                    {item.submenu && item.submenu?.length != 0 && (
                                        <ul className={cn(styles['sub-menu'], styles['sub-1'])}>
                                            {item.submenu?.map((subItem: any, idx: number) => (
                                                <Fragment key={idx}>
                                                    <li>
                                                        <NavListItem item={subItem} navType={navType} navSwitch={navSwitch} />

                                                        {subItem.submenu?.length != 0 && (
                                                            <ul className={cn(styles['sub-menu'])}>
                                                                {subItem.submenu?.map((subItem2: any, subidx: number) => (
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
            )}
        </nav>
    )
}

const NavListItem = ({ item, arrow = false, navType, navSwitch }: NavListItemProps) => {
    const [currentPage, setCurrentPage] = useState('home')

    const pathname = usePathname()
    useEffect(() => {
        if (pathname) {
            setCurrentPage(pathname.replace('/', ''))
        }
    }, [pathname])

    const title = item.title ? item.title.toLowerCase() : ''

    function checkCurrentPage() {
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
            href={item.url || ''}
            className={cn({
                [styles.arrow]: arrow == true,
                ['navLink']: navType === 'desktop-nav' || navType === 'mobile-nav',
                ['footer-icon']: navType === 'footer-nav',
                ['current-page']: checkCurrentPage(),
            })}
            aria-label={item.title}
            onClick={navType === 'mobile-nav' ? navSwitch : undefined}
        >
            {item.title}
        </Link>
    )
}

export default Nav
