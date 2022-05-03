import styles from './label.module.scss'
import { LabelProps } from './types'
import cn from 'classnames'

function Label(props: LabelProps) {
    const { text = '', border = false, gap = false, align = 'left', textSize = 'md' } = props

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn({
                        [styles.headline]: true,
                        [styles.bordered]: border,
                        [styles.gap]: gap,
                    })}
                >
                    <h3
                        className={cn(styles.text, {
                            [styles.center]: align === 'center',
                            [styles.left]: align === 'left',
                            [styles.right]: align === 'right',
                            [styles.lg]: textSize === 'lg',
                            [styles.md]: textSize === 'md',
                            [styles.sm]: textSize === 'sm',
                        })}
                    >
                        {text}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Label
