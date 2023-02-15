'use client'
import styles from './button.module.scss'
import { BtnProps } from '../types'
import cn from 'classnames'
import { Fragment } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = (props: BtnProps) => {
    const { actionlbl, themeStyles, well, actionlbl2, type, buttonList, modId, columns, align, promoColor, itemCount, modColor1, twoButtons, isWrapLink } =
        props

    const linkHoverStyles = themeStyles
        ? `#id_${modId} .is-wrap-link:hover .btn_1{color: ${themeStyles['promoColor']}; background-color: ${themeStyles['textColorAccent']}} `
        : ''

    const promoButtonStyles = themeStyles
        ? `#id_${modId} .item_${itemCount} .btn_promo {color: ${promoColor}; background-color: ${themeStyles['textColorAccent']}} #id_${modId} .item_${itemCount} .btn_promo:hover{color: ${themeStyles['textColorAccent']}; background-color: ${promoColor}} .btn_override {color: ${modColor1}; background-color: ${themeStyles['textColorAccent']}} #id_${modId} .item_${itemCount} .btn_override:hover{color: ${themeStyles['textColorAccent']}; background-color: ${modColor1}}`
        : ''

    return (
        <div
            className={cn(styles['btn-mod'], styles[`${type}`], styles[`${align}`], 'txt-font', {
                [styles.well]: well == '1' && type.includes('article'),
                [styles['article-all']]: type.includes('article'),
                [styles['two-btns']]: twoButtons,
            })}
        >
            {well && type != 'photo_grid' && <style>{linkHoverStyles}</style>}
            {type != 'cta' && <style>{promoButtonStyles}</style>}

            <div
                className={cn({
                    [styles['btn-wrap']]: (actionlbl2 && actionlbl) || type === 'cta' || type === 'cta_banner',
                    [styles['one-btn-w']]: well === '1' && !(actionlbl2 && actionlbl),
                })}
            >
                {buttonList.map((bt, index) => (
                    <Fragment key={index}>
                        {bt.active && (
                            <Link
                                href={bt.link || ''}
                                key={index}
                                passHref={bt.linkType === 'ext'}
                                target={bt.window == 1 ? '_blank' : '_self'}
                                className={cn('btn_link', {
                                    [styles['btn-block-wrap']]: bt.btnSize?.includes('btn_block') || bt.btnSize?.includes('btn_blk'),
                                })}
                            >
                                <div
                                    className={cn(styles['btn'], styles['transition'], `${bt.btnType}`, styles[`${bt.btnSize}`], {
                                        [styles.btn_promo]: bt.btnType === 'btn_promo',
                                        [styles.btn_override]: bt.btnType === 'btn_override',
                                        [styles['btn-block']]: bt.btnSize?.includes('btn_block') || bt.btnSize?.includes('btn_blk'),
                                        [styles.btn_w]: well === '1' && (type.includes('article') || type.includes('banner')),
                                        [styles['btn_cta']]: bt.btnType === 'btn_cta',
                                        [styles['btn_banner']]: bt.btnType === 'btn_banner',
                                        ['btn_1']: bt.btnType?.includes('btn_1') || (!bt.btnType && index === 0),
                                        [styles.btn_1]: bt.btnType?.includes('btn_1') || (!bt.btnType && index === 0 && bt.btnType != 'btn_cta'),
                                        ['btn_2']: bt.btnType?.includes('btn_2') || (!bt.btnType && index === 1),
                                        [styles.btn_2]: bt.btnType?.includes('btn_2') || (!bt.btnType && index === 1),
                                        ['btn_p2']: bt.btnType?.includes('btn_p2'),
                                        ['btn_p3']: bt.btnType?.includes('btn_p3'),
                                        ['btn_p4']: bt.btnType?.includes('btn_p4'),
                                        ['cta']: bt.btnType === 'btn_cta' || bt.btnType === 'btn_banner',
                                        ['accent-txt']: bt.btnType === 'btn_cta' || bt.btnType === 'btn_banner',
                                    })}
                                    style={bt.bgColor ? { backgroundColor: bt.bgColor } : {}}
                                >
                                    {bt.icon && <FontAwesomeIcon icon={[bt.icon.iconPrefix, bt.icon.iconModel]} />}
                                    {` ${bt.label}`}
                                </div>
                            </Link>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
