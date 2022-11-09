import styles from './mytext.module.scss'

import Parser from 'html-react-parser'
// importing fontAwesome icons
import { faRocket, faAnchor, faArchway } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

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
