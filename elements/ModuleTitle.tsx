import cn from 'classnames'
import styles from './moduletitle.module.scss'

const ModuleTitle = ({ title }: { title: string }) => {
    return (
        <h2 className={cn(styles['root'], 'txt-color-hd')} data-title="module headline">
            <span>{title}</span>
        </h2>
    )
}

export default ModuleTitle
