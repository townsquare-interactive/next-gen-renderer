'use client'
import styles from './buttonwrap.module.scss'
import { SingleButtonProps } from '../types'
import cn from 'classnames'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pushEventToDataLayer } from 'functions'

export const Button = (props: SingleButtonProps) => {
    const { btn, well, type, index, isFeatureButton, pageModalVars } = props
    const isModalBtn = pageModalVars && btn.opensModal != -1 ? true : false

    const btnClassesList = cn(styles['btn'], 'btn', styles['transition'], `${btn.btnType}`, styles[`${btn.btnSize}`], styles[`${btn.btnStyle}`], btn.cName, {
        [styles['btn-block']]: btn.blockBtn,
        [styles.btn_promo]: btn.btnType === 'btn_promo',
        [styles.btn_override]: btn.btnType === 'btn_override',
        [styles.btn2_override]: btn.btnType === 'btn2_override',
        [styles.btn_w]: well === '1' && (type.includes('article') || type.includes('banner') || type.includes('card')),
        ['btn_w']: well === '1' && (type.includes('article') || type.includes('banner') || type.includes('card')),
        [styles['btn_cta']]: btn.btnType === 'btn_cta' || btn.btnType === 'btn_cta_landing',
        [styles['cta-landing']]: btn.btnType === 'btn_cta_landing',
        ['cta-landing']: btn.btnType === 'btn_cta_landing',
        ['cta-schedule']: btn.btnType === 'btn_cta_landing' && (btn.action === `schedule` || btn.action === 'ls-schedule'),
        ['cta-contact']: btn.btnType === 'btn_cta_landing' && btn.action != `schedule` && btn.action != 'ls-schedule',
        [styles['btn_banner']]: btn.btnType === 'btn_banner',
        ['btn_1']: btn.btnType?.includes('btn_1') || (!btn.btnType && index === 0),
        [styles.btn_1]: btn.btnType?.includes('btn_1') || (!btn.btnType && index === 0 && btn.btnType != 'btn_cta'),
        ['btn_2']: btn.btnType?.includes('btn_2') || (!btn.btnType && index === 1),
        [styles.btn_2]: btn.btnType?.includes('btn_2') || (!btn.btnType && index === 1),
        ['btn_p2']: btn.btnType?.includes('btn_p2'),
        ['btn_p3']: btn.btnType?.includes('btn_p3'),
        ['btn_p4']: btn.btnType?.includes('btn_p4'),
        ['cta']: btn.btnType === 'btn_cta' || btn.btnType === 'btn_banner' || btn.btnType === 'btn_cta_landing',
        ['accent-txt']: btn.btnType === 'btn_banner' || btn.btnType === 'btn_cta_landing',
        [styles['land-colors']]: btn.btnType?.includes('btn_land-colors'),
        ['livesite-contact']: btn.action === 'ls-contact',
        ['livesite-schedule']: btn.action === 'ls-schedule',
    })

    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (btn.dataLayerEvent) {
            pushEventToDataLayer(btn.dataLayerEvent) // Push to dataLayer 'promotion_click'
        }
        if (btn.action === 'schedule') {
            bookScheduleEngine()
        } else if (isModalBtn && pageModalVars && btn.opensModal != -1) {
            pageModalVars[btn.opensModal].toggleModal()
        }
    }

    const bookScheduleEngine = () => {
        // Call the function provided by Schedule Engine when the button is clicked
        if (window.ScheduleEngine && window.ScheduleEngine.show && btn.action === `schedule`) {
            window.ScheduleEngine.show()

            const iframeContainer = document.getElementById('se-widget-iframe-container')
            if (iframeContainer) {
                iframeContainer.style.visibility = 'visible'
                iframeContainer.style.inset = '0'
            }
        }
    }

    return (
        <>
            {btn.action === `schedule` ? (
                <button onClick={handleClick} className={btnClassesList}>
                    {btn.icon && <FontAwesomeIcon icon={[btn.icon.iconPrefix, btn.icon.iconModel]} />}
                    {` ${btn.label}`} {isFeatureButton && !type.includes('article') && '>'}
                </button>
            ) : isModalBtn && pageModalVars && btn.opensModal != -1 ? (
                <button onClick={pageModalVars[btn.opensModal].toggleModal} className={btnClassesList}>
                    {btn.icon && <FontAwesomeIcon icon={[btn.icon.iconPrefix, btn.icon.iconModel]} />}
                    {` ${btn.label}`} {isFeatureButton && !type.includes('article') && '>'}
                </button>
            ) : (
                <Link
                    href={btn.link || ''}
                    passHref={btn.linkType === 'ext'}
                    target={btn.window == 1 ? '_blank' : '_self'}
                    className={btnClassesList}
                    onClick={handleClick}
                >
                    {btn.icon && <FontAwesomeIcon icon={[btn.icon.iconPrefix, btn.icon.iconModel]} />}
                    {/* {btn.googleIcon && Parser(btn.googleIcon)} */}
                    {` ${btn.label}`} {isFeatureButton && !type.includes('article') && '>'}
                </Link>
            )}
        </>
    )
}
