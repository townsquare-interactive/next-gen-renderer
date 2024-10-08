'use client'
import styles from './parallax.module.scss'
import { ModuleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { Fragment, ReactChild } from 'react'
import { ButtonWrap } from '../elements/ButtonWrap'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'
import { ConditionalWrapper, domainImage } from 'functions'
import ReactScroll from 'elements/ReactScrollParallax'

//can be jarallax, custom, scroll
const choseLax: string = 'scroll'

//allow custom height field in cms to affect height here
const useCustomHeight = true

const Parallax = (props: ModuleProps) => {
    const { columns = 1, type, well, imgsize, modId, items, themeStyles, cmsUrl, disabled, customClassName, modCount, isSingleColumn, anchorLink } = props

    if (disabled === 'disabled' || disabled === true) {
        return <></>
    } else {
        return (
            <>
                <div
                    className={cn('parallax-mod', styles['root'], styles['flex-mod'], 'root-container', {
                        [styles.well]: well == '1',
                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
                        [styles['first-mod']]: modCount === 1,
                        'first-mod': modCount === 1,
                        [styles['react-scroll']]: choseLax === 'scroll',
                        [styles['react-parallax']]: choseLax === 'react-parallax',
                        [styles['single-column']]: isSingleColumn,
                    })}
                    id={anchorLink ? anchorLink : `id_${modId}`}
                >
                    <div className={cn(styles.wrapper, 'wrapper')}>
                        {items.map((item, index: number) => (
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
                    [styles.hero]: item.isFeatured === 'active' || item.isFeatured === true,
                    [styles.nHero]: !item.isFeatured,
                    [styles.yLk]: (item.links?.pagelink || item.links?.weblink || item.links?.pagelink2 || item.links?.weblink2) && item.btnCount != 2,
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
    const dlHeight = useCustomHeight ? item.modOne || '70vh' : '70vh'

    return (
        <div
            className={cn(styles['item-wrap'], 'item-wrap', {
                [styles['react-scroll']]: choseLax === 'scroll',
            })}
            aria-label={item.headline || 'item-wrap'}
            style={
                well === '1'
                    ? {
                          backgroundImage: item.textureImage?.image ? `url(${domainImage(item.textureImage.image, false)})` : 'none',
                          backgroundPositionY: item.modTwo ? item.modTwo + '%' : '0%',
                          height: dlHeight,
                      }
                    : { height: dlHeight }
            }
        >
            <ConditionalWrapper
                condition={item.image ? true : false}
                trueOutput={(children: ReactChild) => (
                    <ReactScroll item={item} imgsize={imgsize} cmsUrl={cmsUrl} columns={columns}>
                        {children}
                    </ReactScroll>
                )}
                falseOutput={(children: ReactChild) => <>{children}</>}
            >
                <ParallaxChildren item={item} columns={columns} modId={modId} themeStyles={themeStyles} well={well} imgsize={imgsize} type={type} />
            </ConditionalWrapper>
        </div>
    )
}

const ParallaxChildren = ({ item, columns, well, modId, themeStyles }: ItemWrapProps) => {
    return (
        <>
            <div
                className={cn(styles['caption'], 'caption', {
                    [styles['cap-bckg']]: item.modSwitch1 != 1 && item.image,
                })}
                //style={item.modOne ? { height: item.modOne } : { minHeight: '70vh' }}
                style={!useCustomHeight ? { minHeight: '70vh' } : item.modOne ? { height: item.modOne } : { minHeight: '70vh' }}
            >
                <div className={styles.content}>
                    {(item.headline || item.subheader) && (
                        <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'parallax'} />
                    )}

                    {item.desc && (
                        <div className={cn(styles['dsc-block'])}>
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
