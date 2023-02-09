'use client'
import styles from './contactlink.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactLinkProps } from 'types'

const ContactLink = ({ cname, link, icon, content, setContactModal, type, showContactBox }: ContactLinkProps) => {
    if (showContactBox && type != 'box') {
        return (
            <>
                {cname === 'map' && (
                    <li className={cn(styles[`${cname}`], styles.icon, styles[`${type}`])}>
                        <button onClick={setContactModal} aria-label={cname} className={cn('social-icon')}>
                            <FontAwesomeIcon icon={icon} />
                            Contact Us
                        </button>
                    </li>
                )}
            </>
        )
    } else {
        return (
            <>
                {type === 'bar' && cname === 'email'}
                <li className={cn(styles[`${cname}`], styles.icon, styles[`${type}`])}>
                    <a href={link} aria-label={cname} className={cn(!showContactBox ? 'social-icon' : 'box-links')} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon} />
                        {content}
                    </a>
                </li>
            </>
        )
    }
}

export default ContactLink
