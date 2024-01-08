import { NavToggleProps } from '../types'
import styles from './navtoggle.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavToggle = (props: NavToggleProps) => {
    const { navSwitch, modType = 'header', desktopBurgerNav = false } = props

    return (
        <button
            className={cn(styles['nav-open'], {
                [styles['head-toggle']]: modType === 'header',
                [styles['foot-toggle']]: modType === 'footer',
                [styles['desktop-burger']]: desktopBurgerNav,
                ['footer-icon']: modType === 'footer',
                ['navLink']: modType === 'header',
            })}
            onClick={navSwitch}
            aria-label={modType === 'footer' ? 'Menu' : 'toggle navigation'}
        >
            <FontAwesomeIcon icon={['fas', 'bars']} /> {modType === 'footer' && 'Menu'}
        </button>
    )
}

export default NavToggle
