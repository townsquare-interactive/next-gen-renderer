'use client'
import styles from './banner.module.scss'
import { ModuleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { domainImage } from '../functions'
import { Fragment } from 'react'
import { ButtonWrap } from '../elements/ButtonWrap'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import { ImageElement } from 'elements/ImageElement'

const Banner = (props: ModuleProps) => {
    const { columns = 1, type, well, imgsize, modId, items, themeStyles, cmsUrl, disabled, customClassName, anchorLink } = props

    if (disabled === 'disabled' || disabled === true) {
        return <></>
    } else {
        return (
            <div
                className={cn('root-container', 'banner-mod', styles['root'], styles['flex-mod'], styles[`${type}`], {
                    [styles.well]: well == '1',
                    [styles.not_well]: !well,
                    [styles[`cst_${customClassName}`]]: customClassName,
                })}
                id={anchorLink ? anchorLink : `id_${modId}`}
            >
                <div className={styles.wrapper}>
                    {items.map((item, index) => (
                        <Fragment key={index}>
                            {item.disabled != true ? (
                                <ModuleItem
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
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        )
    }
}

const ModuleItem = (props: ModuleItemProps) => {
    const { item, modId, itemIndex, cmsUrl, themeStyles, type, imgsize, columns, well } = props

    if (item.disabled === 'disabled' || item.disabled === true) {
        return <></>
    }
    return (
        <article
            className={cn(
                styles['item'],
                styles[`${item.align}`],
                'item',
                {
                    [styles.hero]: item.isFeatured === 'active' || item.isFeatured === true,
                    [styles.nHero]: !item.isFeatured,
                    [styles.yLk]: (item.links.pagelink || item.links.weblink || item.links.pagelink2 || item.links.weblink2) && !item.twoButtons,
                    [styles.yImg]: item.image,
                    [styles['btn-only']]: item.visibleButton && !item.headline && !item.subheader,
                    ['is-wrap-link']: item.isWrapLink,
                },
                styles[`item_${itemIndex + 1}`],
                `item_${itemIndex + 1}`
            )}
            lang="en"
            style={item.itemStyle}
        >
            {item.image && (
                <ImageElement
                    imgSrc={item.image}
                    imgAlt={item.img_alt_tag}
                    imagePriority={item.imagePriority}
                    imgsize={imgsize}
                    cmsUrl={cmsUrl}
                    modType={'Banner'}
                    opacity={item.modOpacity || 1}
                    nextImageSizes={item.nextImageSizes}
                    columns={columns}
                />
            )}
            {item.isWrapLink && <LinkWrap item={item} modType={'banner'}></LinkWrap>}

            <ItemWrap
                item={item}
                imgsize={imgsize}
                well={well}
                type={type}
                themeStyles={themeStyles}
                isFeatured={item.isFeatured}
                columns={columns}
                modId={modId}
                align={item.align}
            />
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, well, themeStyles, modId, columns } = props

    return (
        <div
            className={cn(styles['item-wrap'], {})}
            aria-label={item.headline || 'item-wrap'}
            style={
                item.modColor1 && !item.image
                    ? {
                          background: `${item.modColor1}`,
                      }
                    : well === '1'
                    ? {
                          backgroundImage: item.textureImage?.image ? `url(${domainImage(item.textureImage.image, false)})` : 'none',
                          backgroundPositionY: item.modTwo ? item.modTwo + '%' : '0%',
                          height: item.modOne || 'auto',
                      }
                    : { height: item.modOne || 'auto' }
            }
        >
            <div className={styles.content}>
                <>
                    {(item.headline || item.subheader) && (
                        <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'banner'} />
                    )}
                </>

                {item.visibleButton && <ButtonWrap well={well} modId={modId} type="banner" columns={columns} themeStyles={themeStyles} {...item} />}
            </div>
        </div>
    )
}

export default Banner
