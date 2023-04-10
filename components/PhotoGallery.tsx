'use client'
import styles from './photogallery.module.scss'
import { ModuleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { Fragment, ReactChild } from 'react'
import { ButtonWrap } from '../elements/ButtonWrap'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'
import { ImageElement } from 'elements/ImageElement'
import { ConditionalWrapper, domainImage } from 'functions'
import Carousel from 'elements/Carousel'

//react slider
/* import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' */
import { ImageBlock } from 'elements/ImageBlock'

const PhotoGallery = (props: ModuleProps) => {
    const { columns = 1, type, well, imgsize, modId, items, themeStyles, cmsUrl, disabled, customClassName, modCount, settings } = props

    //Sets slide count to 1 if there are more slides than items to show, or if text shows (if you are showing more than 1 at once)
    /*     function setSlide() {
        if (modLayout === 'images' && items.length >= slideCount) {
            return slideCount
        } else {
            return 1
        } */

    //let autoPlay = false

    /*     const autoplay = settings?.autoplay === 0 ? false : true
    const pauseonhover = settings?.pauseonhover === 0 ? false : true
    const animation = settings?.animation || 'slidein'
    const effect = settings?.effect || 'slide'
    const interval = settings?.interval || '5'
    const restartdelay = settings?.restartdelay <= 0 ? 2500 : settings?.restartdelay ? parseFloat(settings?.restartdelay) * 1000 : 2500
    console.log(settings, effect) */

    /*    const interval = parseFloat(settings?.interval || '5')
    const restartdelay = parseFloat(settings?.restartdelay || '2.5') */

    /*     const settings2 = {
        autoplay: settings?.autoplay === 0 ? false : true,
        pauseOnHover: settings?.pauseonhover === 0 ? false : true,
        animation: settings?.animation || 'slidein',
        effect: settings?.effect || 'slide',
        interval: interval <= 0 ? 5000 : interval ? interval * 1000 : 5000,
        restartDelay: restartdelay <= 0 ? 2500 : restartdelay ? restartdelay * 1000 : 2500,
    } */

    /*     found in cms 
    var gallerySettings = {
        //lazyLoad: 'progressive',
          infinite: true,
          dots: true,
          prevArrow: "<a class='slick-prev'></a>",
          nextArrow: "<a class='slick-next'></a>",
          arrows: true,
          adaptiveHeight: false,
          useCSS:false,

          //new properties added
          autoplay: dataSettings.autoplay === "undefined" ? false : (dataSettings.autoplay > 0 ? true : false),
          fade: dataSettings.effect === 'fade',
          pauseOnHover: dataSettings.pauseonhover == '1',
          autoplaySpeed: dataSettings.interval !== '' ? parseInt(dataSettings.interval) * 1000 : 6000 //default is 3000 as per slick js docs
      }; */

    //animation is for text, css

    const Arrow = (props: { type: string; onClick?: any }) => {
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

    const settingsImage = {
        dots: true,
        infinite: true,
        //speed: 800,
        //speed: settings?.restartDelay || 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: settings?.effect === 'fade' ? true : false,
        // nextArrow: <NextArrowImage />,
        // prevArrow: <PrevArrowImage />,
        prevArrow: <Arrow type="prev" />,
        nextArrow: <Arrow type="next" />,
        autoplay: settings?.autoplay || true,
        //autoplay: false,
        // autoplaySpeed: settings?.restartDelay || 2500,
        autoplaySpeed: settings?.interval || 6000,
        pauseOnHover: settings?.pauseOnHover,
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
                    className={cn('photogallery-mod', styles['root'], styles['flex-mod'], 'root-container', settings?.animation, {
                        [styles.well]: well == '1',
                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
                        [styles['first-mod']]: modCount === 1,
                    })}
                    id={`id_${modId}`}
                >
                    <div className={cn(styles.wrapper, 'wrapper')}>
                        <Carousel settings={settingsImage}>
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

    /*     console.log('itemstyle', item.itemStyle)
    console.log('promo color', item.promoColor)
    console.log('txt img', item.textureImage) */

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
                      }
                    : {}
            }
        >
            <ImageBlock item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} modType={'Card'} columns={columns} />

            <div
                className={cn(styles['caption'], {
                    [styles['cap-bckg']]: item.modSwitch1 != 1 && item.image,
                })}
                style={item.modOne ? { height: item.modOne } : {}}
            >
                <div className={cn(styles.content, 'content')}>
                    {(item.headline || item.subheader) && (
                        <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'parallax'} />
                    )}

                    {item.desc && (
                        <div className={cn(styles['txt-block'])}>
                            <DescBlock desc={item.desc} descSize={item.descSize} useAccentColor={true} type={'gallery'} />
                        </div>
                    )}

                    {item.visibleButton && <ButtonWrap well={well} modId={modId} type="parallax" columns={columns} themeStyles={themeStyles} {...item} />}
                </div>

                {item.isWrapLink && <LinkWrap item={item} modType={'banner'}></LinkWrap>}
            </div>
        </div>
    )
}

export default PhotoGallery
