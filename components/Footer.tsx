import styles from './footer.module.scss'
import Link from 'next/dist/client/link'
import Script from 'next/script'
import cn from 'classnames'
import Image from 'next/image'
import Nav from './Nav'
import Logo from './Logo'
import { FooterProps, NavProps, NavData } from './types'

const Footer = ({ socialData, addressData, siteName, phoneNumber, navData }: FooterProps) => {
    console.log('footer nav data', navData)
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={cn(styles.block, styles.logoInfo)}>
                    <Logo />
                    <div className={styles.social}>
                        {socialData.map((item, index) => (
                            <a href={item.linkUrl} key={index} rel="noopener noreferrer" target="_blank">
                                <i className={item.fontAwesomeName}></i>
                            </a>
                        ))}
                    </div>
                    <div className={styles.phone}>{phoneNumber}</div>
                    <div className={styles.siteInfo}>
                        <p>{siteName}</p>
                        <p>&copy; All rights reserved</p>
                    </div>
                </div>
                <div className={cn(styles.block, styles.navInfo)}>
                    {/* <Nav {...navData as NavData} /> */}
                    {/*                     <Nav navData={navData} /> */}
                    <Nav />
                </div>
                <div className={cn(styles.block, styles.addInfo)}>
                    <p>{addressData.cityState}</p>
                    <p>{addressData.street}</p>
                    <p>{addressData.zip}</p>
                </div>
            </div>
            {<Script src="https://kit.fontawesome.com/711388ec06.js" strategy="lazyOnload" onLoad={() => console.log(`Fontawesome Loaded Correctly`)} />}
        </div>
    )
}

export default Footer
