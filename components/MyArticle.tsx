'use client'
import styles from './myArticle.module.scss'
import { ArticleProps, ItemWrapProps, ModuleItemProps, HeaderBlock } from '../types'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { ConditionalWrapper } from '../functions'
import { ReactChild } from 'react'
import Link from 'next/link'
import { Button } from '../elements/MyButton'
import { MyImage } from '../elements/MyImage'

// importing fontAwesome icons
import { faRocket, faAnchor, faArchway } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const MyArticle = (props: ArticleProps) => {
    const { width = '1060', columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl, disabled } = props
    //Defining style objects
    const textColorHeading = {
        color: themeStyles['headingColor'],
    }

    if (disabled != 'disabled') {
        return (
            <div
                className={cn(styles['root'], styles['tsflex'], styles['root-contain'], styles[`col_${columns}`], {
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
                <div className={styles.wrapper}>
                    {title && (
                        <h2 className={cn(styles['mod-title'], styles['section_title'])} data-title="module headline" style={textColorHeading}>
                            <span>{title}</span>
                        </h2>
                    )}
                    {items.map((item, index) =>
                        item.disabled != 'disabled' ? (
                            <ModuleItem
                                item={item}
                                well={well}
                                modId={modId}
                                themeStyles={themeStyles}
                                textColorHeading={textColorHeading}
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
    const { item, modId, itemIndex, cmsUrl, themeStyles, type, textColorHeading, imgsize, columns, well } = props

    //Defining style objects
    const textColor = {
        color: themeStyles['textColor'],
    }

    const textColorAccent = {
        color: themeStyles['textColorAccent'],
    }

    const noBackground = {
        backgroundColor: 'transparent',
    }
    const borderBackground = {
        backgroundColor: themeStyles['accentBackgroundColor'],
    }
    const heroBackground = {
        backgroundColor: themeStyles['altColor'],
    }

    //Key to determine which imported logo to use
    const icons: { [key: string]: IconProp } = {
        faRocket,
        faAnchor,
        faArchway,
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
            data-aos="fade-up"
            data-aos-once="true"
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
                    textColorAccent={textColorAccent}
                    textColor={textColor}
                    imgsize={imgsize}
                    well={well}
                    textColorHeading={textColorHeading}
                    icons={icons}
                    icon3={item.icon3}
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
    const { item, textColorAccent, textColor, imgsize, well, icons, icon3, isFeatured, themeStyles, type, modId, cmsUrl, columns, align } = props

    //Check if item is on beacon theme and hero
    const beaconHero = type === 'article' && isFeatured === 'active'

    const linkAndBtn =
        (item.actionlbl && item.pagelink) || (item.actionlbl && item.weblink) || (item.actionlbl2 && item.pagelink2) || (item.actionlbl2 && item.weblink2)

    return (
        <>
            {props.type != 'article_2' ? (
                <>
                    {item.image && (
                        <figure className={cn(styles['image-block'])} data-alt="Headline">
                            <MyImage
                                item={item}
                                textColorAccent={textColorAccent}
                                textColor={textColor}
                                imgsize={imgsize}
                                well={well}
                                //temp: can prob call icons in Image
                                icons={icons}
                                icon3={icon3}
                                cmsUrl={cmsUrl}
                            />
                        </figure>
                    )}
                    {(item.headline || item.subheader) && <HeaderBlock item={item} well={well} columns={columns} beaconHero={beaconHero} />}
                </>
            ) : (
                <>
                    {(item.headline || item.subheader) && <HeaderBlock item={item} well={well} columns={columns} beaconHero={beaconHero} />}

                    {item.image && (
                        <figure className={cn(styles['image-block'])} data-alt="Headline">
                            <MyImage
                                item={item}
                                textColorAccent={textColorAccent}
                                textColor={textColor}
                                imgsize={imgsize}
                                well={well}
                                //temp: can prob call icons in Image
                                icons={icons}
                                icon3={icon3}
                                cmsUrl={cmsUrl}
                            />
                        </figure>
                    )}
                </>
            )}

            {item.desc && (
                <div className={cn(styles['txt-block'])}>
                    <div
                        className={cn(styles['dsc-block'], styles[`${item.descSize}`], {
                            ['accent-txt']: well || beaconHero,
                            ['txt-color']: !well && !beaconHero,
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
                    icons={icons}
                    btnType={item.btnType}
                    btnType2={item.btnType2}
                    themeStyles={themeStyles}
                    btnSize={item.btnSize}
                    btnSize2={item.btnSize2}
                    well={well}
                    modId={modId}
                    type={type}
                    align={align}
                />
            )}
        </>
    )
}

const HeaderBlock = (props: HeaderBlock) => {
    const { item, columns, well, beaconHero } = props
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
                        ['accent-txt']: well || beaconHero,
                        ['txt-color-heading']: !well && !beaconHero,
                    })}
                >
                    {Parser(item.headline)}
                </HeadTag>
            )}

            {item.subheader && (
                <SubTag
                    className={cn(styles['sh'], {
                        ['accent-txt']: well || beaconHero,
                        ['txt-color-heading']: !well && !beaconHero,
                    })}
                >
                    {Parser(item.subheader)}
                </SubTag>
            )}
        </header>
    )
}

/* const ImageBlock = (props: MyImagesProps) => {
    const { item, textColor, imgsize, well, icon3, cmsUrl, textColorAccent, icons } = props

    return (
        <figure className={cn(styles['image-block'])} data-alt="Headline">
            <MyImage
                item={item}
                textColorAccent={textColorAccent}
                textColor={textColor}
                imgsize={imgsize}
                well={well}
                //temp: can prob call icons in Image
                icons={icons}
                icon3={icon3}
                cmsUrl={cmsUrl}
            />
        </figure>
    )
} */

export default MyArticle
