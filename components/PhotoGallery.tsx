'use client'
import styles from './photogallery.module.scss'
import { ModuleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { Fragment, MouseEventHandler } from 'react'
import { ButtonWrap } from '../elements/ButtonWrap'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'
import { domainImage } from 'functions'
import Carousel from 'elements/Carousel'
import { ImageBlock } from 'elements/ImageBlock'

const PhotoGallery = (props: ModuleProps) => {
    const { columns = 1, type, well, imgsize, modId, items, themeStyles, cmsUrl, disabled, customClassName, modCount, settings } = props

    const Arrow = (props: { type: string; onClick?: MouseEventHandler<HTMLAnchorElement> }) => {
        const { type, onClick } = props
        return (
            <a
                onClick={onClick}
                className={cn(styles['slick-arrow'], {
                    [styles['slick-next']]: type === 'next',
                    [styles['slick-prev']]: type === 'prev',
                })}
            ></a>
        )
    }
    const useThumbnail = type === 'photo_gallery_2'

    //create array of all images used  (may need to change to per item)
    let allImgs: [string?] = []
    for (let x in items) {
        items[x].image && allImgs.push(items[x].image)
    }

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        //speed: settings?.restartDelay || 2500,

        slidesToShow: 1,
        slidesToScroll: 1,
        fade: settings?.effect === 'fade' ? true : false,
        prevArrow: <Arrow type="prev" />,
        nextArrow: <Arrow type="next" />,
        autoplay: settings?.autoplay,
        //autoplay: false,
        // autoplaySpeed: settings?.restartDelay || 2500,
        autoplaySpeed: settings?.interval || 6000,
        pauseOnHover: settings?.pauseOnHover,
        restartDelay: settings?.restartDelay || 2500,
        dotsClass: 'slick-dots',
        draggable: true,

        //used for thumbnails
        /*  customPaging: function (i: number) {
            return useThumbnail ? <Thumbnail i={i} onClick={onclick} /> : <button type="button" data-role="none" role="button"></button>
        }, */
        customPaging: function (i: number) {
            return <button type="button" data-role="none" role="button"></button>
        },
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
                        [styles['mob-resize']]: settings?.mobileResize,
                        [styles.widescreen_2_4_1]: imgsize === 'widescreen_2-4_1',
                        ['thumbnail']: useThumbnail,
                        ['arrows']: !useThumbnail,
                    })}
                    id={`id_${modId}`}
                >
                    <div className={cn(styles.wrapper, 'wrapper')}>
                        <Carousel settings={carouselSettings} modItems={items} cmsUrl={cmsUrl} useThumbnail={useThumbnail}>
                            {items.map((item, index: number) => (
                                <Fragment key={index}>
                                    {item.disabled != 'disabled' ? (
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
                        </Carousel>
                    </div>
                </div>
            </>
        )
    }
}

const ModuleItem = (props: ModuleItemProps) => {
    const { item, modId, itemIndex, cmsUrl, themeStyles, type, imgsize, columns, well } = props

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
            />
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, well, themeStyles, modId, columns, cmsUrl, imgsize } = props

    const forceAccentColor = item.isFeatured === 'active' ? well == '1' && false : true

    return (
        <div
            className={cn(styles['item-wrap'], {})}
            aria-label={item.headline || 'item-wrap'}
            style={
                well === '1'
                    ? {
                          backgroundImage: item.textureImage?.image ? `url(${domainImage(item.textureImage.image, false)})` : 'none',
                          backgroundPositionY: item.modTwo ? item.modTwo + '%' : '0%',
                      }
                    : {}
            }
        >
            <div className={styles['image-block']}>
                <ImageBlock item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} modType={'PhotoGallery'} columns={columns} />
            </div>

            <div
                className={cn(styles['caption'], {
                    [styles['cap-bckg']]: item.modSwitch1 != 1 && item.image && (item.desc || item.headline || item.visibleButton),
                })}
                style={item.modOne ? { height: item.modOne } : {}}
            >
                <div className={cn(styles.content, 'content')}>
                    {(item.headline || item.subheader) && (
                        <HeadlineBlock item={item} well={well} columns={columns} isBeaconHero={item.isBeaconHero} modType={'gallery'} />
                    )}

                    {item.desc && (
                        <div className={cn(styles['txt-block'])}>
                            <DescBlock
                                desc={item.desc}
                                descSize={item.descSize}
                                useAccentColor={!forceAccentColor ? item.useAccentColor || false : true}
                                type={'gallery'}
                            />
                        </div>
                    )}

                    {item.visibleButton && <ButtonWrap well={well} modId={modId} type="gallery" columns={columns} themeStyles={themeStyles} {...item} />}
                </div>
                {item.isWrapLink && <LinkWrap item={item}></LinkWrap>}
            </div>
        </div>
    )
}

export default PhotoGallery
