import styles from './text.module.scss'
import { TextProps } from './types'
import cn from 'classnames'

function Text(props: TextProps) {
    const { text, border = false, gap = false, align = 'left', textSize = 'md' } = props

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn({
                        [styles.body]: true,
                        [styles.bordered]: border,
                        [styles.gap]: gap,
                    })}
                >
                    <p
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
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Text
