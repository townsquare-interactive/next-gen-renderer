'use client'
import styles from './socialbar.module.scss'
import { SocialBarProps, ContactLinkProps } from '../types'
import cn from 'classnames'
import SocialLinks from 'elements/SocialLinks'
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialBar = ({ CMSLayout, themeStyles }: SocialBarProps) => {
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
            <SocialLinks CMSLayout={CMSLayout} />
            <aside className={styles.contact}>
                <ul>
                    {CMSLayout.contact.phone[0] && (
                        <ContactLink
                            cname="phone"
                            link={'tel:' + CMSLayout.contact.phone[0].number}
                            icon={faPhone}
                            content={CMSLayout.contact.phone[0].number}
                        />
                    )}
                    {CMSLayout.contact.email[0] && (
                        <ContactLink
                            cname="email"
                            link={`mailto:${CMSLayout.contact.email[0].email}`}
                            icon={faEnvelope}
                            content={CMSLayout.contact.email[0].name + ':' + CMSLayout.contact.email[0].email}
                        />
                    )}

                    {CMSLayout.siteName && <ContactLink cname="map" link={'www.google.com'} icon={faLocationPin} content={CMSLayout.siteName} />}
                </ul>
            </aside>
        </div>
    )
}

export default SocialBar
