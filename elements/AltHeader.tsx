import { AltHeaderProps } from '../types'
import cn from 'classnames'
import styles from './altheader.module.scss'
import SocialLinks from './SocialLinks'
import Nav from '../elements/Nav'

const AltHeader = (props: AltHeaderProps) => {
    const { navSwitch, navCheck, themeStyles, CMSLayout } = props

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
                        <SocialLinks CMSLayout={CMSLayout} modType="mob-header" />
                    </div>

                    <Nav navType={'mobile-nav'} cmsNav={CMSLayout.cmsNav} />
                </div>
            </div>
        </div>
    )
}

export default AltHeader
