import Link from 'next/link'
import styles from './anchors.module.scss'
import cn from 'classnames'

export const Anchors = (props: any) => {
    const { anchorTags } = props

    return (
        <ul className={styles.root}>
            {anchorTags.map((anchorItem: any, idx: number) => (
                <li key={idx} className={cn(styles.anchor)}>
                    <Link href={anchorItem.link || ''} scroll={false}>
                        {anchorItem.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
