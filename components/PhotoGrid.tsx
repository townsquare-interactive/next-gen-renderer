'use client'
import styles from './photogrid.module.scss'
import { PhotoGridProps, PhotoItemProps } from '../types'
import { Button } from '../elements/Button'
import cn from 'classnames'
import { ImageElement } from '../elements/ImageElement'
import { ConditionalWrapper, domainImage } from 'functions'
import Link from 'next/link'
import { ReactChild } from 'react'
import ModuleTitle from 'elements/ModuleTitle'
import { HeadlineBlock } from 'elements/HeadlineBlock'

export const PhotoGrid = (props: PhotoGridProps) => {
    const { columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl } = props

    return (
        <div
            className={cn(styles['root'], styles['tsflex'], styles['root-container'], styles[`col_${columns}`], styles['grid'], `col_${columns}`, {
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

    return (
        <article
            className={cn(
                styles['item'],
                styles[`${item.align}`],
                'item',
                {
                    [styles.hero]: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yDsc]: item.desc,
                    [styles.nImg]: !item.image,
                },
                `item_${itemIndex + 1}`,
                styles[`item_${itemIndex + 1}`]
            )}
            lang="en"
            style={{ backgroundImage: item.textureImage?.gradient }}
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
                    <ImageElement item={item} well={well} imgsize={imgsize} cmsUrl={cmsUrl} modType="photo_grid" />
                    {item.hasGridCaption && (
                        <figcaption
                            className={cn(styles.caption)}
                            style={
                                item.image
                                    ? { background: themeStyles.captionBackground }
                                    : well === '1'
                                    ? {
                                          backgroundImage: `url(${item.textureImage?.image ? domainImage(item.textureImage.image, false) : ''})`,
                                      }
                                    : { background: `${item.promoColor}` }
                            }
                        >
                            <div>
                                {(item.headline || item.subheader) && <HeadlineBlock item={item} well={well} columns={columns} modType="photo_grid" />}
                                {item.visibleButton && <Button well={well} modId={modId} type={type} columns={columns} themeStyles={themeStyles} {...item} />}
                            </div>
                        </figcaption>
                    )}
                </>
            </ConditionalWrapper>
        </article>
    )
}
