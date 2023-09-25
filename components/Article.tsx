'use client'
import styles from './article.module.scss'
import { ModuleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { Fragment } from 'react'
import { ButtonWrap } from '../elements/ButtonWrap'
import { ImageBlock } from '../elements/ImageBlock'
import ModuleTitle from 'elements/ModuleTitle'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'

const Article = (props: ModuleProps) => {
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
        anchorLink,
    } = props

    if (disabled === 'disabled' || disabled === true) {
        return <></>
    } else {
        return (
            <div
                className={cn(
                    'article-mod',
                    'root-container',
                    styles['item-flex'],
                    styles['root'],
                    styles['flex-mod'],
                    styles[`col_${columns}`],
                    styles[`${type}`],
                    styles[`${contentSpacing}`],

                    {
                        [styles.beacon]: type === 'article',
                        [styles.well]: well == '1',
                        [styles.not_well]: !well,
                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
                        [styles['feature-column']]: columnLocation === 0,
                        [styles['single-column']]: isSingleColumn,
                    }
                )}
                id={anchorLink ? anchorLink : `id_${modId}`}
            >
                {title && <ModuleTitle title={title} />}
                <div className={cn(styles.wrapper, 'wrapper')}>
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

    return item.disabled ? (
        <></>
    ) : (
        <article
            className={cn(
                styles['item'],
                styles[`${item.align}`],
                'item',
                {
                    [styles.hero]: item.isFeatured === 'active' || item.isFeatured === true,
                    hero: item.isFeatured === 'active' || item.isFeatured === true,
                    [styles.nHero]: !item.isFeatured,
                    [styles.yDsc]: item.desc,
                    [styles.nDsc]: !item.desc,
                    [styles.nImg]: !item.image,
                    [styles.yImg]: item.image,
                    [styles.yHds]: item.headline || item.subheader,
                    [styles.nHds]: !item.headline || !item.subheader,
                    [styles.mod_left]: item.align === 'left' && (type === 'article_3' || type === 'article'),
                    [styles.mod_right]: item.align === 'right' && (type === 'article_3' || type === 'article'),
                    [styles.yLk]: (item.links?.pagelink || item.links?.weblink || item.links?.pagelink2 || item.links?.weblink2) && !item.twoButtons,
                    ['border-background']: well == '1',
                    ['round']: item.borderType === 'round',
                    ['is-wrap-link']: item.isWrapLink,
                },
                styles[`item_${itemIndex + 1}`]
            )}
            lang="en"
        >
            {item.isWrapLink && <LinkWrap item={item} modType={'article'}></LinkWrap>}
            <div
                className={cn(styles['item-wrap'], {
                    ['hero-background']: (item.isFeatured === 'active' || item.isFeatured === true) && type === 'article',
                })}
            >
                <ItemWrap item={item} imgsize={imgsize} well={well} type={type} themeStyles={themeStyles} columns={columns} modId={modId} cmsUrl={cmsUrl} />
            </div>
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, imgsize, well, themeStyles, type, modId, cmsUrl, columns } = props

    return (
        <>
            {props.type != 'article_2' ? (
                <>
                    {item.image && (
                        <figure className={cn(styles['image-block'])} data-alt="Headline">
                            <ImageBlock item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} columns={columns} />
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
                            useAccentColor={item.useAccentColor || false}
                        />
                    )}
                </>
            ) : (
                <>
                    {(item.headline || item.subheader) && (
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

                    {item.image && (
                        <figure className={cn(styles['image-block'])} data-alt="Headline">
                            <ImageBlock item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} columns={columns} />
                        </figure>
                    )}
                </>
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
            {item.visibleButton && <ButtonWrap well={well} modId={modId} type={type} columns={columns} themeStyles={themeStyles} {...item} />}
        </>
    )
}

export default Article
