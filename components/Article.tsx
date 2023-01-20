'use client'
import styles from './article.module.scss'
import { ArticleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { ConditionalWrapper } from '../functions'
import { Fragment, ReactChild } from 'react'
import Link from 'next/link'
import { Button } from '../elements/Button'
import { ImageElement } from '../elements/ImageElement'
import ModuleTitle from 'elements/ModuleTitle'
import { HeadlineBlock } from 'elements/HeadlineBlock'

const Article = (props: ArticleProps) => {
    const { columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl, disabled, customClassName } = props

    console.log(props)

    if (disabled === 'disabled') {
        return <></>
    } else {
        return (
            <div
                className={cn(
                    styles['root'],
                    styles['flex-mod'],
                    styles['grid'],
                    styles['root-container'],
                    styles[`col_${columns}`],
                    styles[`${type}`],
                    'article-mod',
                    {
                        [styles.beacon]: type === 'article',
                        [styles.well]: well == '1',
                        [styles.not_well]: !well,
                        [styles[`cst_${customClassName}`]]: customClassName,
                        [`cst_${customClassName}`]: customClassName,
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
                styles[`${item.align}`],
                'item',
                {
                    [styles.hero]: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yDsc]: item.desc,
                    [styles.nDsc]: !item.desc,
                    [styles.nImg]: !item.image,
                    [styles.yImg]: item.image,
                    [styles.yHds]: item.headline || item.subheader,
                    [styles.nHds]: !item.headline || !item.subheader,
                    [styles.mod_left]: item.align === 'left' && (type === 'article_3' || type === 'article'),
                    [styles.mod_right]: item.align === 'right' && (type === 'article_3' || type === 'article'),
                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !item.twoButtons,
                    ['border-background']: well == '1',
                },
                styles[`item_${itemIndex + 1}`]
            )}
            lang="en"
        >
            <ConditionalWrapper
                condition={item.isWrapLink ? true : false}
                trueOutput={(children: ReactChild) => (
                    <Link
                        href={item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''}
                        passHref={item.weblink || item.weblink2 ? true : false}
                        className={cn('btn_link', styles.btn_link)}
                        target={item.newwindow == 1 ? '_blank' : item.newwindow2 == 1 ? '_blank' : '_self'}
                        aria-label={item.headline || 'block-link'}
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
    const { item, imgsize, well, isFeatured, themeStyles, type, modId, cmsUrl, columns, align } = props

    return (
        <>
            {props.type != 'article_2' ? (
                <>
                    {item.image && (
                        <figure className={cn(styles['image-block'])} data-alt="Headline">
                            <ImageElement item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} />
                        </figure>
                    )}
                    {(item.headline || item.subheader) && (
                        <HeadlineBlock item={item} well={well} columns={columns} isBeaconHero={item.isBeaconHero} modType={type} />
                    )}
                </>
            ) : (
                <>
                    {(item.headline || item.subheader) && (
                        <HeadlineBlock item={item} well={well} columns={columns} isBeaconHero={item.isBeaconHero} modType={type} />
                    )}

                    {item.image && (
                        <figure className={cn(styles['image-block'])} data-alt="Headline">
                            <ImageElement item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} />
                        </figure>
                    )}
                </>
            )}

            {item.desc && (
                <div className={cn(styles['txt-block'])}>
                    <div
                        className={cn(styles['dsc-block'], styles[`${item.descSize}`], 'txt-font', {
                            ['accent-txt']: well || item.isBeaconHero,
                            ['txt-color']: !well && !item.isBeaconHero,
                        })}
                    >
                        <p className={cn(styles['dsc'])}>{Parser(item.desc)}</p>
                    </div>
                </div>
            )}
            {item.visibleButton && <Button well={well} modId={modId} type={type} columns={columns} themeStyles={themeStyles} {...item} />}
        </>
    )
}

export default Article
