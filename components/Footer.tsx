import styles from './footer.module.scss'
import Link from 'next/dist/client/link'
import Script from 'next/script'
import cn from 'classnames'
import Image from 'next/image'
import Nav from './Nav'
import Logo from './Logo'
import { FooterProps, HomeProps, NavProps, PagesProps } from './types'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props: FooterProps) => {
    function iconConvert(str: string) {
        str.indexOf('google') !== -1

        if (str.indexOf('google') !== -1) {
            return faGoogle
        } else if (str.indexOf('facebook') !== -1) {
            return faFacebook
        } else if (str.indexOf('instagram') !== -1) {
            return faInstagram
        } else if (str.indexOf('twitter') !== -1) {
            return faTwitter
        } else {
            return faRocket
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={cn(styles.block, styles.logoInfo)}>
                    <Logo logoUrl={props.logoUrl} />
                    <div className={styles.social}>
                        {props.footerData.socialData.map((item, index) => (
                            <a href={item.linkUrl} key={index} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={iconConvert(item.linkUrl)} />
                            </a>
                        ))}
                    </div>
                    <div className={styles.phone}>{props.footerData.phoneNumber}</div>
                </div>
                <div className={cn(styles.block, styles.navInfo)}>
                    <Nav pages={props.navData.pages} modLayout="footer" borderNum={props.navData.borderNum} />
                </div>
                <div className={cn(styles.block, styles.addInfo)}>
                    <div>
                        <p>{props.footerData.addressData.street}</p>
                        <p>{props.footerData.addressData.cityState}</p>
                        <p>{props.footerData.addressData.zip}</p>
                    </div>
                </div>
                <div className={cn(styles.block, styles.siteInfo)}>
                    <p>{props.footerData.siteName}</p>
                    <p>&copy; All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
