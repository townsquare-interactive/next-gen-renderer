import { tsiLayoutProps } from '../types'
import styles from './TsiLayout.module.scss'

export default function Layout(props: tsiLayoutProps) {
    const { children } = props

    return <div className={styles.container}>{children}</div>
}
