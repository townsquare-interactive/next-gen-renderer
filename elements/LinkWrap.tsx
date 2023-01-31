import Link from 'next/link'
import cn from 'classnames'
import styles from './linkwrap.module.scss'
import { LinkWrapProps } from 'types'

const LinkWrap = (props: LinkWrapProps) => {
    const { item, children, modType } = props

    return (
        <Link
            href={item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''}
            passHref={item.weblink || item.weblink2 ? true : false}
            className={cn('btn_link', styles['link-wrap'], styles[`${modType}`])}
            target={item.newwindow == 1 ? '_blank' : item.newwindow2 == 1 ? '_blank' : '_self'}
            aria-label={item.headline || 'block-link'}
        >
            {children}
        </Link>
    )
}

export default LinkWrap
