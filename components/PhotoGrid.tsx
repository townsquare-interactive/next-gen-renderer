'use client'
import styles from './myimage.module.scss'
import { Media, MyImagesProps, ArticleProps } from '../types'
import Image from 'next/image'
import cn from 'classnames'

import { domainImage } from '../functions'
import { useState } from 'react'

// importing fontAwesome icons
import { faRocket, faAnchor, faArchway } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../functions'
import { MyImage } from 'elements/MyImage'

export const PhotoGrid = (props: ArticleProps) => {
    const { width = '1060', columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl, disabled } = props

    return (
        <div
            className={cn(styles['root'], styles['tsflex'], styles['root-container'], styles[`col_${columns}`], {
                [styles.a1]: type === 'article_1',
                [styles.a2]: type === 'article_2',
                [styles.a3]: type === 'article_3',
                [styles.beacon]: type === 'article',
                [styles.well]: well == '1',
                [styles.not_well]: !well,
                [styles.large]: columns == 1 && (width === '736' || width === '652' || width === '938' || width === '1060' || width === '988'),
                [styles.medium]: columns == 2,
                [styles.small]: columns == 3 || columns == 4,
                [styles[`cst_${props.class}`]]: props.class,
                [styles['full-width']]: width === '938' || width === '1060' || width === '988' || !width,
                [styles['med-width']]: width === '736' || width === '652',
            })}
            id={`id_${modId}`}
        >
            <div className={styles.wrapper}>
                {items.map((item, index) => (
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
                            `item_${index + 1}`,
                            styles[`item_${index + 1}`]
                        )}
                        lang="en"
                        //style={well == '1' ? borderBackground : noBackground}
                        key={index}
                    >
                        <MyImage item={item} well={well} imgsize={imgsize} cmsUrl={cmsUrl} />
                    </article>
                ))}
            </div>
        </div>
    )
}
