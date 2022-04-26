import styles from './label.module.scss'
import { LabelProps } from './types'
import cn from 'classnames'

function Label(props: LabelProps) {
    const { text, border = false } = props

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn({
                        [styles.headline]: true,
                        [styles.bordered]: border,
                    })}
                >
                    <h3 className={styles.text}>{text}</h3>
                </div>
            </div>
        </div>
    )
}

export default Label
