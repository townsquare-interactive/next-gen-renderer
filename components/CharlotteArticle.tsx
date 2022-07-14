import styles from './CharlotteArticle.module.scss'
import { ArticleProps, Media, TheListItemImageProps, TheListItemActionProps } from './types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage } from '../functions'
import { useState } from 'react'
import Link from 'next/link'

const CharlotteArticle = (props: ArticleProps) => {
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)
    const [lightbox, setLightbox] = useState(false)

    function toggleSwitch() {
        setLightbox(!lightbox)
        console.log(lightbox)
    }

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
    const accentColors = {
        color: props.themeStyles['textColorAccent'],
        backgroundColor: props.themeStyles['mainColor'],
    }

    //non constrained images
    const imageNoSizings = ['no_sizing', 'no_set_height']

    return (
        <div
            id="section_1"
            className={cn(
                styles['tsB'],
                styles['tsT_article'],
                styles['tsflex'],

                {
                    [styles.a1]: props.type === 'article_1',
                    [styles.a2]: props.type === 'article_2',
                    [styles.a3]: props.type === 'article_3',
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
                    [styles.not_well]: props.well === '',
                    [styles.large]: props.columns === 1,
                    [styles.medium]: props.columns === 2,
                    [styles.small]: props.columns === 3 || props.columns === 4,
                    [styles.col_1]: props.columns === 1,
                    [styles.col_2]: props.columns === 2,
                    [styles.col_3]: props.columns === 3,
                    [styles.col_4]: props.columns === 4,
                    [styles[`tsD_${props.class}`]]: props.class,
                }
            )}
        >
            <div className={styles.tsR}>
                {props.title && (
                    <h2 className={cn(styles['tsB_hd'], styles['section_title'])} data-title="module headline" style={textColorHeading}>
                        <span>{props.title}</span>
                    </h2>
                )}
                {props.items.map((item, index) =>
                    item.disabled != 'disabled' ? (
                        <article
                            className={cn(
                                styles['tsI'],
                                {
                                    [styles.right]: item.align === 'right',
                                    [styles.left]: item.align === 'left',
                                    [styles.yHero]: item.isFeatured === 'active',
                                    [styles.nHero]: !item.isFeatured,
                                    [styles.yDsc]: item.desc,
                                    [styles.nDsc]: !item.desc,
                                    [styles.nImg]: !item.image,
                                    [styles.yImg]: item.image,
                                    [styles.yHeads]: item.headline || item.subheader,
                                    [styles.nHeads]: !item.headline || !item.subheader,
                                    [styles.center]: item.align === 'center',
                                    [styles.mod_left]: item.align === 'left' && props.type === 'article_3',
                                    [styles.mod_right]: item.align === 'right' && props.type === 'article_3',
                                    [styles.mod_center]: item.align === 'center' && props.type === 'article_3',
                                },
                                styles[`item_${index + 1}`]
                            )}
                            lang="en"
                            key={index}
                            data-aos="fade-up"
                            data-aos-once="true"
                            style={props.well ? borderBackground : noBackground}
                        >
                            {props.type === 'article_1' ? (
                                <TheListWrapV1
                                    item={item}
                                    imageNoSizings={imageNoSizings}
                                    calcImageSize={calcImageSize}
                                    imageWidth={imageWidth}
                                    imageHeight={imageHeight}
                                    textColorAccent={textColorAccent}
                                    textColor={textColor}
                                    imgSize={props.imgSize}
                                    well={props.well}
                                    textColorHeading={textColorHeading}
                                />
                            ) : props.type === 'article_2' ? (
                                <TheListWrapV2
                                    item={item}
                                    imageNoSizings={imageNoSizings}
                                    calcImageSize={calcImageSize}
                                    imageWidth={imageWidth}
                                    imageHeight={imageHeight}
                                    textColorAccent={textColorAccent}
                                    textColor={textColor}
                                    imgSize={props.imgSize}
                                    well={props.well}
                                    textColorHeading={textColorHeading}
                                />
                            ) : props.type === 'article_3' ? (
                                <TheListWrapV3
                                    item={item}
                                    imageNoSizings={imageNoSizings}
                                    calcImageSize={calcImageSize}
                                    imageWidth={imageWidth}
                                    imageHeight={imageHeight}
                                    textColorAccent={textColorAccent}
                                    textColor={textColor}
                                    imgSize={props.imgSize}
                                    well={props.well}
                                    textColorHeading={textColorHeading}
                                />
                            ) : (
                                ''
                            )}
                        </article>
                    ) : (
                        <></>
                    )
                )}
            </div>
        </div>
    )
}

