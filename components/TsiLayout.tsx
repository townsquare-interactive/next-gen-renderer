import { tsiLayoutProps } from '../components/types'
import styles from './TsiLayout.module.scss'
import cn from 'classnames'

export default function Layout(props: tsiLayoutProps) {
    const { children } = props

    return <div className={styles.container}>{children}</div>
}
