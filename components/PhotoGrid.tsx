'use client'
import styles from './photogrid.module.scss'
import { PhotoGridProps, PhotoItemProps } from '../types'
import { Button } from '../elements/Button'
import cn from 'classnames'
import { MyImage } from '../elements/Image'
import { ConditionalWrapper } from 'functions'
import Link from 'next/link'
import { ReactChild } from 'react'
import ModuleTitle from 'elements/ModuleTitle'
import { HeadlineBlock } from 'elements/HeadlineBlock'

export const PhotoGrid = (props: PhotoGridProps) => {
    const { columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl } = props

    return (
        <div
            className={cn(styles['root'], styles['tsflex'], styles['root-container'], styles[`col_${columns}`], styles['grid'], {
                [styles.well]: well == '1',
                [styles.not_well]: !well,
                [styles[`cst_${props.class}`]]: props.class,
            })}
            id={`id_${modId}`}
        >
            {title && <ModuleTitle title={title} />}
            <div className={styles.wrapper}>
                {items.map((item, index) =>
                    item.disabled != 'disabled' ? (
                        <PhotoItem
                            item={item}
                            well={well}
                            modId={modId}
                            themeStyles={themeStyles}
                            key={index}
                            imgsize={imgsize}
                            type={type}
                            columns={columns}
                            itemIndex={index}
                            cmsUrl={cmsUrl}
                        />
                    ) : (
                        <></>
                    )
                )}
            </div>
        </div>
    )
}

const PhotoItem = (props: PhotoItemProps) => {
    const { item, itemIndex, well, themeStyles, type, cmsUrl, imgsize, columns, modId } = props
    const linkAndBtn =
        (item.actionlbl && item.pagelink) || (item.actionlbl && item.weblink) || (item.actionlbl2 && item.pagelink2) || (item.actionlbl2 && item.weblink2)

    return (
        <article
            className={cn(
                styles['item'],
                styles[`${item.align}`],
                {
                    [styles.hero]: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yDsc]: item.desc,
                    [styles.nImg]: !item.image,
                    [styles.yImg]: item.image,
                    // [styles.yHds]: item.headline || item.subheader,
                    // [styles.nHds]: !item.headline || !item.subheader,
                    //[styles.mod_left]: item.align === 'left' && (type === 'article_3' || type === 'article'),
                    // [styles.mod_right]: item.align === 'right' && (type === 'article_3' || type === 'article'),
                    // [styles.mod_center]: item.align === 'center' && (type === 'article_3' || type === 'article'),
                    // [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !twoButtons,
                    // [styles.yLks]: twoButtons,
                },
                `item_${itemIndex + 1}`,
                styles[`item_${itemIndex + 1}`]
            )}
            lang="en"
            //style={well == '1' ? borderBackground : noBackground}
        >
            <ConditionalWrapper
                condition={item.isWrapLink ? true : false}
                trueOutput={(children: ReactChild) => (
                    <Link
                        href={item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''}
                        passHref={item.weblink || item.weblink2 ? true : false}
                        className={cn('btn_link', styles['link-wrap'])}
                        target={item.newwindow == 1 ? '_blank' : item.newwindow2 == 1 ? '_blank' : '_self'}
                        aria-label={item.headline || 'block-link'}
                    >
                        <div className={cn(styles['item-wrap'], 'btn_link')} aria-label={item.headline || 'item-wrap'}>
                            {children}
                        </div>
                    </Link>
                )}
                falseOutput={(children: ReactChild) => <div className={styles['item-wrap']}>{children}</div>}
            >
                <>
                    <MyImage item={item} well={well} imgsize={imgsize} cmsUrl={cmsUrl} modType="photo_grid" />
                    {item.hasGridCaption && (
                        <figcaption
                            className={cn(styles.caption)}
                            style={item.image ? { background: themeStyles.captionBackground } : { background: themeStyles.promoColor }}
                        >
                            <div>
                                {(item.headline || item.subheader) && <HeadlineBlock item={item} well={well} columns={columns} modType="photo_grid" />}
                                {linkAndBtn && (
                                    <Button
                                        pagelink={item.pagelink}
                                        actionlbl={item.actionlbl}
                                        newwindow={item.newwindow}
                                        newwindow2={item.newwindow2}
                                        actionlbl2={item.actionlbl2}
                                        pagelink2={item.pagelink2}
                                        weblink2={item.weblink2}
                                        weblink={item.weblink}
                                        icon={item.icon}
                                        icon2={item.icon2}
                                        btnType={item.btnType}
                                        btnType2={item.btnType2}
                                        themeStyles={themeStyles}
                                        btnSize={item.btnSize}
                                        btnSize2={item.btnSize2}
                                        well={well}
                                        modId={modId}
                                        type={type}
                                        align={item.align}
                                        columns={columns}
                                        buttonList={item.buttonList}
                                    />
                                )}
                            </div>
                        </figcaption>
                    )}
                </>
            </ConditionalWrapper>
        </article>
    )
}