const TheListWrapV1 = (props: any) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor, imgSize, well, textColorHeading } = props
    return (
        <div className={styles['tsI_wrp']}>
            {item.image && (
                <figure
                    className={cn(styles['tsI_img'], styles['theframe'], styles['imgtag'], styles['imgbase'], styles['img-loaded'])}
                    data-image=""
                    data-alt="Headline"
                    /*  style="margin-bottom: 0.5625em;" */
                    data-image-loaded=""
                >
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
                    />
                </figure>
            )}

            <div className={styles['tsI_txt']}>
                <header className={styles['tsI_hds']}>
                    {item.headerTag === '1' ? (
                        <h1 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                            {item.headline}
                        </h1>
                    ) : (
                        <h2 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                            {item.headline}
                        </h2>
                    )}
                    <h2 className={styles['tsI_sh']} style={props.well ? textColorAccent : textColorHeading}>
                        {item.subheader}
                    </h2>
                </header>

                <div className={styles['tsI_dsc_wrp']}>
                    <div className={styles['tsI_dsc']} style={props.well || item.isFeatured ? textColorAccent : textColorHeading}>
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TheListWrapV2 = (props: any) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor, imgSize, well, textColorHeading } = props
    return (
        <div className={styles['tsI_wrp']}>
            <header className={styles['tsI_hds']}>
                {item.headerTag === '1' ? (
                    <h1 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                        {item.headline}
                    </h1>
                ) : (
                    <h2 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                        {item.headline}
                    </h2>
                )}
                <h2 className={styles['tsI_sh']} style={props.well ? textColorAccent : textColorHeading}>
                    {item.subheader}
                </h2>
            </header>
            {item.image && (
                <figure
                    className={cn(styles['tsI_img'], styles['theframe'], styles['imgtag'], styles['imgbase'], styles['img-loaded'])}
                    data-image=""
                    data-alt="Headline"
                    data-image-loaded=""
                >
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
                    />
                </figure>
            )}

            <div className={styles['tsI_txt']}>
                <div className={styles['tsI_dsc_wrp']}>
                    <div className={styles['tsI_dsc']} style={props.well || item.isFeatured ? textColorAccent : textColorHeading}>
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TheListWrapV3 = (props: any) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor, imgSize, well, textColorHeading } = props
    return (
        <div className={styles['tsI_wrp']}>
            <div className={styles['tsI_txt_wrap']}>
                {item.image && (
                    <figure
                        className={cn(styles['tsI_img'], styles['theframe'], styles['imgtag'], styles['imgbase'], styles['img-loaded'])}
                        data-image=""
                        data-alt="Headline"
                        data-image-loaded=""
                    >
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
                        />
                    </figure>
                )}

                <div className={styles['tsI_txt']}>
                    <header className={styles['tsI_hds']}>
                        {item.headerTag === '1' ? (
                            <h1 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                                {item.headline}
                            </h1>
                        ) : (
                            <h2 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                                {item.headline}
                            </h2>
                        )}
                        <h2 className={styles['tsI_sh']} style={props.well ? textColorAccent : textColorHeading}>
                            {item.subheader}
                        </h2>
                    </header>

                    <div className={styles['tsI_dsc_wrp']}>
                        <div className={styles['tsI_dsc']} style={props.well || item.isFeatured ? textColorAccent : textColorHeading}>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TheListItemAction = (props: TheListItemActionProps) => {
    return (
        <div className={styles.the_list_item_action}>
            <Link href={props.pagelink}>
                <a target={props.newwindow === 1 ? '_blank' : '_self'} className="accent_color_bg accent_txt_color" style={props.accentColors}>
                    {props.actionlbl}
                </a>
            </Link>
        </div>
    )
}
const TheListItemImage = (props: TheListItemImageProps) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor } = props

    return (
        /*  <div
            className={cn(styles['tsI_img'], {
                [styles.right]: item.align === 'right',
                [styles.left]: item.align === 'left',
            })}
        > */
        <>
            <div className={styles.image}>
                {item.pagelink ? (
                    <Link href={item.pagelink}>
                        <a target={item.newwindow === 1 ? '_blank' : '_self'} className="accent_color_bg accent_txt_color">
                            {!imageNoSizings.includes(props.imgSize) ? (
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
                /* <div className={styles['the_list_item_caption']} style={props.well || item.isFeatured ? textColorAccent : textColor}>
                    caption
                </div> */
                <figcaption style={textColorAccent}>{item.caption_tag}</figcaption>
            )}
        </>
    )
}

const Lightbox = (props: any) => {
    const { item, lightbox, toggleSwitch } = props

    return (
        <div
            className={cn(styles.lightboxOverlay, {
                [styles.active]: lightbox === true,
            })}
        >
            <div onClick={toggleSwitch}>
                <div className={styles.lightbox}>
                    <div className={styles['lb-container']}>
                        <div className={styles['lb-image']}>
                            <Image
                                className={cn(styles['item_image'], 'item_image', 'beacon-lazy-load')}
                                src={domainImage(item.image)}
                                layout="fill"
                                alt={item.img_alt_tag || ''}
                                objectFit="cover"
                                objectPosition="top"
                            />
                        </div>

                        <div className={styles['lb-dataContainer']}>
                            <div className={styles['lb-data']}>
                                <div className={styles['lb-details']}>
                                    <span className={styles['lb-caption']}>lightbox</span>

                                    <span className={styles['lb-number']}></span>
                                </div>
                                <div className={styles['lb-closeContainer']}>
                                    <a className={styles['lb-close']}></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharlotteArticle
