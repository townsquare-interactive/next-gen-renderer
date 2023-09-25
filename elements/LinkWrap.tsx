import Link from 'next/link'
import cn from 'classnames'
import styles from './linkwrap.module.scss'
import { LinkWrapProps } from 'types'

const LinkWrap = (props: LinkWrapProps) => {
    const { item, modType } = props

    const currentLink = item.links?.pagelink || item.links?.weblink || item.links?.pagelink2 || item.links?.weblink2 || ''

    return (
        <Link
            aria-label={'link to ' + currentLink.replaceAll('/', '')}
            href={currentLink}
            className={cn(styles['link-wrap'], styles[`${modType}`], 'link-wrap')}
        ></Link>
    )
}

export default LinkWrap
