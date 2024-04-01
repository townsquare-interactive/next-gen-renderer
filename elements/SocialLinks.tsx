import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { printPage } from '../functions'
import { SocialLinksProps, SocialItem } from '../types'
import styles from './sociallinks.module.scss'
import cn from 'classnames'

const SocialLinks = ({ siteData, modType = 'header' }: SocialLinksProps) => {
    return (
        <ul
            className={cn(styles['social-media-links'], 'social-links', {
                [styles['slide-social']]: modType === 'slide-header',
                ['slide-social']: modType === 'slide-header',
                [styles['head-social']]: modType === 'header',
                ['head-social']: modType === 'header',
                [styles['foot-social']]: modType === 'footer',
                [styles['widget']]: modType === 'widget',
                [styles['reverse-social']]: siteData.headerOptions?.reverseSocial,
                [styles['landing']]: modType === 'landing',
            })}
        >
            {siteData.social &&
                siteData.social.map((item: SocialItem, index: number) => (
                    <li key={index}>
                        <a
                            target="blank"
                            aria-label={item.label || item.name}
                            className={cn({
                                ['social-icon']: modType === 'slide-header' || modType === 'header',
                                ['footer-icon']: modType === 'footer' || modType === 'widget',
                            })}
                            href={item.url}
                        >
                            <FontAwesomeIcon icon={item.icon} /> {modType === 'widget' && item.label}
                        </a>
                    </li>
                ))}
            {siteData.headerOptions?.showPrintEmail && (
                <>
                    <PrintAndEmailIcons modType={modType} siteName={siteData.siteName} url={siteData.url} />
                </>
            )}
        </ul>
    )
}

const PrintAndEmailIcons = (props: { modType: string; siteName: string | undefined; url: string | undefined }) => {
    const { modType, siteName, url } = props
    return (
        <>
            <li>
                <a
                    aria-label="share-site"
                    className={cn(
                        {
                            ['social-icon']: modType === 'slide-header' || modType === 'header',
                            ['footer-icon']: modType === 'footer' || modType === 'widget',
                        },
                        'email-to-friend'
                    )}
                    href={`mailto:?subject=Check out ${siteName}&body=I thought you%27d be interested in this site%3A%0A${url}%2F`}
                >
                    <FontAwesomeIcon icon={['fas', 'envelope']} /> {modType === 'widget' && 'Send to a Friend'}
                </a>
            </li>

            {modType != 'slide-header' && (
                <li>
                    <button
                        aria-label="print-page"
                        className={cn(
                            {
                                ['social-icon']: modType === 'slide-header' || modType === 'header',
                                ['footer-icon']: modType === 'footer' || modType === 'widget',
                            },
                            'print'
                        )}
                        onClick={printPage}
                    >
                        <FontAwesomeIcon icon={['fas', 'print']} /> {modType === 'widget' && 'Print This Page'}
                    </button>
                </li>
            )}
        </>
    )
}

export default SocialLinks
