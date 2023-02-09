import cn from 'classnames'
import { NavCLoseProps } from 'types'
import styles from './navclose.module.scss'

const NavClose = (props: NavCLoseProps) => {
    const { navSwitch, type, setContactModal } = props
    return (
        <button
            className={cn(styles['nav-close'], 'close-toggle', styles[`${type}`])}
            onClick={navSwitch ? navSwitch : setContactModal}
            aria-label="close-mobile-nav"
        ></button>
    )
}

export default NavClose
