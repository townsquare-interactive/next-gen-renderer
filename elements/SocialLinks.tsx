import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPrint } from '@fortawesome/free-solid-svg-icons'
import { socialConvert, iconConvert, extUrl } from '../functions'
import { SocialBarProps, SocialItem } from '../types'
import styles from './sociallinks.module.scss'
import cn from 'classnames'

const SocialLinks = ({ CMSLayout, modType = 'header' }: SocialBarProps) => {
    function printPage() {
        print()
        return
    }
    return (
        <ul
            className={cn(styles['social-media-links'], {
                [styles['mob-social']]: modType === 'mob-header',
                [styles['head-social']]: modType === 'header',
                [styles['foot-social']]: modType === 'footer',
                [styles['widget']]: modType === 'widget',
            })}
        >
            {CMSLayout.social.map((item: SocialItem, index: number) => (
                <li key={index}>
                    <a target="blank" aria-label={iconConvert(item.url)} className={cn('socialIcon')} href={extUrl(item.url)}>
                        <FontAwesomeIcon icon={socialConvert(item.url)} /> {modType === 'widget' && item.label}
                    </a>
                </li>
            ))}
            <li>
                <a
                    aria-label="share-site"
                    className={cn('socialIcon', 'email-to-friend')}
                    href={`mailto:?subject=Check out ${CMSLayout.siteName}&body=I thought you%27d be interested in this site%3A%0A${CMSLayout.url}%2F`}
                >
                    <FontAwesomeIcon icon={faEnvelope} /> {modType === 'widget' && 'Send to a Friend'}
                </a>
            </li>
            {modType != 'mob-header' && (
                <li>
                    <button aria-label="print-page" className={cn('socialIcon', 'print')} onClick={printPage}>
                        <FontAwesomeIcon icon={faPrint} /> {modType === 'widget' && 'Print This Page'}
                    </button>
                </li>
            )}
        </ul>
    )
}

export default SocialLinks
