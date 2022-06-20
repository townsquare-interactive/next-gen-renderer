import styles from './label.module.scss'
import { LabelProps } from './types'
import cn from 'classnames'
import Parser from 'html-react-parser'
import theme from '../pages/theme.json'

function Label(props: LabelProps) {
    const { text = '', border = false, gap = false, align = 'left', textSize = 'md' } = props

    const themeStyles = {
        color: `${theme['heading-color']}`,
    }

    const borderStyles = {
        color: `${theme['heading-color']}`,
        borderBottom: `4px solid ${theme['heading-color']}`,
    }

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn({
                        [styles.headline]: true,
                        [styles.bordered]: border,
                        [styles.gap]: gap,
                    })}
                    style={border ? borderStyles : themeStyles}
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
                        {Parser(text)}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Label
