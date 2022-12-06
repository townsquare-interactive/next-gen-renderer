import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { extUrl, printPage } from '../functions'
import { SocialLinks, SocialItem } from '../types'
import styles from './sociallinks.module.scss'
import cn from 'classnames'

const SocialLinks = ({ siteData, modType = 'header' }: SocialLinks) => {
    return (
        <ul
            className={cn(styles['social-media-links'], {
                [styles['mob-social']]: modType === 'mob-header',
                [styles['head-social']]: modType === 'header',
                [styles['foot-social']]: modType === 'footer',
                [styles['widget']]: modType === 'widget',
            })}
        >
            {siteData.social.map((item: SocialItem, index: number) => (
                <li key={index}>
                    <a target="blank" aria-label={item.name} className={cn('socialIcon')} href={extUrl(item.url)}>
                        <FontAwesomeIcon icon={item.icon} /> {modType === 'widget' && item.label}
                    </a>
                </li>
            ))}
            <li>
                <a
                    aria-label="share-site"
                    className={cn('socialIcon', 'email-to-friend')}
                    href={`mailto:?subject=Check out ${siteData.siteName}&body=I thought you%27d be interested in this site%3A%0A${siteData.url}%2F`}
                >
                    <FontAwesomeIcon icon={['fas', 'envelope']} /> {modType === 'widget' && 'Send to a Friend'}
                </a>
            </li>
            {modType != 'mob-header' && (
                <li>
                    <button aria-label="print-page" className={cn('socialIcon', 'print')} onClick={printPage}>
                        <FontAwesomeIcon icon={['fas', 'print']} /> {modType === 'widget' && 'Print This Page'}
                    </button>
                </li>
            )}
        </ul>
    )
}

export default SocialLinks
