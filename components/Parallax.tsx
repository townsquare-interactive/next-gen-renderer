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
import ReactScroll from 'elements/ReactScrollParallax'
//import ReactParallax from 'elements/ReactParallax'

//import dynamic from 'next/dynamic'
//const Jarallax = dynamic(() => import('../elements/parallax_options/Jarallax'), { ssr: false })

//can be jarallax, custom, scroll
const choseLax: string = 'scroll'

const Parallax = (props: ModuleProps) => {
    const { columns = 1, type, well, imgsize, modId, items, themeStyles, cmsUrl, disabled, customClassName, modCount } = props

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
                        [styles['react-scroll']]: choseLax === 'scroll',
                        [styles['react-parallax']]: choseLax === 'react-parallax',
                    })}
                    id={`id_${modId}`}
                >
                    <div className={cn(styles.wrapper, 'wrapper')}>
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

    //const laxType = item.headline.includes('scroll') ? 'scroll' : item.headline.includes('jarallax') ? 'jarallax' : choseLax
    const laxType = choseLax

    return (
        <div
            className={cn(styles['item-wrap'], {
                [styles['react-scroll']]: choseLax === 'scroll',
            })}
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
            {laxType === 'scroll' && (
                <ConditionalWrapper
                    condition={item.image ? true : false}
                    trueOutput={(children: ReactChild) => (
                        <ReactScroll item={item} imgsize={imgsize} cmsUrl={cmsUrl}>
                            {children}
                        </ReactScroll>
                    )}
                    falseOutput={(children: ReactChild) => <>{children}</>}
                >
                    <ParallaxChildren
                        item={item}
                        columns={columns}
                        modId={modId}
                        themeStyles={themeStyles}
                        cmsUrl={cmsUrl}
                        well={well}
                        imgsize={imgsize}
                        type={type}
                    />
                </ConditionalWrapper>
            )}
        </div>
    )
}

const ParallaxChildren = ({ item, columns, well, modId, themeStyles, cmsUrl, imgsize, laxType }: ItemWrapProps) => {
    return (
        <>
            {laxType === 'jarallax' && item.image && (
                <ImageElement
                    imgSrc={item.image}
                    imgAlt={item.img_alt_tag}
                    imagePriority
                    imgsize={imgsize}
                    cmsUrl={cmsUrl}
                    modType={'Parallax'}
                    opacity={item.modOpacity || 1}
                />
            )}
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

export default Parallax
