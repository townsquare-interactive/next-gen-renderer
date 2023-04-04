'use client'
import styles from './parallax.module.scss'
import { ModuleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { Fragment, ReactChild } from 'react'
import { ButtonWrap } from '../elements/ButtonWrap'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'
import { ImageElement } from 'elements/ImageElement'
import { ConditionalWrapper, domainImage } from 'functions'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ImageBlock } from 'elements/ImageBlock'

const PhotoGallery = (props: ModuleProps) => {
    const { columns = 1, type, well, imgsize, modId, items, themeStyles, cmsUrl, disabled, customClassName, modCount } = props

    //Sets slide count to 1 if there are more slides than items to show, or if text shows (if you are showing more than 1 at once)
    /*     function setSlide() {
        if (modLayout === 'images' && items.length >= slideCount) {
            return slideCount
        } else {
            return 1
        } */

    let autoPlay = false

    const settingsImage = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <NextArrowImage />,
        // prevArrow: <PrevArrowImage />,
        autoplay: autoPlay || false,
        autoplaySpeed: 2600,
    }

    const settingsText = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        //nextArrow: <NextArrow themeStyles={themeStyles} />,
        /* prevArrow: <PrevArrow themeStyles={themeStyles} />, */
    }

    /*     <Slider {...settingsImage}>
    {items.map((item, index) => (
        <div className={styles.item} key={index}>
            {item.imageUrl && (
                <div className={styles.imageTile}>
                    <Image src={domainImage(item.imageUrl)} layout="fill" objectFit="cover" alt={item.altText || ''} quality="50" />
                </div>
            )}
        </div>
    ))}
</Slider> */

    if (disabled === 'disabled') {
        return <></>
    } else {
        return (
            <>
                <div
                    className={cn('parallax-mod', styles['root'], styles['flex-mod'], {
                        [styles.well]: well == '1',
                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
                        [styles['first-mod']]: modCount === 1,
                    })}
                    id={`id_${modId}`}
                >
                    <div className={cn(styles.wrapper, 'wrapper')}>
                        <Slider {...settingsImage}>
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
                        </Slider>
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
                    [styles.nHero]: !item.isFeatured,
                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !item.twoButtons,
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
    const { item, well, themeStyles, modId, columns, type, cmsUrl, imgsize } = props

    return (
        <div
            className={cn(styles['item-wrap'], {})}
            aria-label={item.headline || 'item-wrap'}
            style={
                well === '1'
                    ? {
                          backgroundImage: item.textureImage?.image ? `url(${domainImage(item.textureImage.image, false)})` : 'none',
                          backgroundPositionY: item.modTwo ? item.modTwo + '%' : '0%',
                          height: item.modOne || '70vh',
                      }
                    : { height: item.modOne || '70vh' }
            }
        >
            <PhotoGalleryChildren
                item={item}
                columns={columns}
                modId={modId}
                themeStyles={themeStyles}
                cmsUrl={cmsUrl}
                well={well}
                imgsize={imgsize}
                type={type}
            />
        </div>
    )
}

const PhotoGalleryChildren = ({ item, columns, well, modId, themeStyles, cmsUrl, imgsize, laxType }: ItemWrapProps) => {
    return (
        <>
            <ImageBlock item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} modType={'Card'} columns={columns} />

            <div
                className={cn(styles['caption'], {
                    [styles['cap-bckg']]: item.modSwitch1 != 1 && item.image,
                })}
                style={item.modOne ? { height: item.modOne } : { minHeight: '70vh' }}
            >
                <div className={styles.content}>
                    {(item.headline || item.subheader) && (
                        <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'parallax'} />
                    )}

                    {item.desc && (
                        <div className={cn(styles['txt-block'])}>
                            <DescBlock desc={item.desc} descSize={item.descSize} useAccentColor={true} type={'parallax'} />
                        </div>
                    )}

                    {item.visibleButton && <ButtonWrap well={well} modId={modId} type="parallax" columns={columns} themeStyles={themeStyles} {...item} />}
                </div>

                {item.isWrapLink && <LinkWrap item={item} modType={'banner'}></LinkWrap>}
            </div>
        </>
    )
}

export default PhotoGallery
