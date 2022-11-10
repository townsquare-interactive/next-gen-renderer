import styles from './mytext.module.scss'
import Parser from 'html-react-parser'

const MyText = (props: any) => {
    const { title, text } = props

    return (
        <div className={styles.root}>
            {title && <h4 className={styles.hd}>{title}</h4>}
            {text && <div className={styles.dsc}>{Parser(text)}</div>}
        </div>
    )
}

export default MyText
