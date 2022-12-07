'use client'
import styles from './socialbar.module.scss'
import { SocialBarProps, ContactLinkProps } from '../types'
import cn from 'classnames'
import SocialLinks from 'elements/SocialLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialBar = ({ siteData, themeStyles }: SocialBarProps) => {
    const ContactLink = ({ cname, link, icon, content }: ContactLinkProps) => {
        return (
            <li className={cn(styles[`${cname}`], styles.icon)}>
                <a href={link} aria-label={cname} className={cn('socialIcon')}>
                    <FontAwesomeIcon icon={icon} />
                    {content}
                </a>
            </li>
        )
    }

    return (
        <div className={styles['social-bar']} style={{ background: themeStyles.BckdHeaderSocial }}>
            <SocialLinks siteData={siteData} />
            <aside className={styles.contact}>
                <ul>
                    {siteData.contact.phone[0] && (
                        <ContactLink
                            cname="phone"
                            link={'tel:' + siteData.contact.phone[0].number}
                            icon={siteData.contact.icons.phone}
                            content={siteData.contact.phone[0].number}
                        />
                    )}
                    {siteData.contact.email[0] && (
                        <ContactLink
                            cname="email"
                            link={`mailto:${siteData.contact.email[0].email}`}
                            icon={siteData.contact.icons.email}
                            content={siteData.contact.email[0].name + ':' + siteData.contact.email[0].email}
                        />
                    )}

                    {siteData.siteName && (
                        <ContactLink cname="map" link={'www.google.com'} icon={siteData.contact.icons.location} content={siteData.siteName} />
                    )}
                </ul>
            </aside>
        </div>
    )
}

export default SocialBar
