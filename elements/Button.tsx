'use client'
import styles from './button.module.scss'
import { BtnProps } from '../types'
import cn from 'classnames'
import { ConditionalWrapper } from '../functions'
import { ReactChild, Fragment } from 'react'
import Link from 'next/link'

// importing fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = (props: BtnProps) => {
    const { actionlbl, themeStyles, well, actionlbl2, type, buttonList, modId, columns, align, promoColor, itemCount } = props

    const linkHoverStyles = `#id_${modId} .btn_link:hover .btn_1{color: ${themeStyles['promoColor']}; background-color: ${themeStyles['textColorAccent']}} #id_${modId} .btn_link:hover .btn_2{color: ${themeStyles['promoColor']}; border-color: ${themeStyles['promoColor']}} #id_${modId}}`

    const promoButtonStyles = `#id_${modId} .item_${itemCount} .btn_promo {color: ${promoColor}; background-color: ${themeStyles['textColorAccent']}} #id_${modId} .item_${itemCount} .btn_promo:hover{color: ${themeStyles['textColorAccent']}; background-color: ${promoColor}}`

    return (
        <div
            className={cn(styles['btn-mod'], styles[`${type}`], styles[`${align}`], {
                [styles.well]: well == '1' && type.includes('article'),
            })}
        >
            {well && <style>{linkHoverStyles}</style>}
            <style>{promoButtonStyles}</style>

            <div
                className={cn({
                    [styles['btn-wrap']]: actionlbl2 && actionlbl,
                    [styles['one-btn-w']]: well === '1' && !(actionlbl2 && actionlbl),
                })}
            >
                {buttonList.map((bt, index) => (
                    <Fragment key={index}>
                        {bt.active && (
                            <ConditionalWrapper
                                condition={actionlbl2 && actionlbl ? true : false}
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
                                        ['btn_1']: bt.btnType === 'btn_1' || (!bt.btnType && index === 0),
                                        ['btn_2']: bt.btnType === 'btn_2' || (!bt.btnType && index === 1),
                                        // [styles.btn_alt]: bt.btnType === 'btn_alt',
                                        [styles.btn_promo]: bt.btnType === 'btn_promo',
                                        [styles.btn_1]: bt.btnType === 'btn_1' || (!bt.btnType && index === 0),
                                        [styles.btn_2]: bt.btnType === 'btn_2' || (!bt.btnType && index === 1),
                                        [styles.btn_md]: (bt.btnSize?.includes('md') || !bt.btnSize) && (columns == 1 || columns == 2),
                                        [styles.btn_lg]: bt.btnSize?.includes('lg') && (columns == 1 || type === 'photo_grid'),
                                        [styles.btn_sm]: bt.btnSize?.includes('sm') || columns == 3 || columns == 4,
                                        [styles.btn_xs]: bt.btnSize?.includes('xs'),
                                        [styles['btn-block']]: bt.btnSize?.includes('btn_block') || bt.btnSize?.includes('btn_blk'),
                                        [styles.btn_w]: well === '1' && (type.includes('article') || type.includes('banner')),
                                    })}
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
