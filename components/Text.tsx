import styles from './text.module.scss'
import { TextProps } from './types'
import cn from 'classnames'
import Parser from 'html-react-parser'

function Text(props: TextProps) {
    const { border = false, gap = false, align = 'left', textSize = 'md', text = '', themeStyles } = props

    const themeStylesObj = {
        color: `${themeStyles['textColor']}`,
    }

    const borderStyles = {
        color: `${themeStyles['textColor']}`,
        border: `4px solid ${themeStyles['textColor']}`,
    }

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn({
                        [styles.body]: true,
                        [styles.bordered]: border,
                        [styles.gap]: gap,
                    })}
                    style={border ? borderStyles : themeStylesObj}
                >
                    <div
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Text
