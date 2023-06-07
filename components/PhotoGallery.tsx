'use client'
import styles from './photogallery.module.scss'
import { ModuleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { Fragment, useState } from 'react'
import { ButtonWrap } from '../elements/ButtonWrap'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'
import { domainImage } from 'functions'
import Carousel from 'elements/Carousel'
import { ImageBlock } from 'elements/ImageBlock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarouselArrow from 'elements/CarouselArrow'

const PhotoGallery = (props: ModuleProps) => {
    const { columns = 1, type, well, imgsize, modId, items, themeStyles, cmsUrl, disabled, customClassName, modCount, settings } = props

    const useThumbnail = type === 'thumbnail_gallery'

    const carouselSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: settings?.effect === 'fade' ? true : false,
        prevArrow: <CarouselArrow type="prev" useThumbnail={useThumbnail} />,
        nextArrow: <CarouselArrow type="next" useThumbnail={useThumbnail} />,
        autoplay: settings?.autoplay,
        autoplaySpeed: settings?.interval || 6000,
        pauseOnHover: settings?.pauseOnHover,
        restartDelay: settings?.restartDelay || 2500,
        dotsClass: 'slick-dots',
        draggable: true,
        customPaging: function (i: number) {
            return <button type="button" data-role="none" role="button"></button>
        },
    }

    //remove hidden items for Carousel
    let newItems = []
    for (let x in items) {
        if (items[x].disabled != 'disabled') {
            newItems.push(items[x])
        }
    }

    if (disabled === 'disabled') {
        return <></>
    } else {
        return (
            <>
                <div
                    className={cn('photogallery-mod', styles['root'], styles['flex-mod'], 'root-container', settings?.animation, {
                        [styles.well]: well == '1',
                        ['well']: well == '1',
                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
                        [styles['first-mod']]: modCount === 1,
                        [styles['half-gallery']]: settings?.halfSize,
                        [styles['mob-resize']]: useThumbnail || settings?.mobileResize,
                        [styles.widescreen_2_4_1]: imgsize === 'widescreen_2-4_1',
                        ['thumbnail']: useThumbnail,
                        [styles.thumbnail]: useThumbnail,
                        ['normal-carousel']: !useThumbnail,
                    })}
                    id={`id_${modId}`}
                >
                    <div className={cn(styles.wrapper, 'wrapper')}>
                        <Carousel settings={carouselSettings} modItems={items} cmsUrl={cmsUrl} useThumbnail={useThumbnail} modType={type}>
                            {newItems.map((item, index: number) => (
                                <Fragment key={index}>
                                    {item.disabled != 'disabled' && (
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
                                            useThumbnail={useThumbnail}
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </>
        )
    }
}

const ModuleItem = (props: ModuleItemProps) => {
    const { item, modId, itemIndex, cmsUrl, themeStyles, type, imgsize, columns, well, useThumbnail } = props

    return (
        <article
            className={cn(
                styles['item'],
                'item',
                styles[`${item.align}`],
                {
                    [styles.hero]: item.isFeatured === 'active',
                    ['hero']: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !item.twoButtons,
                    [styles.yImg]: item.image,
                    [styles['btn-only']]: item.visibleButton && !item.headline && !item.subheader,
                    ['is-wrap-link']: item.isWrapLink,
                },
                styles[`item_${itemIndex + 1}`],
                `item_${itemIndex + 1}`
            )}
            style={item.itemStyle}
        >
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
                cmsUrl={cmsUrl}
                useThumbnail={useThumbnail}
            />
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, well, themeStyles, modId, columns, cmsUrl, imgsize, useThumbnail } = props
    const [isCaptionVisible, toggleCaption] = useState(useThumbnail ? false : true)

    const forceAccentColor = item.isFeatured === 'active' ? well == '1' && false : true

    return (
        <div
            className={cn(styles['item-wrap'], {})}
            aria-label={item.headline || 'item-wrap'}
            style={
                well === '1'
                    ? {
                          backgroundImage: item.textureImage?.image ? `url(${domainImage(item.textureImage.image, false)})` : 'none',
                      }
                    : {}
            }
        >
            <div className={styles['image-block']}>
                <ImageBlock item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} modType={'gallery'} columns={columns} />
            </div>

            <div
                className={cn(styles['caption'], {
                    [styles['cap-bckg']]: !useThumbnail && item.modSwitch1 != 1 && item.image && (item.desc || item.headline || item.visibleButton),
                    [styles['hidden']]: !isCaptionVisible,
                })}
                style={item.modOne ? { height: item.modOne } : {}}
            >
                <div
                    className={cn(styles.content, 'content', {
                        [styles['cap-bckg']]: useThumbnail && item.modSwitch1 != 1 && item.image && (item.desc || item.headline || item.visibleButton),
                    })}
                >
                    {(item.headline || item.subheader) && (
                        <HeadlineBlock
                            item={item}
                            well={well}
                            columns={columns}
                            isBeaconHero={item.isBeaconHero}
                            modType={useThumbnail ? 'thumbnail' : 'gallery'}
                        />
                    )}

                    {item.desc && (
                        <div className={cn(styles['txt-block'])}>
                            <DescBlock
                                desc={item.desc}
                                descSize={item.descSize}
                                useAccentColor={!forceAccentColor ? item.useAccentColor || false : true}
                                type={useThumbnail ? 'thumbnail' : 'gallery'}
                            />
                        </div>
                    )}

                    {item.visibleButton && <ButtonWrap well={well} modId={modId} type="gallery" columns={columns} themeStyles={themeStyles} {...item} />}
                </div>
                {item.isWrapLink && <LinkWrap item={item}></LinkWrap>}
            </div>

            {useThumbnail && (
                <button type="button" className={styles['carousel-btn']} onClick={() => toggleCaption(!isCaptionVisible)}>
                    <FontAwesomeIcon icon={!isCaptionVisible ? ['fas', 'message'] : ['fas', 'x']} />
                </button>
            )}
        </div>
    )
}

export default PhotoGallery
