import Link from 'next/link'
import cn from 'classnames'
import styles from './linkwrap.module.scss'
import { LinkWrapProps } from 'types'
import { pushEventToDataLayer } from 'functions'

const LinkWrap = (props: LinkWrapProps) => {
    const { item, modType } = props

    const currentLink = item.links?.pagelink || item.links?.weblink || item.links?.pagelink2 || item.links?.weblink2 || ''

    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (item.links?.dataLayerEventWrap) {
            pushEventToDataLayer(item.links?.dataLayerEventWrap)
        }
    }

    return (
        <Link
            aria-label={'link to ' + currentLink.replaceAll('/', '')}
            href={currentLink}
            className={cn(styles['link-wrap'], styles[`${modType}`], 'link-wrap')}
            onClick={handleClick}
        ></Link>
    )
}

export default LinkWrap
