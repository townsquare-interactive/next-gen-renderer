import styles from './footer.module.scss'
import cn from 'classnames'
import Nav from './Nav'
import Logo from './Logo'
import { FooterProps, HomeProps, NavProps, PagesProps } from './types'
import { domainImage } from '../functions'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props: FooterProps) => {
    const themeStylesObj = {
        background: `${props.themeStyles['footerBackground']}`,
        color: `${props.themeStyles['textColorAccent']}`,
    }

    const phoneColor = {
        color: `${props.themeStyles['altColor']}`,
    }

    const socialHover = `.socialLink:hover{color: ${props.themeStyles['altColor']}}`

    const logo = props.logoUrl && domainImage(props.logoUrl)

    function iconConvert(str: string) {
        if (str.indexOf('google') !== -1) {
            return 'google'
        } else if (str.indexOf('facebook') !== -1) {
            return 'facebook'
        } else if (str.indexOf('instagram') !== -1) {
            return 'instagram'
        } else if (str.indexOf('twitter') !== -1) {
            return 'twitter'
        } else {
            return 'social'
        }
    }

    function socialConvert(str: string) {
        let icon = iconConvert(str)
        if (icon === 'google') {
            return faGoogle
        } else if (icon === 'facebok') {
            return faFacebook
        } else if (icon === 'instagram') {
            return faInstagram
        } else if (icon === 'twitter') {
            return faTwitter
        } else {
            return faRocket
        }
    }

    return (
        <div className={styles.root} style={themeStylesObj}>
            <div className={styles.wrapper}>
                <div className={cn(styles.block, styles.logoInfo)}>
                    {props.logoUrl && <Logo logoUrl={logo} />}
                    {props.socialData && (
                        <div className={styles.social}>
                            <style>{socialHover}</style>
                            {props.socialData.map((item, index) => (
                                <a
                                    href={item.linkUrl}
                                    key={index}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label={iconConvert(item.linkUrl)}
                                    className="socialLink"
                                >
                                    <FontAwesomeIcon icon={socialConvert(item.linkUrl)} />
                                </a>
                            ))}
                        </div>
                    )}
                    <h3 className={styles.phone} style={phoneColor}>
                        {props.phoneNumber}
                    </h3>
                </div>
                {props.pages && (
                    <div className={cn(styles.block, styles.navInfo)}>
                        <Nav pages={props.pages} modLayout="footer" borderNum={props.borderNum} themeStyles={props.themeStyles} />
                    </div>
                )}
                {props.addressData && (
                    <div className={cn(styles.block, styles.addInfo)}>
                        <div>
                            <p>{props.addressData.street}</p>
                            <p>{props.addressData.cityState}</p>
                            <p>{props.addressData.zip}</p>
                        </div>
                    </div>
                )}

                <div className={cn(styles.block, styles.siteInfo)}>
                    <p>{props.siteName}</p>
                    <p>&copy; All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
