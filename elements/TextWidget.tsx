import styles from './textwidget.module.scss'
import Parser from 'html-react-parser'
import cn from 'classnames'

const MyText = (props: { title?: string; text: string; type?: string; contentSpacing?: string }) => {
    const { title, text, type, contentSpacing } = props

    return (
        <div className={cn(styles.root, styles[`${type}`], styles[`${contentSpacing}`])}>
            {title && <h4 className={styles.hd}>{title}</h4>}
            {text && <div className={styles.dsc}>{Parser(text)}</div>}
        </div>
    )
}

export default MyText
