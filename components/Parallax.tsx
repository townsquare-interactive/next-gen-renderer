'use client'
import styles from './parallax.module.scss'
import { ArticleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { Fragment } from 'react'
import { ButtonWrap } from '../elements/ButtonWrap'
import { ImageElement } from '../elements/ImageElement'
import ModuleTitle from 'elements/ModuleTitle'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import BackgroundImage from 'elements/BackgroundImage'
import { domainImage } from '../functions'
import DescBlock from 'elements/DescBlock'
import ReactParallax from 'elements/ReactParallax'

const Parallax = (props: ArticleProps) => {
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

    return (
        <>
            <div
                className={cn(
                    'parallax-mod',
                    styles['root'],
                    styles['flex-mod'],
                    //styles[`${type}`],
                    //'root-container',
                    //styles['item-flex'],
                    //styles[`col_${columns}`],
                    //styles[`${currentSpacing}`],
                    {
                        [styles.well]: well == '1',

                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
                        //[styles.not_well]: !well,
                        //[styles['feature-column']]: columnLocation === 0,
                        // [styles['single-column']]: isSingleColumn,
                    }
                )}
                id={`id_${modId}`}
            >
                {/* {title && <ModuleTitle title={title} />}*/}
                <div className={cn(styles.wrapper, 'wrapper')}>
                    {items.map((item: any, index: number) => (
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
        </>
    )
}

const ModuleItem = (props: ModuleItemProps) => {
    const { item, modId, itemIndex, cmsUrl, themeStyles, type, imgsize, columns, well } = props

    return (
        <article
            className={cn(
                styles['item'],
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
    const { item, well, themeStyles, modId, columns, type, cmsUrl } = props

    const useJsLax = true

    return (
        <div className={cn(styles['item-wrap'], {})} aria-label={item.headline || 'item-wrap'}>
            {!useJsLax && (
                <div
                    className={styles['parallax-block']}
                    //style={{ backgroundImage: `url(http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/10/screen-8.jpg)` }}
                >
                    <div className={styles['img-block']}>
                        <BackgroundImage image={item.image} cmsUrl={cmsUrl} />
                    </div>
                </div>
            )}

            <ReactParallax img={item.image} cmsUrl={cmsUrl} useJsLax={useJsLax}>
                <div
                    className={cn(styles['caption'], {
                        [styles['cap-bckg']]: item.modSwitch1 != 1,
                    })}
                >
                    <div className={styles.content}>
                        <>
                            {(item.headline || item.subheader) && (
                                <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'parallax'} />
                            )}

                            {item.desc && (
                                <div className={cn(styles['txt-block'])}>
                                    <DescBlock desc={item.desc} descSize={item.descSize} useAccentColor={true} type={type} />
                                </div>
                            )}
                        </>

                        {item.visibleButton && <ButtonWrap well={well} modId={modId} type="banner" columns={columns} themeStyles={themeStyles} {...item} />}
                    </div>

                    {item.isWrapLink && <LinkWrap item={item} modType={'banner'}></LinkWrap>}
                </div>
            </ReactParallax>
        </div>
    )
}

export default Parallax
