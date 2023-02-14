'use client'
import styles from './button.module.scss'
import { BtnProps } from '../types'
import cn from 'classnames'
import { ConditionalWrapper } from '../functions'
import { ReactChild, Fragment } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = (props: BtnProps) => {
    const { actionlbl, themeStyles, well, actionlbl2, type, buttonList, modId, columns, align, promoColor, itemCount, modColor1, twoButtons, isWrapLink } =
        props

    const linkHoverStyles = themeStyles
        ? `#id_${modId} .btn_link:hover .btn_1{color: ${themeStyles['promoColor']}; background-color: ${themeStyles['textColorAccent']}} `
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
            {well && type.includes('article') && <style>{linkHoverStyles}</style>}
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
                            <ConditionalWrapper
                                condition={!isWrapLink}
                                trueOutput={(children: ReactChild) => (
                                    <Link
                                        href={bt.link || ''}
                                        key={index}
                                        passHref={bt.linkType === 'ext'}
                                        target={bt.window == 1 ? '_blank' : '_self'}
                                        className={cn('btn_link', {
                                            [styles['btn-block']]: bt.btnSize?.includes('btn_block') || bt.btnSize?.includes('btn_blk'),
                                            [styles.btn_w]: well === '1' && type.includes('article'),
                                        })}
                                    >
                                        {children}
                                    </Link>
                                )}
                                falseOutput={(children: ReactChild) => <>{children}</>}
                            >
                                <div
                                    className={cn(styles['btn'], styles['transition'], `${bt.btnType}`, {
                                        ['btn_1']: bt.btnType?.includes('btn_1') || (!bt.btnType && index === 0),
                                        [styles.btn_1]: bt.btnType?.includes('btn_1') || (!bt.btnType && index === 0 && bt.btnType != 'btn_cta'),
                                        ['btn_2']: bt.btnType?.includes('btn_2') || (!bt.btnType && index === 1),
                                        [styles.btn_2]: bt.btnType?.includes('btn_2') || (!bt.btnType && index === 1),

                                        [styles.btn_promo]: bt.btnType === 'btn_promo',
                                        [styles.btn_override]: bt.btnType === 'btn_override',
                                        [styles.btn_md]: (bt.btnSize?.includes('md') || !bt.btnSize) && (columns == 1 || columns == 2),
                                        [styles.btn_lg]: bt.btnSize?.includes('lg') && (columns == 1 || type === 'photo_grid' || type === 'cta_banner'),
                                        [styles.btn_xl]: bt.btnSize?.includes('xl') && (columns == 1 || type === 'photo_grid' || type === 'cta_banner'),
                                        [styles.btn_sm]: bt.btnSize?.includes('sm') || columns == 3 || columns == 4 || bt.btnType === 'btn_cta',
                                        [styles.btn_xs]: bt.btnSize?.includes('xs'),
                                        [styles['btn-block']]: bt.btnSize?.includes('btn_block') || bt.btnSize?.includes('btn_blk'),
                                        [styles.btn_w]: well === '1' && (type.includes('article') || type.includes('banner')),
                                        /* [styles['has-link']]: bt.link, */
                                        [styles['btn_cta']]: bt.btnType === 'btn_cta',
                                        [styles['btn_banner']]: bt.btnType === 'btn_banner',
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
                            </ConditionalWrapper>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
