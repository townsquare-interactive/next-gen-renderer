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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Banner = (props: ArticleProps) => {
    const { columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl, disabled, customClassName } = props

    if (disabled === 'disabled') {
        return <></>
    } else {
        return (
            <div
                className={cn(styles['root'], styles['flex-mod'], styles['root-container'], styles[`${type}`], {
                    [styles.well]: well == '1',
                    [styles.not_well]: !well,
                    [styles[`cst_${customClassName}`]]: customClassName,
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
                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !item.twoButtons,
                },
                styles[`item_${itemIndex + 1}`],
                `item_${itemIndex + 1}`
            )}
            lang="en"
            style={
                well === '1'
                    ? {
                          backgroundImage: `linear-gradient(-45deg, ${item.textureImage?.gradientColors[0]}, ${item.textureImage?.gradientColors[1]})`,
                      }
                    : { background: `${item.promoColor}` }
            }
        >
            {/*             {item.textureImage?.image && (
                <Image
                    src={domainImage(item.textureImage?.image, false)}
                    alt={item.img_alt_tag || ''}
                    quality="50"
                    //priority={item.desc ? false : true}
                    //style={{ width: '100%', height: 'auto' }}
                    sizes="(max-width: 1920px) 100vw,
                            (max-width: 1200px) 70vw,
                            100vw"
                    fill
                />
            )} */}

            <ConditionalWrapper
                condition={item.isWrapLink ? true : false}
                trueOutput={(children: ReactChild) => (
                    <Link
                        href={item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''}
                        passHref={item.weblink || item.weblink2 ? true : false}
                        className={cn('btn_link')}
                        target={item.newwindow == 1 ? '_blank' : item.newwindow2 == 1 ? '_blank' : '_self'}
                        aria-label={item.headline || 'block-link'}
                    >
                        <div
                            className={cn(styles['item-wrap'], 'btn_link', {
                                ['hero-background']: item.isFeatured === 'active' && type === 'article',
                            })}
                            aria-label={item.headline || 'item-wrap'}
                            style={
                                well === '1'
                                    ? {
                                          backgroundImage: item.textureImage?.image ? `url(${domainImage(item.textureImage.image, false)})` : 'none',
                                          backgroundPositionY: item.modTwo ? item.modTwo + '%' : 'auto',
                                          height: item.modOne || 'auto',
                                      }
                                    : { height: item.modOne || 'auto' }
                            }
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
                                      backgroundImage: item.textureImage?.image ? `url(${domainImage(item.textureImage.image, false)})` : 'none',
                                      backgroundPositionY: item.modTwo ? item.modTwo + '%' : 'auto',
                                      height: item.modOne || 'auto',
                                  }
                                : {}
                        }
                        /* style={
                            well === '1'
                                ? {
                                      backgroundImage: `url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E;)`,
                                      
                                  }
                                : { background: 'transparent' }
                        } */
                    >
                        {children}
                    </div>
                )}
            >
                <>
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
                </>
            </ConditionalWrapper>
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, well, themeStyles, type, modId, columns } = props

    return (
        <>
            {item.imageIcon && (
                <>
                    {(!item.modOne || item.modOne >= 350) && (
                        <div className={cn(styles['icon-block'])}>
                            <svg height="100" width="100" className={styles.circle}>
                                <circle cx="50" cy="50" r="50" fill="#fff" />
                            </svg>

                            <div className={styles.icon} style={{ color: item.promoColor }}>
                                <FontAwesomeIcon icon={[item.imageIcon.iconPrefix, item.imageIcon.iconModel]} />
                            </div>
                        </div>
                    )}
                </>
            )}

            {(!item.modOne || item.modOne >= 200) && (
                <>
                    <>
                        {(item.headline || item.subheader) && (
                            <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={type} />
                        )}
                    </>

                    {item.visibleButton && <Button well={well} modId={modId} type="banner" columns={columns} themeStyles={themeStyles} {...item} />}
                </>
            )}
        </>
    )
}

export default Banner
