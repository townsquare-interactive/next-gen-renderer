import styles from './label.module.scss'
import { LabelProps } from './types'
import cn from 'classnames'
import Parser from 'html-react-parser'

function Label(props: LabelProps) {
    const { text = '', border = false, gap = false, align = 'left', textSize = 'md', themeStyles } = props

    const themeStylesObj = {
        color: `${themeStyles['headingColor']}`,
    }

    const borderStyles = {
        color: `${themeStyles['headingColor']}`,
        borderBottom: `4px solid ${themeStyles['headingColor']}`,
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
                    style={border ? borderStyles : themeStylesObj}
                >
                    <h2
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
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Label
