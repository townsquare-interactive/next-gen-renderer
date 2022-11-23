import cn from 'classnames'
import styles from './altheader.module.scss'

const ModuleTitle = (props: any) => {
    const { title } = props

    return (
        <h2 className={cn(styles['mod-title'], 'txt-color-heading')} data-title="module headline">
            <span>{title}</span>
        </h2>
    )
}

export default ModuleTitle
