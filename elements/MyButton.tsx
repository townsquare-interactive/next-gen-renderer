'use client'
/* import styles from './myArticle.module.scss' */
import styles from './mybutton.module.scss'
import { BtnProps } from '../types'
import cn from 'classnames'
import { ConditionalWrapper, capitalize, btnIconConver } from '../functions'
import { ReactChild, Fragment } from 'react'
import Link from 'next/link'

// importing fontAwesome icons
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = (props: BtnProps) => {
    const linkHoverStyles = `#id_${props.modId} .btn_link:hover .btn_1{color: ${props.themeStyles['promoColor']}; background-color: ${props.themeStyles['textColorAccent']}} #id_${props.modId} .btn_link:hover .btn_2{color: ${props.themeStyles['promoColor']}; border-color: ${props.themeStyles['promoColor']}}`

    let buttons = [
        {
            name: 'btn1',
            link: props.pagelink || props.weblink,
            window: props.newwindow,
            icon: btnIconConver(props.icon || ''),
            label: props.actionlbl,
            active: props.actionlbl && (props.pagelink || props.weblink),
            btnType: props.btnType,
            btnSize: props.btnSize,
            linkType: props.pagelink ? 'local' : 'ext',
        },
        {
            name: 'btn2',
            link: props.pagelink2 || props.weblink2,
            window: props.newwindow2,
            icon: btnIconConver(props.icon2 || ''),
            label: props.actionlbl2,
            active: props.actionlbl2 && (props.pagelink2 || props.weblink2),
            btnType: props.btnType2,
            btnSize: props.btnSize2,
            linkType: props.pagelink2 ? 'local' : 'ext',
        },
    ]

    return (
        <div
            className={cn(styles['btn-mod'], {
                [styles.a1]: props.type == 'article_1',
                [styles.a2]: props.type == 'article_2',
                [styles.a3]: props.type == 'article_3',
                [styles.beacon]: props.type == 'article',
                [styles.right]: props.align == 'right',
                [styles.left]: props.align == 'left',
                [styles.center]: props.align == 'center',
                [styles.well]: props.well == '1',
            })}
        >
            {props.well && <style>{linkHoverStyles}</style>}
            <ConditionalWrapper
                condition={props.actionlbl2 && props.actionlbl ? true : false}
                trueOutput={(children: ReactChild) => <div className={cn(styles['btn-wrap'], styles['txt-wrap'])}>{children}</div>}
                falseOutput={(children: ReactChild) => <>{children}</>}
            >
                <>
                    {buttons.map((bt, index) => (
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
                                                [styles.btn_w]: props.well === '1',
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
                                            [styles.btn_md]: (bt.btnSize?.includes('md') || !bt.btnSize) && props.columns == 1,
                                            [styles.btn_lg]: bt.btnSize?.includes('lg') && props.columns == 1,
                                            [styles.btn_sm]: bt.btnSize?.includes('sm') || props.columns != '1',
                                            [styles.btn_xs]: bt.btnSize?.includes('xs'),
                                            [styles['btn-block']]: bt.btnSize?.includes('btn_block') || bt.btnSize?.includes('btn_blk'),
                                            [styles.btn_w]: props.well === '1',
                                        })}
                                    >
                                        {bt.icon && <FontAwesomeIcon icon={bt.icon || faRocket} />} {bt.label}
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