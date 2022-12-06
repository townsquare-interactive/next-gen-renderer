import { SlidingHeaderProps } from '../types'
import cn from 'classnames'
import styles from './slidingheader.module.scss'
import SocialLinks from './SocialLinks'
import Nav from './Nav'

const SlidingHeader = (props: SlidingHeaderProps) => {
    const { navSwitch, navCheck, themeStyles, siteData } = props

    return (
        <div
            className={cn(styles.root, {
                [styles.visible]: navCheck,
                [styles.hidden]: !navCheck,
            })}
        >
            <div className={styles['wrapper']} style={{ background: themeStyles.headerBackground }}>
                <button
                    className={styles['nav-toggle']}
                    onClick={navSwitch}
                    aria-label="close-mobile-nav"
                    style={{ color: themeStyles.textColorAccent, backgroundColor: themeStyles.promoColor }}
                ></button>

                <div className={styles['access']}>
                    <div className={styles.social}>
                        <SocialLinks siteData={siteData} modType="mob-header" />
                    </div>

                    <Nav navType={'mobile-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />
                </div>
            </div>
        </div>
    )
}

export default SlidingHeader
