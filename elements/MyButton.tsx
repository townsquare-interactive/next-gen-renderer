'use client'
/* import styles from './myArticle.module.scss' */
import styles from './mybutton.module.scss'
import { BtnProps } from '../types'
import cn from 'classnames'
import { ConditionalWrapper } from '../functions'
import { ReactChild, Fragment } from 'react'
import Link from 'next/link'

// importing fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = (props: BtnProps) => {
    const linkHoverStyles = `#id_${props.modId} .btn_link:hover .btn_1{color: ${props.themeStyles['promoColor']}; background-color: ${props.themeStyles['textColorAccent']}} #id_${props.modId} .btn_link:hover .btn_2{color: ${props.themeStyles['promoColor']}; border-color: ${props.themeStyles['promoColor']}}`

    return (
        <div
            className={cn(styles['btn-mod'], styles[`${props.type}`], styles[`${props.align}`], {
                [styles.well]: props.well == '1' && props.type.includes('article'),
            })}
        >
            {props.well && <style>{linkHoverStyles}</style>}
            <ConditionalWrapper
                condition={props.actionlbl2 && props.actionlbl ? true : false}
                trueOutput={(children: ReactChild) => <div className={cn(styles['btn-wrap'], styles['txt-wrap'])}>{children}</div>}
                falseOutput={(children: ReactChild) => <>{children}</>}
            >
                <>
                    {props.buttonList.map((bt, index) => (
                        <Fragment key={index}>
                            {bt.active && (
                                <ConditionalWrapper
                                    condition={props.actionlbl2 && props.actionlbl ? true : false}
                                    trueOutput={(children: ReactChild) => (
                                        <Link
                                            href={bt.link || ''}
                                            key={index}
                                            passHref={bt.linkType === 'ext'}
                                            target={bt.window == 1 ? '_blank' : '_self'}
                                            className={cn('btn_link', {
                                                [styles['btn-block']]: bt.btnSize?.includes('btn_block') || bt.btnSize?.includes('btn_blk'),
                                                [styles.btn_w]: props.well === '1' && props.type.includes('article'),
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
                                            [styles.btn_1]: bt.btnType === 'btn_1' || (!bt.btnType && index === 0),
                                            [styles.btn_2]: bt.btnType === 'btn_2' || (!bt.btnType && index === 1),
                                            [styles.btn_md]: (bt.btnSize?.includes('md') || !bt.btnSize) && (props.columns == 1 || props.columns == 2),
                                            [styles.btn_lg]: bt.btnSize?.includes('lg') && (props.columns == 1 || props.type === 'photo_grid'),
                                            [styles.btn_sm]: bt.btnSize?.includes('sm') || props.columns == 3 || props.columns == 4,
                                            [styles.btn_xs]: bt.btnSize?.includes('xs'),
                                            [styles['btn-block']]: bt.btnSize?.includes('btn_block') || bt.btnSize?.includes('btn_blk'),
                                            [styles.btn_w]: props.well === '1' && props.type.includes('article'),
                                        })}
                                    >
                                        {bt.icon && <FontAwesomeIcon icon={[bt.icon.iconPrefix, bt.icon.iconModel]} />}
                                        {` ${bt.label}`}
                                    </div>
                                </ConditionalWrapper>
                            )}
                        </Fragment>
                    ))}
                </>
            </ConditionalWrapper>
        </div>
    )
}
