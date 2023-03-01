'use client'
import styles from './buttonwrap.module.scss'
import { BtnProps } from '../types'
import cn from 'classnames'
import { Fragment } from 'react'
import { Button } from './Button'

export const ButtonWrap = (props: BtnProps) => {
    const { actionlbl, themeStyles, well, actionlbl2, type, buttonList, modId, align, promoColor, itemCount, modColor1, twoButtons } = props

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
            {well && type != 'photo_grid' && type != 'parallax' && <style>{linkHoverStyles}</style>}
            {type != 'cta' && <style>{promoButtonStyles}</style>}

            <div
                className={cn(styles.wrapper, {
                    [styles['btn-wrap']]: (actionlbl2 && actionlbl) || type === 'cta' || type === 'cta_banner',
                    [styles['one-btn-w']]: well === '1' && !(actionlbl2 && actionlbl),
                })}
            >
                {buttonList.map((bt, index) => (
                    <Fragment key={index}>{bt.active && <Button btn={bt} well={well} index={index} type={type} />}</Fragment>
                ))}
            </div>
        </div>
    )
}
