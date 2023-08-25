'use client'
import styles from './buttonwrap.module.scss'
import { SingleButtonProps } from '../types'
import cn from 'classnames'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = (props: SingleButtonProps) => {
    const { btn, well, type, index, isFeatureButton } = props
    return (
        <Link
            href={btn.link || ''}
            passHref={btn.linkType === 'ext'}
            target={btn.window == 1 ? '_blank' : '_self'}
            className={cn(styles['btn'], 'btn', styles['transition'], `${btn.btnType}`, styles[`${btn.btnSize}`], {
                [styles['btn-block']]: btn.blockBtn,
                [styles.btn_promo]: btn.btnType === 'btn_promo',
                [styles.btn_override]: btn.btnType === 'btn_override',
                [styles.btn2_override]: btn.btnType === 'btn2_override',
                [styles.btn_w]: well === '1' && (type.includes('article') || type.includes('banner') || type.includes('card')),
                ['btn_w']: well === '1' && (type.includes('article') || type.includes('banner') || type.includes('card')),
                [styles['btn_cta']]: btn.btnType === 'btn_cta',
                [styles['btn_banner']]: btn.btnType === 'btn_banner',
                ['btn_1']: btn.btnType?.includes('btn_1') || (!btn.btnType && index === 0),
                [styles.btn_1]: btn.btnType?.includes('btn_1') || (!btn.btnType && index === 0 && btn.btnType != 'btn_cta'),
                ['btn_2']: btn.btnType?.includes('btn_2') || (!btn.btnType && index === 1),
                [styles.btn_2]: btn.btnType?.includes('btn_2') || (!btn.btnType && index === 1),
                ['btn_p2']: btn.btnType?.includes('btn_p2'),
                ['btn_p3']: btn.btnType?.includes('btn_p3'),
                ['btn_p4']: btn.btnType?.includes('btn_p4'),
                ['cta']: btn.btnType === 'btn_cta' || btn.btnType === 'btn_banner',
                ['accent-txt']: btn.btnType === 'btn_cta' || btn.btnType === 'btn_banner',
            })}
        >
            {btn.icon && <FontAwesomeIcon icon={[btn.icon.iconPrefix, btn.icon.iconModel]} />}
            {` ${btn.label}`} {isFeatureButton && !type.includes('article') && '>'}
        </Link>
    )
}
