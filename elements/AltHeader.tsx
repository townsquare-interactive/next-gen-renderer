import { AltHeaderProps } from '../types'
import cn from 'classnames'
import styles from './altheader.module.scss'
import SocialLinks from './SocialLinks'
import Nav from 'components/Nav'

const AltHeader = (props: AltHeaderProps) => {
    const { navSwitch, navCheck, themeStyles, CMSLayout } = props

    return (
        <div
            className={cn(styles['root'], {
                [styles.hidden]: !navCheck,
                [styles.visible]: navCheck,
            })}
            style={{ background: themeStyles.headerBackground }}
        >
            <div className={styles.wrapper}>
                <button
                    className={styles['nav-toggle']}
                    onClick={navSwitch}
                    aria-label="close-mobile-nav"
                    style={{ color: themeStyles.textColorAccent, backgroundColor: themeStyles.mainColor }}
                ></button>

                <div className={styles['mobile-body']}>
                    <div className={styles.social}>
                        <SocialLinks CMSLayout={CMSLayout} themeStyles={themeStyles} modType="mob-header" />
                    </div>

                    <Nav navType={'mobile'} themeStyles={themeStyles} cmsNav={CMSLayout.cmsNav} />
                </div>
            </div>
        </div>
    )
}

export default AltHeader
