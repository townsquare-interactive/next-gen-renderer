import Link from 'next/link'
import cn from 'classnames'
import styles from './linkwrap.module.scss'
import { LinkWrapProps } from 'types'

const LinkWrap = (props: LinkWrapProps) => {
    const { item, modType } = props

    return (
        <Link
            href={item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''}
            className={cn(styles['link-wrap'], styles[`${modType}`], 'link-wrap')}
        ></Link>
    )
}

export default LinkWrap
