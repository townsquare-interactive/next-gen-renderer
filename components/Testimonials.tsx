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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    } = props

    // const currentSpacing = contentSpacing || 'thin'
    const currentSpacing = contentSpacing || ''

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
                    styles[`col_${columns}`],
                    styles[`${type}`],
                    styles[`${currentSpacing}`],

                    {
                        [styles.well]: well == '1',
                        ['well']: well == '1',
                        [styles.not_well]: !well,
                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
                        [styles['feature-column']]: columnLocation === 0,
                        [styles['single-column']]: isSingleColumn,
                    }
                )}
                id={`id_${modId}`}
            >
                {title && <ModuleTitle title={title} />}
                <div className={cn(styles.wrapper, 'wrapper')}>
                    {items.map((item, index) => (
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
                </div>
            </div>
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
                {
                    [styles.hero]: item.isFeatured === 'active',
                    ['hero']: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yDsc]: item.desc,
                    [styles.nDsc]: !item.desc,
                    [styles.nImg]: !item.image,
                    [styles.yImg]: item.image,
                    [styles.yHds]: item.headline || item.subheader,
                    [styles.nHds]: !item.headline || !item.subheader,

                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !item.twoButtons,
                    ['border-background']: well == '1' && item.isFeatured != 'active',
                    ['hero-background']: well == '1' && item.isFeatured === 'active',
                    ['round']: item.borderType === 'round',
                    ['is-wrap-link']: item.isWrapLink,
                    ['txt-color']: item.isFeatured != 'active',
                },
                styles[`item_${itemIndex + 1}`]
            )}
            lang="en"
        >
            {item.isWrapLink && <LinkWrap item={item} modType={'article'}></LinkWrap>}
            <div
                className={cn(styles['item-wrap'], {
                    ['hero-background']: item.isFeatured === 'active' && type === 'article',
                })}
                aria-label={item.headline || 'item-wrap'}
            >
                <ItemWrap item={item} imgsize={imgsize} well={well} type={type} themeStyles={themeStyles} columns={columns} modId={modId} cmsUrl={cmsUrl} />
            </div>
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, imgsize, well, themeStyles, type, modId, cmsUrl, columns } = props

    const useAccentColor = item.useAccentColor || false

    return (
        <>
            <div className={styles.caption}>
                {item.actionlbl && (
                    <div className={cn('txt-color-hd', styles.stars, 'stars')}>
                        {'★'.repeat(Number(item.actionlbl))}
                        {'☆'.repeat(5 - Number(item.actionlbl))}
                    </div>
                )}

                <span className={cn('txt-color-hd', styles.quotes, 'quotes')}>
                    {/*  <FontAwesomeIcon icon={['fas', 'quote-left']} /> */}
                    <blockquote></blockquote>
                </span>

                {item.desc && (
                    <div className={cn(styles['txt-block'])}>
                        <DescBlock desc={item.desc} descSize={item.descSize} type={type} well={well} isBeaconHero={item.isBeaconHero} />
                    </div>
                )}
            </div>

            <div
                className={styles.content}
                /*  style={item.isFeatured === 'active' && well ? { backgroundColor: 'var(--hero-btn-background)' } : well ? { backgroundColor: '#fff' } : {}} */
            >
                {item.image && (
                    <figure className={cn(styles['image-block'])} data-alt="Headline">
                        <ImageBlock item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} modType={type} />
                    </figure>
                )}

                {(item.headline || item.subheader) && (
                    <HeadlineBlock
                        item={item}
                        well={well}
                        columns={columns}
                        isBeaconHero={item.isBeaconHero}
                        modType={type}
                        noDesc={!item.desc}
                        useAccentColor={useAccentColor || false}
                    />
                )}
            </div>
        </>
    )
}

export default Testimonials
