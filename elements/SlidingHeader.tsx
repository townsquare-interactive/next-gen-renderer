import { SlidingHeaderProps } from '../types'
import cn from 'classnames'
import styles from './slidingheader.module.scss'
import SocialLinks from './SocialLinks'
import Nav from './Nav'
import WindowCloser from './WindowCloser'
import { ButtonWrap } from './ButtonWrap'

const SlidingHeader = (props: SlidingHeaderProps) => {
    const { navSwitch, navCheck, themeStyles, siteData } = props

    return (
        <div
            className={cn(styles.root, {
                [styles.visible]: navCheck,
                [styles.hidden]: !navCheck,
            })}
        >
            <div className={cn(styles['wrapper'], 'header-background')}>
                <WindowCloser closerFunction={navSwitch} type="sliding" />

                <div className={styles['access']}>
                    <div className={styles.social}>
                        <SocialLinks siteData={siteData} modType="slide-header" />
                    </div>

                    {!siteData.headerOptions?.hideNav && <Nav navType={'mobile-nav'} cmsNav={siteData.cmsNav} navSwitch={navSwitch} />}

                    {siteData.siteType === 'landing' && siteData.headerOptions?.ctaBtns && (
                        <div className={styles['cta-block']}>
                            <ButtonWrap buttonList={siteData.headerOptions.ctaBtns} type="cta" />
                        </div>
                    )}

                    {siteData.headerOptions?.mobileHeaderBtns && siteData.siteType === 'landing' && (
                        <div className={cn(styles['cta-block'], styles['mobile-cta-block'])}>
                            <ButtonWrap buttonList={siteData.headerOptions?.mobileHeaderBtns} type="cta" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SlidingHeader
