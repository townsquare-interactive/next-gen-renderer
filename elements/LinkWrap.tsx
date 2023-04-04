import Link from 'next/link'
import cn from 'classnames'
import styles from './linkwrap.module.scss'
import { LinkWrapProps } from 'types'

const LinkWrap = (props: LinkWrapProps) => {
    const { item, modType } = props

    const currentLink = item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''

    return (
        <Link
            aria-label={'link to ' + currentLink.replaceAll('/', '')}
            href={currentLink}
            className={cn(styles['link-wrap'], styles[`${modType}`], 'link-wrap')}
        ></Link>
    )
}

export default LinkWrap
