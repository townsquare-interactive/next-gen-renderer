'use client'
import styles from './photogrid.module.scss'
import { ArticleProps, PhotoItemProps } from '../types'
import { Button } from '../elements/MyButton'
import Parser from 'html-react-parser'
import cn from 'classnames'
import { MyImage } from '../elements/MyImage'
import { ConditionalWrapper } from 'functions'
import Link from 'next/link'
import { ReactChild } from 'react'
import ModuleTitle from 'elements/ModuleTitle'

export const PhotoGrid = (props: ArticleProps) => {
    const { width = '1060', columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl, disabled } = props

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
                {items.map((item, index) => (
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
                        items={items}
                    />
                ))}
            </div>
        </div>
    )
}

const PhotoItem = (props: PhotoItemProps) => {
    const { item, itemIndex, well, themeStyles, type, cmsUrl, imgsize, columns, modId, items } = props
    const linkAndBtn =
        (item.actionlbl && item.pagelink) || (item.actionlbl && item.weblink) || (item.actionlbl2 && item.pagelink2) || (item.actionlbl2 && item.weblink2)

    function isCap() {
        if (item.pagelink || item.pagelink2 || item.weblink || item.weblink2 || item.headline) {
            return true
        } else {
            return false
        }
    }

    /*     const noConstraintsCol3 = items[itemIndex - 1]?.isFeatured === 'active' || items[itemIndex - 1]?.isFeatured === 'active' */

    function isButton() {
        if (item.actionlbl || item.actionlbl2) {
            return true
        } else {
            return false
        }
    }

    function isLink() {
        if (item.pagelink || item.pagelink2 || item.weblink || item.weblink2) {
            return true
        } else {
            return false
        }
    }

    const oneButton =
        (item.actionlbl && !item.actionlbl2 && (item.pagelink || item.weblink)) || (!item.actionlbl && item.actionlbl2 && (item.pagelink2 || item.weblink2))
    /* const twoButtons = item.actionlbl && item.actionlbl2 && (item.pagelink || item.weblink) && (item.pagelink2 || item.weblink2) */
    const linkNoBtn = isButton() === false && isLink() === true
    const wrapLink = (oneButton || linkNoBtn) && type != 'article'

    return (
        <article
            className={cn(
                styles['item'],
                styles[`${item.align}`],
                {
                    [styles.hero]: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yDsc]: item.desc,
                    [styles.nDsc]: !item.desc,
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
                condition={wrapLink ? true : false}
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
                    {item.image && <MyImage item={item} well={well} imgsize={imgsize} cmsUrl={cmsUrl} modType="photo_grid" />}
                    {isCap() && (
                        <figcaption className={cn(styles.caption)} style={{ background: themeStyles.captionBackground }}>
                            <div>
                                {item.headline && <h3 className={cn(styles['hd'], ['caption-txt'])}>{Parser(item.headline)}</h3>}
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
