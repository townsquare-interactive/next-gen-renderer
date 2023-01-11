import { NavToggleProps } from '../types'
import styles from './navtoggle.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavToggle = (props: NavToggleProps) => {
    const { navSwitch, modType = 'header' } = props

    return (
        <button
            className={cn(styles['nav-open'], {
                [styles['head-toggle']]: modType === 'header',
                [styles['foot-toggle']]: modType === 'footer',
                ['footer-icon']: modType === 'footer',
                ['accent-txt']: modType === 'header',
            })}
            onClick={navSwitch}
            aria-label="toggle navigation"
        >
            <FontAwesomeIcon icon={faBars} /> {modType === 'footer' && 'Menu'}
        </button>
    )
}

export default NavToggle
