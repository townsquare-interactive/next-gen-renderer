'use client'
import styles from './banner.module.scss'
import { ArticleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { ConditionalWrapper, domainImage } from '../functions'
import { Fragment, ReactChild } from 'react'
import { Button } from '../elements/Button'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import BackgroundImage from 'elements/BackgroundImage'
import LinkWrap from 'elements/LinkWrap'

const Banner = (props: ArticleProps) => {
    const { columns = 1, type, well, imgsize, modId, items, themeStyles, cmsUrl, disabled, customClassName } = props

    if (disabled === 'disabled') {
        return <></>
    } else {
        return (
            <div
                className={cn(styles['root'], styles['flex-mod'], styles['root-container'], styles[`${type}`], 'banner-mod', {
                    [styles.well]: well == '1',
                    [styles.not_well]: !well,
                    [styles[`cst_${customClassName}`]]: customClassName,
                })}
                id={`id_${modId}`}
            >
                <div className={styles.wrapper}>
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
                styles[`${item.align}`],
                {
                    [styles.hero]: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !item.twoButtons,
                    [styles.yImg]: item.image,
                },
                styles[`item_${itemIndex + 1}`],
                `item_${itemIndex + 1}`
            )}
            lang="en"
            style={
                item.modColor1
                    ? {
                          background: `${item.modColor1}`,
                      }
                    : well === '1' && !item.image
                    ? {
                          backgroundImage: `linear-gradient(-45deg, ${item.textureImage?.gradientColors[0]}, ${item.textureImage?.gradientColors[1]})`,
                      }
                    : { background: `${item.promoColor}` }
            }
        >
            {item.image && <BackgroundImage image={item.image} alt={item.img_alt_tag} priority={item.imagePriority} cmsUrl={cmsUrl} />}
            <ConditionalWrapper
                condition={item.isWrapLink ? true : false}
                trueOutput={(children: ReactChild) => (
                    <LinkWrap item={item} modType={'banner'}>
                        {children}
                    </LinkWrap>
                )}
                falseOutput={(children: ReactChild) => <>{children}</>}
            >
                <div
                    className={cn(styles['item-wrap'], {
                        ['btn_link']: item.isWrapLink,
                    })}
                    aria-label={item.headline || 'item-wrap'}
                    style={
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
                    }
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
                    />
                </div>
            </ConditionalWrapper>
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, well, themeStyles, modId, columns } = props

    return (
        <>
            {(!item.modOne || item.modOne >= 200) && (
                <>
                    <>
                        {(item.headline || item.subheader) && (
                            <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'banner'} />
                        )}
                    </>

                    {item.visibleButton && <Button well={well} modId={modId} type="banner" columns={columns} themeStyles={themeStyles} {...item} />}
                </>
            )}
        </>
    )
}

export default Banner
