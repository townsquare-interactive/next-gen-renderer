import styles from './article.module.scss'
import { ArticleProps, Media, TheListItemActionProps, TheListItemImageProps } from './types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage } from '../functions'
import { useState } from 'react'
import Link from 'next/link'

// importing fontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import your icons
import { faRocket, faAnchor, faArchway } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Article = (props: ArticleProps) => {
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)

    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    //Defining style objects
    const textColor = {
        color: props.themeStyles['textColor'],
    }

    const textColorHeading = {
        color: props.themeStyles['headingColor'],
    }
    const textColorAccent = {
        color: props.themeStyles['textColorAccent'],
    }
    const accentBackground = {
        backgroundColor: props.themeStyles['mainColor'],
    }
    const noBackground = {
        backgroundColor: 'transparent',
    }
    const borderBackground = {
        backgroundColor: props.themeStyles['headerBackground'],
    }

    const icons: { [key: string]: any } = {
        faRocket,
        faAnchor,
        faArchway,
    }

    //non constrained images
    const imageNoSizings = ['no_sizing', 'no_set_height']

    return (
        <div
            id="section_1"
            className={cn(
                styles['list_block'],
                styles['type_article'],
                styles['a1'],

                {
                    [styles.square_1_1]: props.imgSize === 'square_1_1',
                    [styles.landscape_4_3]: props.imgSize === 'landscape_4_3',
                    [styles.landscape_3_2]: props.imgSize === 'landscape_3_2',
                    [styles.portrait_3_4]: props.imgSize === 'portrait_3_4',
                    [styles.portrait_2_3]: props.imgSize === 'portrait_2_3',
                    [styles.widescreen_16_9]: props.imgSize === 'widescreen_16_9',
                    [styles.widescreen_3_1]: props.imgSize === 'widescreen_3_1',
                    [styles.widescreen_2_4_1]: props.imgSize === 'widescreen_2_4_1',
                    [styles.no_sizing]: props.imgSize === 'no_sizing',
                    [styles.no_set_height]: props.imgSize === 'no_set_height',
                    [styles.well]: props.well === '1',
                    [styles.not_well]: !props.well,
                    [styles.large]: props.columns === 1,
                    [styles.medium]: props.columns === 2,
                    [styles.small]: props.columns === 3 || props.columns === 4,
                    [styles.column_amt_1]: props.columns === 1,
                    [styles.column_amt_2]: props.columns === 2,
                    [styles.column_amt_3]: props.columns === 3,
                    [styles.column_amt_4]: props.columns === 4,
                    [styles[`tsidesign_${props.class}`]]: props.class,
                }
            )}
        >
            {props.title && (
                <h2
                    className={cn(styles['list_block_headline'], { [styles.ts_hidden]: props.hideTitle === 0 })}
                    data-title="With Button"
                    style={textColorHeading}
                >
                    <span>{props.title}</span>
                </h2>
            )}
            {props.items.map((item, index) =>
                item.disabled != 'disabled' ? (
                    <div
                        className={cn(
                            styles['the_list_item'],
                            {
                                [styles.the_list_item_right]: item.align === 'right',
                                [styles.the_list_item_left]: item.align === 'left',
                                [styles.hero]: item.isFeatured === 'active',
                                [styles.not_hero]: !item.isFeatured,
                                [styles.yes_desc]: item.desc,
                                [styles.no_desc]: !item.desc,
                                [styles.no_image]: !item.image,
                                [styles.yes_image]: item.image,
                            },
                            styles[`item_${index + 1}`]
                        )}
                        lang="en"
                        key={index}
                    >
                        <div className={styles.the_list_wrap} style={item.isFeatured ? accentBackground : props.well ? borderBackground : noBackground}>
                            {item.image && (
                                <TheListItemImage
                                    item={item}
                                    imageNoSizings={imageNoSizings}
                                    calcImageSize={calcImageSize}
                                    imageWidth={imageWidth}
                                    imageHeight={imageHeight}
                                    textColorAccent={textColorAccent}
                                    textColor={textColor}
                                    imgSize={props.imgSize}
                                    well={props.well}
                                    icons={icons}
                                />
                            )}

                            <div className={styles['the_list_item_heads']}>
                                {item.headline &&
                                    (item.headerTag === '1' ? (
                                        <h1
                                            className={cn(styles['the_list_item_headline'], styles['hds_color'])}
                                            style={props.well || item.isFeatured ? textColorAccent : textColorHeading}
                                        >
                                            {Parser(item.headline)}
                                        </h1>
                                    ) : (
                                        <h3
                                            className={cn(styles['the_list_item_headline'], styles['hds_color'])}
                                            style={props.well || item.isFeatured ? textColorAccent : textColorHeading}
                                        >
                                            {Parser(item.headline)}
                                        </h3>
                                    ))}
                                {item.subheader && (
                                    <h3
                                        className={cn(styles['the_list_item_subheadline'], styles['hds_color'])}
                                        style={props.well || item.isFeatured ? textColorAccent : textColorHeading}
                                    >
                                        {Parser(item.subheader)}
                                    </h3>
                                )}
                            </div>
                            <div
                                className={cn(styles['the_list_item_desc'], styles['txt_color'])}
                                style={props.well || item.isFeatured ? textColorAccent : textColor}
                            >
                                <p>{Parser(item.desc)}</p>
                            </div>
                            {item.pagelink && item.actionlbl && (
                                <TheListItemAction
                                    pagelink={item.pagelink}
                                    actionlbl={item.actionlbl}
                                    newwindow={item.newwindow}
                                    themeStyles={props.themeStyles}
                                    icons={icons}
                                    btnSize={item.btnSize}
                                    btnSize2={item.btnSize}
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    <></>
                )
            )}
        </div>
    )
}

const TheListItemAction = (props: TheListItemActionProps) => {
    const btn1Styles = {
        color: props.themeStyles['textColorAccent'],
        backgroundColor: props.themeStyles['mainColor'],
    }

    return (
        <div className={styles.the_list_item_action}>
            {props.pagelink ? (
                <Link href={props.pagelink}>
                    <a target={props.newwindow === 1 ? '_blank' : '_self'} className="accent_color_bg accent_txt_color" style={btn1Styles}>
                        {props.actionlbl}
                    </a>
                </Link>
            ) : (
                props.weblink && (
                    <Link href={props.weblink}>
                        <a target={props.newwindow === 1 ? '_blank' : '_self'} className="accent_color_bg accent_txt_color" style={btn1Styles}>
                            {props.actionlbl}
                        </a>
                    </Link>
                )
            )}
        </div>
    )
}
const TheListItemImage = (props: TheListItemImageProps) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor, imgSize, well } = props

    return (
        <div
            className={cn(styles['the_list_item_image'], {
                [styles.right]: item.align === 'right',
                [styles.left]: item.align === 'left',
            })}
        >
            <div className={styles.image}>
                {item.pagelink ? (
                    <Link href={item.pagelink}>
                        <a target={item.newwindow === 1 ? '_blank' : '_self'} className="accent_color_bg accent_txt_color">
                            {!imageNoSizings.includes(imgSize) ? (
                                <Image
                                    className={cn(styles['item_image'], 'item_image', 'beacon-lazy-load')}
                                    src={domainImage(item.image)}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={item.img_alt_tag || ''}
                                    objectPosition="top"
                                />
                            ) : (
                                //Setting width and height to image props if nosizing added
                                <Image
                                    src={domainImage(item.image)}
                                    onLoadingComplete={calcImageSize}
                                    width={imageWidth}
                                    height={imageHeight}
                                    layout="responsive"
                                    alt={item.img_alt_tag || ''}
                                    objectPosition="top"
                                />
                            )}
                        </a>
                    </Link>
                ) : (
                    //had to add an extra div here
                    <>
                        {!imageNoSizings.includes(props.imgSize) ? (
                            <Image
                                className={cn(styles['item_image'], 'item_image', 'beacon-lazy-load')}
                                src={domainImage(item.image)}
                                layout="fill"
                                alt={item.img_alt_tag || ''}
                                objectFit="cover"
                                objectPosition="top"
                            />
                        ) : (
                            //Setting width and height to image props if nosizing added
                            <Image
                                className={cn(styles['item_image'], 'item_image', 'beacon-lazy-load')}
                                src={domainImage(item.image)}
                                alt={item.img_alt_tag || ''}
                                onLoadingComplete={calcImageSize}
                                width={imageWidth}
                                height={imageHeight}
                                layout="responsive"
                                objectPosition="top"
                            />
                        )}
                    </>
                )}
            </div>

            {item.caption_tag && (
                <div className={styles['the_list_item_caption']} style={well || item.isFeatured ? textColorAccent : textColor}>
                    caption
                </div>
            )}
        </div>
    )
}

export default Article
