'use client'
import styles from './socialbar.module.scss'
import { SocialBarProps, ContactLinkProps } from '../types'
import cn from 'classnames'
import SocialLinks from 'elements/SocialLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const SocialBar = ({ siteData, themeStyles }: SocialBarProps) => {
    const ContactLink = ({ cname, link, icon, content }: ContactLinkProps) => {
        return (
            <li className={cn(styles[`${cname}`], styles.icon)}>
                <a href={link} aria-label={cname} className={cn('socialIcon')} target="_blank" rel="noopener noreferrer">
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
                    {siteData.contact.contactLinks.map((item, index) => (
                        <Fragment key={index}>
                            {item.active && <ContactLink cname={item.cName} link={item.link} icon={item.icon} content={item.content} />}
                        </Fragment>
                    ))}
                </ul>
            </aside>
        </div>
    )
}

export default SocialBar
