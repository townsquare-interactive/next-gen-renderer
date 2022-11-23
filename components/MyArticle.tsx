'use client'
import styles from './myArticle.module.scss'
import { ArticleProps, ItemWrapProps, ModuleItemProps, HeaderBlockProps } from '../types'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { ConditionalWrapper } from '../functions'
import { ReactChild } from 'react'
import Link from 'next/link'
import { Button } from '../elements/MyButton'
import { MyImage } from '../elements/MyImage'
import ModuleTitle from 'elements/ModuleTitle'

const MyArticle = (props: ArticleProps) => {
    const { width = '1060', columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl, disabled } = props

    if (disabled != 'disabled') {
        return (
            <div
                className={cn(styles['root'], styles['tsflex'], styles['grid'], /* styles['item-flex'], */ styles['root-container'], styles[`col_${columns}`], {
                    [styles.a1]: type === 'article_1',
                    [styles.a2]: type === 'article_2',
                    [styles.a3]: type === 'article_3',
                    [styles.beacon]: type === 'article',
                    [styles.well]: well == '1',
                    [styles.not_well]: !well,
                    [styles.large]: columns == 1 && (width === '736' || width === '652' || width === '938' || width === '1060' || width === '988'),
                    [styles.medium]: columns == 2,
                    [styles.small]: columns == 3 || columns == 4,
                    [styles[`cst_${props.class}`]]: props.class,
                    [styles['full-width']]: width === '938' || width === '1060' || width === '988' || !width,
                    [styles['med-width']]: width === '736' || width === '652',
                })}
                id={`id_${modId}`}
            >
                {title && <ModuleTitle title={title} />}
                <div className={styles.wrapper}>
                    {items.map((item, index) =>
                        item.disabled != 'disabled' ? (
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
                        )
                    )}
                </div>
            </div>
        )
    } else return <></>
}

