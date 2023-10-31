'use client'
import styles from './photogrid.module.scss'
import { PhotoGridProps, PhotoItemProps } from '../types'
import { ButtonWrap } from '../elements/ButtonWrap'
import cn from 'classnames'
import { ImageBlock } from '../elements/ImageBlock'
import { domainImage } from 'functions'
import { Fragment } from 'react'
import ModuleTitle from 'elements/ModuleTitle'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'

export const PhotoGrid = (props: PhotoGridProps) => {
    const { columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl, customClassName, contentSpacing, anchorLink, disabled } = props

    if (disabled === 'disabled' || disabled === true) {
        return <></>
    }

    return (
        <div
            className={cn(
                'root-container',
                styles['root'],
                styles['flex-mod'],
                styles[`col_${columns}`],
                styles['item-flex'],
                `col_${columns}`,
                'photo-grid-mod',
                styles[`${contentSpacing}`],
                {
                    [styles.well]: well == '1',
                    [styles.not_well]: !well,
                    [styles[`cst_${customClassName}`]]: customClassName,
                }
            )}
            id={anchorLink ? anchorLink : `id_${modId}`}
        >
            {title && <ModuleTitle title={title} />}
            <div className={styles.wrapper}>
                {items.map((item, index) => (
                    <Fragment key={index}>
                        {item.disabled ? (
                            <></>
                        ) : (
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
                        )}
                    </Fragment>
                ))}
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
                    [styles.hero]: item.isFeatured === 'active' || item.isFeatured === true,
                    [styles.nHero]: !item.isFeatured,
                    [styles.yDsc]: item.desc,
                    [styles.nImg]: !item.image,
                    [styles['is-wrap-link']]: item.isWrapLink,
                    ['border-background']: well == '1',
                    ['round']: item.borderType === 'round',
                },
                `item_${itemIndex + 1}`,
                styles[`item_${itemIndex + 1}`]
            )}
            lang="en"
        >
            {item.isWrapLink && <LinkWrap item={item} modType={'photo-grid'}></LinkWrap>}

            <div
                className={cn(styles['item-wrap'])}
                aria-label={item.headline || 'item-wrap'}
                style={
                    item.textureImage
                        ? {
                              backgroundImage: `linear-gradient(-45deg, ${item.textureImage?.gradientColors[0]}, ${item.textureImage?.gradientColors[1]})`,
                          }
                        : {}
                }
            >
                <div
                    className={styles.content}
                    style={
                        well === '1'
                            ? {
                                  backgroundImage: `url(${item.textureImage?.image ? domainImage(item.textureImage.image, false) : ''})`,
                              }
                            : { background: `${item.promoColor}` }
                    }
                >
                    <ImageBlock item={item} imgsize={imgsize} modType="photo_grid" columns={columns} />
                    {(item.headline || item.subheader) && (
                        <figcaption className={cn(styles.caption)} style={item.image ? { background: themeStyles.captionBackground } : {}}>
                            <div className={styles['cap-cont']}>
                                {(item.headline || item.subheader) && <HeadlineBlock item={item} well={well} columns={columns} modType="photo_grid" />}
                                {item.visibleButton && (
                                    <ButtonWrap well={well} modId={modId} type={type} columns={columns} themeStyles={themeStyles} {...item} />
                                )}
                            </div>
                        </figcaption>
                    )}
                </div>
            </div>
        </article>
    )
}
