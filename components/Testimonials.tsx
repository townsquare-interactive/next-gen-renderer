'use client'
import styles from './testimonials.module.scss'
import { ModuleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { Fragment } from 'react'
import { ImageBlock } from '../elements/ImageBlock'
import ModuleTitle from 'elements/ModuleTitle'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'
import Carousel from 'elements/Carousel'
import CarouselArrow from 'elements/CarouselArrow'

const Testimonials = (props: ModuleProps) => {
    const {
        columns = 1,
        type,
        well,
        imgsize,
        modId,
        title,
        items,
        themeStyles,
        cmsUrl,
        disabled,
        customClassName,
        contentSpacing,
        columnLocation,
        isSingleColumn,
        settings,
    } = props

    //carousel option, may keep in this module
    const useCarousel = type === 'testimonials_2'

    const carouselSettings = {
        dots: true,
        infinite: true,
        //speed: 800,
        //speed: settings?.restartDelay || 2500,
        //slidesToShow: 3,
        slidesToScroll: 1,
        //fade: settings?.effect === 'fade' ? true : false,
        autoplay: settings?.autoplay,
        autoplaySpeed: settings?.interval || 6000,
        pauseOnHover: settings?.pauseOnHover,
        restartDelay: settings?.restartDelay || 2500,
        prevArrow: <CarouselArrow type="prev" />,
        nextArrow: <CarouselArrow type="next" />,
        //adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 99999,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 851,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    if (disabled === 'disabled') {
        return <></>
    } else {
        return (
            <div
                className={cn(
                    'testimonials-mod',
                    'root-container',
                    styles['item-flex'],
                    styles['root'],
                    styles['flex-mod'],
                    styles[`col_${useCarousel ? 1 : columns}`],
                    styles[`${type}`],
                    styles[`${contentSpacing}`],

                    {
                        [styles.well]: well == '1',
                        ['well']: well == '1',
                        [styles.not_well]: !well,
                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
                        [styles['feature-column']]: columnLocation === 0,
                        [styles['single-column']]: isSingleColumn,
                        ['normal-carousel']: useCarousel,
                        [styles.carousel]: useCarousel,
                    }
                )}
                id={`id_${modId}`}
            >
                {title && <ModuleTitle title={title} />}
                <div className={cn(styles.wrapper, 'wrapper')}>
                    {!useCarousel ? (
                        items.map((item, index) => (
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
                                        useCarousel={useCarousel}
                                    />
                                ) : (
                                    <></>
                                )}
                            </Fragment>
                        ))
                    ) : (
                        <div className={cn(styles.wrapper, 'wrapper')}>
                            <Carousel settings={carouselSettings}>
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
                                                useCarousel={useCarousel}
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </Fragment>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const ModuleItem = (props: ModuleItemProps) => {
    const { item, modId, itemIndex, cmsUrl, themeStyles, type, imgsize, columns, well, useCarousel } = props

    return (
        <article
            className={cn(
                styles['item'],
                'item',
                {
                    [styles.hero]: item.isFeatured === 'active',
                    ['hero']: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    ['border-background']: well == '1' && item.isFeatured != 'active',
                    ['hero-background']: well == '1' && item.isFeatured === 'active',
                    ['round']: item.borderType === 'round',
                    ['is-wrap-link']: item.isWrapLink,
                    ['accent-txt']: item.useAccentColor,
                    ['txt-color']: item.isFeatured != 'active' && !item.useAccentColor,
                },
                styles[`item_${itemIndex + 1}`]
            )}
        >
            {item.isWrapLink && <LinkWrap item={item} modType={'article'}></LinkWrap>}
            <div
                className={cn(styles['item-wrap'], {
                    ['hero-background']: item.isFeatured === 'active' && type === 'article',
                })}
                aria-label={item.headline || 'item-wrap'}
            >
                <ItemWrap
                    item={item}
                    imgsize={imgsize}
                    well={well}
                    type={type}
                    themeStyles={themeStyles}
                    columns={columns}
                    modId={modId}
                    cmsUrl={cmsUrl}
                    useCarousel={useCarousel}
                />
            </div>
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, imgsize, well, type, cmsUrl, columns, useCarousel } = props
    console.log(useCarousel)

    return (
        <>
            <div className={styles.caption}>
                {item.actionlbl && (
                    <div
                        className={cn(
                            {
                                ['txt-color-hd']: !item.modColor1 && !item.useAccentColor && !useCarousel,
                            },
                            styles.stars,
                            'stars'
                        )}
                        style={item.modColor1 ? { color: item.modColor1 } : {}}
                    >
                        {'★'.repeat(Number(item.actionlbl))}
                        {'☆'.repeat(5 - Number(item.actionlbl))}
                    </div>
                )}

                {item.desc && (
                    <span
                        className={cn(
                            {
                                ['txt-color-hd']: !item.useAccentColor && !item.useAccentColor && !useCarousel,
                            },
                            styles.quotes,
                            'quotes'
                        )}
                    >
                        <blockquote></blockquote>
                    </span>
                )}

                {item.desc && (
                    <div className={cn(styles['txt-block'])}>
                        <DescBlock
                            desc={item.desc}
                            descSize={item.descSize}
                            type={type}
                            well={well}
                            isBeaconHero={item.isBeaconHero}
                            useAccentColor={item.useAccentColor || false}
                        />
                    </div>
                )}
            </div>

            <div className={styles.content}>
                {item.image && (
                    <figure className={cn(styles['image-block'])} data-alt="Headline">
                        <ImageBlock item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} modType={type} columns={columns} />
                    </figure>
                )}

                {(item.headline || item.subheader || well) && (
                    <HeadlineBlock
                        item={item}
                        well={well}
                        columns={columns}
                        isBeaconHero={item.isBeaconHero}
                        modType={type}
                        noDesc={!item.desc}
                        useAccentColor={item.useAccentColor || false}
                    />
                )}
            </div>
        </>
    )
}

export default Testimonials
