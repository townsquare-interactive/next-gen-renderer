'use client'
import styles from './socialbar.module.scss'
import { SocialBarProps } from '../types'
import cn from 'classnames'
import SocialLinks from 'elements/SocialLinks'
import { Fragment } from 'react'
import ContactLink from './ContactLink'

const SocialBar = ({ siteData, setContactModal }: SocialBarProps) => {
    return (
        <div className={cn(styles['social-bar'], 'social-bar', 'social-bar-background')}>
            <SocialLinks siteData={siteData} />
            <aside className={styles.contact}>
                <ul>
                    {siteData.contact?.contactLinks && (
                        <>
                            {siteData.contact.contactLinks.map((item, index) => (
                                <Fragment key={index}>
                                    {item.active && (
                                        <ContactLink
                                            cname={item.cName}
                                            link={item.link}
                                            icon={item.icon}
                                            content={item.content}
                                            setContactModal={setContactModal}
                                            showContactBox={siteData.contact.showContactBox}
                                            type="bar"
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </>
                    )}
                </ul>
            </aside>
        </div>
    )
}

export default SocialBar
