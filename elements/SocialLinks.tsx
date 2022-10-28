import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPrint } from '@fortawesome/free-solid-svg-icons'
import { socialConvert, iconConvert, extUrl } from '../functions'
import { SocialBarProps, SocialItem } from '../components/types'
import styles from './sociallinks.module.scss'
import cn from 'classnames'

/* const SocialLinks = ({ CMSLayout, themeStyles, modType = 'header' }: SocialBarProps) => {
    return (
        <ul
            className={cn(styles['social-media-links'], {
                [styles['mob-social']]: modType === 'mob-header',
                [styles['head-social']]: modType === 'header',
                [styles['foot-social']]: modType === 'footer',
            })}
        >
            {CMSLayout.social.map((url: string, index: number) => (
                <li key={index}>
                    <a target="blank" aria-label={iconConvert(url)} className={cn('socialIcon')} href={extUrl(url)}>
                        <FontAwesomeIcon icon={socialConvert(url)} />
                    </a>
                </li>
            ))}
            <li>
                <a aria-label="share-site" className={cn('socialIcon')}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </li>
        </ul>
    )
} */

const SocialLinks = ({ CMSLayout, themeStyles, modType = 'header' }: SocialBarProps) => {
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
                <a aria-label="share-site" className={cn('socialIcon')}>
                    <FontAwesomeIcon icon={faEnvelope} /> {modType === 'widget' && 'Send to a Friend'}
                </a>
            </li>
        </ul>
    )
}

export default SocialLinks
