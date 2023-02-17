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

const Parallax = (props: any) => {
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
                    //'article-mod',
                    //'root-container',
                    //styles['item-flex'],
                    styles['root'],
                    styles['flex-mod']
                    //styles[`col_${columns}`],
                    ////styles[`${type}`],
                    //styles[`${currentSpacing}`],

                    /* {
                        [styles.beacon]: type === 'article',
                        [styles.well]: well == '1',
                        [styles.not_well]: !well,
                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
                        [styles['feature-column']]: columnLocation === 0,
                        [styles['single-column']]: isSingleColumn,
                    } */
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
            /*  style={
                item.modColor1
                    ? {
                          background: `${item.modColor1}`,
                      }
                    : well === '1' && !item.image
                    ? {
                          backgroundImage: `linear-gradient(-45deg, ${item.textureImage?.gradientColors[0]}, ${item.textureImage?.gradientColors[1]})`,
                      }
                    : { background: `${item.promoColor}` }
            } */
        >
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
            /*  style={
                item.modColor1
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
            } */
        >
            {/* {(!item.modOne || item.modOne >= 200) && (
                <div className={styles.content}>
                    <>
                        {(item.headline || item.subheader) && (
                            <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'banner'} />
                        )}
                    </>

                    {item.visibleButton && <ButtonWrap well={well} modId={modId} type="banner" columns={columns} themeStyles={themeStyles} {...item} />}
                </div>
            )} */}
            <div
                className={styles['tsi-parallax']}
                //style={{ backgroundImage: `url(http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/10/screen-8.jpg)` }}
            >
                <div className={styles.imgBlock}>
                    <BackgroundImage image={item.image} className={styles['tsi-parallax']} />
                </div>
                <div className={styles['tsi-parallax-caption']}>
                    <div>
                        {/*                         <h1>I can add content on top of the parallax section</h1>
                        <p>this has min-height 100vh for full cover</p> */}

                        <div className={styles.content}>
                            <>
                                {(item.headline || item.subheader) && (
                                    <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'banner'} />
                                )}
                            </>

                            {item.visibleButton && <ButtonWrap well={well} modId={modId} type="banner" columns={columns} themeStyles={themeStyles} {...item} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{
    /* <div
className={styles['tsi-parallax']}
//style={{ backgroundImage: `url(http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/10/screen-8.jpg)` }}
>
<div className={styles.imgBlock}>
    <BackgroundImage image={'/files/2022/10/screen-8.jpg'} className={styles['tsi-parallax']} />
</div>
<div className={styles['tsi-parallax-caption']}>
    <div>
        <h1>I can add content on top of the parallax section</h1>
        <p>this has min-height 100vh for full cover</p>
    </div>
</div>
</div> */
}

export default Parallax