const ModuleItem = (props: ModuleItemProps) => {
    const { item, modId, itemIndex, cmsUrl, themeStyles, type, imgsize, columns, well } = props

    const noBackground = {
        backgroundColor: 'transparent',
    }
    const borderBackground = {
        backgroundColor: themeStyles['accentBackgroundColor'],
    }
    const heroBackground = {
        backgroundColor: themeStyles['altColor'],
    }

    function isButton() {
        if (item.actionlbl || item.actionlbl2) {
            return true
        } else {
            return false
        }
    }

    function isLink() {
        if (item.pagelink || item.pagelink2 || item.weblink || item.weblink2) {
            return true
        } else {
            return false
        }
    }

    const oneButton =
        (item.actionlbl && !item.actionlbl2 && (item.pagelink || item.weblink)) || (!item.actionlbl && item.actionlbl2 && (item.pagelink2 || item.weblink2))
    const twoButtons = item.actionlbl && item.actionlbl2 && (item.pagelink || item.weblink) && (item.pagelink2 || item.weblink2)
    const linkNoBtn = isButton() === false && isLink() === true
    const wrapLink = (oneButton || linkNoBtn) && type != 'article'

    return (
        <article
            className={cn(
                styles['item'],
                styles[`${item.align}`],
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
                    [styles.mod_center]: item.align === 'center' && (type === 'article_3' || type === 'article'),
                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !twoButtons,
                    [styles.yLks]: twoButtons,
                },
                `item_${itemIndex + 1}`,
                styles[`item_${itemIndex + 1}`]
            )}
            lang="en"
            style={well == '1' ? borderBackground : noBackground}
        >
            <ConditionalWrapper
                condition={wrapLink ? true : false}
                trueOutput={(children: ReactChild) => (
                    <Link
                        href={item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''}
                        passHref={item.weblink || item.weblink2 ? true : false}
                        className={cn('btn_link')}
                        target={item.newwindow == 1 ? '_blank' : item.newwindow2 == 1 ? '_blank' : '_self'}
                        aria-label={item.headline || 'block-link'}
                    >
                        <div
                            className={cn(styles['item-wrap'], 'btn_link')}
                            style={item.isFeatured === 'active' && type === 'article' ? heroBackground : noBackground}
                            aria-label={item.headline || 'item-wrap'}
                        >
                            {children}
                        </div>
                    </Link>
                )}
                falseOutput={(children: ReactChild) => (
                    <div className={styles['item-wrap']} style={item.isFeatured === 'active' && type === 'article' ? heroBackground : noBackground}>
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

    //Check if item is on beacon theme and hero
    const isBeaconHero = type === 'article' && isFeatured === 'active'

    const linkAndBtn =
        (item.actionlbl && item.pagelink) || (item.actionlbl && item.weblink) || (item.actionlbl2 && item.pagelink2) || (item.actionlbl2 && item.weblink2)

    return (
        <>
            {props.type != 'article_2' ? (
                <>
                    {item.image && (
                        <figure className={cn(styles['image-block'])} data-alt="Headline">
                            <MyImage item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} />
                        </figure>
                    )}
                    {(item.headline || item.subheader) && <HeaderBlock item={item} well={well} columns={columns} isBeaconHero={isBeaconHero} />}
                </>
            ) : (
                <>
                    {(item.headline || item.subheader) && <HeaderBlock item={item} well={well} columns={columns} isBeaconHero={isBeaconHero} />}

                    {item.image && (
                        <figure className={cn(styles['image-block'])} data-alt="Headline">
                            <MyImage item={item} imgsize={imgsize} well={well} cmsUrl={cmsUrl} />
                        </figure>
                    )}
                </>
            )}

            {item.desc && (
                <div className={cn(styles['txt-block'])}>
                    <div
                        className={cn(styles['dsc-block'], styles[`${item.descSize}`], {
                            ['accent-txt']: well || isBeaconHero,
                            ['txt-color']: !well && !isBeaconHero,
                        })}
                    >
                        <p className={cn(styles['dsc'])}>{Parser(item.desc)}</p>
                    </div>
                </div>
            )}
            {linkAndBtn && (
                <Button
                    pagelink={item.pagelink}
                    actionlbl={item.actionlbl}
                    newwindow={item.newwindow}
                    newwindow2={item.newwindow2}
                    actionlbl2={item.actionlbl2}
                    pagelink2={item.pagelink2}
                    weblink2={item.weblink2}
                    weblink={item.weblink}
                    icon={item.icon}
                    icon2={item.icon2}
                    btnType={item.btnType}
                    btnType2={item.btnType2}
                    themeStyles={themeStyles}
                    btnSize={item.btnSize}
                    btnSize2={item.btnSize2}
                    well={well}
                    modId={modId}
                    type={type}
                    align={align}
                    columns={columns}
                />
            )}
        </>
    )
}

const HeaderBlock = (props: HeaderBlockProps) => {
    const { item, columns, well, isBeaconHero } = props
    //Finding tag types for headline and subjeadline
    const HeadTag = decideHeadTag('hd')
    const SubTag = decideHeadTag('sh')

    function decideHeadTag(tag: string) {
        if (columns === 4) {
            return 'h5'
        }
        if (columns === 3) {
            return 'h4'
        } else if (columns === 2) {
            return 'h2'
        } else if (columns === 1 && item.headerTag === '1' && tag === 'hd') {
            return 'h1'
        } else {
            return 'h2'
        }
    }

    return (
        <header className={cn(styles['hd-block'], styles[`${item.headSize}`])}>
            {item.headline && (
                <HeadTag
                    className={cn(styles['hd'], {
                        ['accent-txt']: well || isBeaconHero,
                        ['txt-color-heading']: !well && !isBeaconHero,
                    })}
                >
                    {Parser(item.headline)}
                </HeadTag>
            )}

            {item.subheader && (
                <SubTag
                    className={cn(styles['sh'], {
                        ['accent-txt']: well || isBeaconHero,
                        ['txt-color-heading']: !well && !isBeaconHero,
                    })}
                >
                    {Parser(item.subheader)}
                </SubTag>
            )}
        </header>
    )
}

export default MyArticle
