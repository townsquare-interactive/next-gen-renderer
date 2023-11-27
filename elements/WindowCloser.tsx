import cn from 'classnames'
import { WindowCloserProps } from 'types'
import styles from './windowcloser.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WindowCloser = (props: WindowCloserProps) => {
    const { type, closerFunction } = props
    return <button className={cn(styles['root'], 'close-toggle', styles[`${type}`])} onClick={closerFunction} aria-label="close-window"><FontAwesomeIcon icon={['fas', 'x']} /></button>
}

export default WindowCloser
