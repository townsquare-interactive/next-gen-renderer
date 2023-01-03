'use client'
import styles from './banner.module.scss'
import { ArticleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { ConditionalWrapper, domainImage } from '../functions'
import { Fragment, ReactChild } from 'react'
import Link from 'next/link'
import { Button } from '../elements/Button'
import ModuleTitle from 'elements/ModuleTitle'
import { HeadlineBlock } from 'elements/HeadlineBlock'

const Banner = (props: ArticleProps) => {
    const { columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl, disabled } = props

    if (disabled === 'disabled') {
        return <></>
    } else {
        return (
            <div
                className={cn(styles['root'], styles['tsflex'], styles['root-container'], styles[`col_${columns}`], styles[`${type}`], {
                    [styles.beacon]: type === 'article',
                    [styles.well]: well == '1',
                    [styles.not_well]: !well,
                    [styles[`cst_${props.class}`]]: props.class,
                })}
                id={`id_${modId}`}
            >
                {title && <ModuleTitle title={title} />}
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
                    [styles.nImg]: !item.image,
                    [styles.yImg]: item.image,
                    [styles.yHds]: item.headline || item.subheader,
                    [styles.nHds]: !item.headline || !item.subheader,
                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !item.twoButtons,
                },
                styles[`item_${itemIndex + 1}`],
                `item_${itemIndex + 1}`
            )}
            lang="en"
            style={well === '1' ? { backgroundImage: item.textureImage?.gradient } : { background: `${item.promoColor}` }}
        >
            <ConditionalWrapper
                condition={item.isWrapLink ? true : false}
                trueOutput={(children: ReactChild) => (
                    <Link
                        href={item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''}
                        passHref={item.weblink || item.weblink2 ? true : false}
                        className={cn('btn_link')}
                        target={item.newwindow == 1 ? '_blank' : item.newwindow2 == 1 ? '_blank' : '_self'}
                        aria-label={item.headline || 'block-link'}
                        style={
                            well === '1'
                                ? {
                                      backgroundImage: `url(${item.textureImage?.image ? domainImage(item.textureImage.image, false) : ''})`,
                                  }
                                : { background: 'transparent' }
                        }
                    >
                        <div
                            className={cn(styles['item-wrap'], 'btn_link', {
                                ['hero-background']: item.isFeatured === 'active' && type === 'article',
                            })}
                            aria-label={item.headline || 'item-wrap'}
                        >
                            {children}
                        </div>
                    </Link>
                )}
                falseOutput={(children: ReactChild) => (
                    <div
                        className={cn(styles['item-wrap'], {
                            ['hero-background']: item.isFeatured === 'active' && type === 'article',
                        })}
                        style={
                            well === '1'
                                ? {
                                      backgroundImage: `url(${item.textureImage?.image ? domainImage(item.textureImage.image, false) : ''})`,
                                  }
                                : { background: 'transparent' }
                        }
                    >
                        {children}
                    </div>
                )}
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
                    cmsUrl={cmsUrl}
                    align={item.align}
                />
            </ConditionalWrapper>
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, well, isFeatured, themeStyles, type, modId, cmsUrl, columns, align } = props

    return (
        <>
            <>{(item.headline || item.subheader) && <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={type} />}</>

            {item.visibleButton && (
                <Button well={well} modId={modId} type={type === 'banner_1' ? 'banner' : 'article'} columns={columns} themeStyles={themeStyles} {...item} />
            )}
        </>
    )
}

export default Banner
