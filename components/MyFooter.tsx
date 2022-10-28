import styles from './myfooter.module.scss'
import cn from 'classnames'
import Nav from './Nav'
import Logo from './Logo'
import { FooterProps, MyHeaderProps } from './types'
import { domainImage } from '../functions'
import SocialLinks from 'elements/SocialLinks'
import MyText from './MyText'
import NavToggle from 'elements/NavToggle'

const MyFooter = (props: MyHeaderProps) => {
    const { CMSLayout, themeStyles, navSwitch } = props

    return (
        <footer className={styles.root} style={{ backgroundColor: themeStyles.footerBackground, color: themeStyles.footerText }}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    {CMSLayout.composites?.footer?.modules.items.map((item: any, index: number) => (
                        <div key={index} className={styles.item}>
                            {item.component === 'text' && <MyText text={item.text} title={item.title} />}
                            {item.component === 'social_media' && <SocialLinks CMSLayout={CMSLayout} themeStyles={themeStyles} modType="widget" />}
                        </div>
                    ))}
                </div>
                <div className={styles.brand}>
                    {CMSLayout.footerLogos?.image_src && (
                        <div className={cn(styles['logo-block'], styles['desktop-logo-block'])}>
                            <Logo logoUrl={domainImage(CMSLayout.footerLogos.image_src, true)} link={CMSLayout.footerLogos?.image_link} />
                        </div>
                    )}
                </div>
                <div className={styles['info-block']}>
                    <address className={styles.copy}>
                        <span className={styles.copyright}>
                            Copyright &#169; {new Date().getFullYear()} {CMSLayout.siteName}, all rights reserved.
                        </span>{' '}
                        {CMSLayout.contact.address?.street && <span className={styles['street-address']}>{CMSLayout.contact.address.street}, </span>}
                        <span className={styles['city-state-zip-address']}>
                            {CMSLayout.contact.address?.city && `${CMSLayout.contact.address.city} ,`}{' '}
                            {CMSLayout.contact.address?.state && `${CMSLayout.contact.address.state} ,`}{' '}
                            {CMSLayout.contact.address?.zip && `${CMSLayout.contact.address.zip} ,`}
                        </span>{' '}
                        {CMSLayout.contact.address?.phone && <span className={styles.phone}> {CMSLayout.contact.phone[0].number}</span>}
                    </address>
                </div>
                <div className={styles['bottom']}>
                    <div className={styles['social-block']}>
                        <SocialLinks CMSLayout={CMSLayout} themeStyles={themeStyles} modType="foot-header" />
                    </div>
                    <div className={styles['nav-block']}>
                        <NavToggle navSwitch={navSwitch} themeStyles={themeStyles} modType="footer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MyFooter
