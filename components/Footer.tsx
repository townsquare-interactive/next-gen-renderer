import styles from './footer.module.scss'
import Link from 'next/dist/client/link'
import Script from 'next/script'
import cn from 'classnames'
import Image from 'next/image'
import Nav from './Nav'
import Logo from './Logo'
import { FooterProps, HomeProps, NavProps, PagesProps } from './types'

//const Footer = ({ socialData, addressData, siteName, phoneNumber, navData }: any) => {
const Footer = (props: FooterProps) => {
    //const Footer = (props: FooterProps) => {
    /* const { socialData, addressData, siteName, phoneNumber, navData } = props */

    // useContext

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={cn(styles.block, styles.logoInfo)}>
                    <Logo />
                    <div className={styles.social}>
                        {props.footerData.socialData.map((item, index) => (
                            <a href={item.linkUrl} key={index} rel="noopener noreferrer" target="_blank">
                                <i className={item.fontAwesomeName}></i>
                            </a>
                        ))}
                    </div>
                    <div className={styles.phone}>{props.footerData.phoneNumber}</div>
                </div>
                <div className={cn(styles.block, styles.navInfo)}>
                    {/* <Nav {...navData as NavData} /> */}
                    <Nav pages={props.navData.pages} modLayout="footer" />
                    {/* <Nav /> */}
                </div>
                <div className={cn(styles.block, styles.addInfo)}>
                    <div>
                        <p>{props.footerData.addressData.cityState}</p>
                        <p>{props.footerData.addressData.street}</p>
                        <p>{props.footerData.addressData.zip}</p>
                    </div>
                </div>
                <div className={cn(styles.block, styles.siteInfo)}>
                    <p>{props.footerData.siteName}</p>
                    <p>&copy; All rights reserved</p>
                </div>
            </div>
            {<Script src="https://kit.fontawesome.com/711388ec06.js" strategy="lazyOnload" onLoad={() => console.log(`Fontawesome Loaded Correctly`)} />}
        </div>
    )
}

export default Footer
