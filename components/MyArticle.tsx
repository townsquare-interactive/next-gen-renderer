import styles from './myArticle.module.scss'
import { ArticleProps, Media, TheListItemImageProps, TheListItemActionProps } from './types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage } from '../functions'
import { useState } from 'react'
import Link from 'next/link'

// importing fontAwesome
/* import { library } from '@fortawesome/fontawesome-svg-core' */
// import your icons
import { faRocket, faAnchor, faArchway } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyArticle = (props: ArticleProps) => {
    //Defining style objects
    const textColorHeading = {
        color: props.themeStyles['headingColor'],
    }

    return (
        <div
            className={cn(
                styles['root'],
                styles['tsflex'],
                /*  styles['ts-box'], */

                {
                    [styles.a1]: props.type === 'article_1',
                    [styles.a2]: props.type === 'article_2',
                    [styles.a3]: props.type === 'article_3',
                    [styles.beacon]: props.type === 'article',
                    [styles.well]: props.well === '1',
                    [styles.not_well]: !props.well,
                    [styles.large]: props.columns === 1,
                    [styles.medium]: props.columns === 2,
                    [styles.small]: props.columns === 3 || props.columns === 4,
                    [styles.col_1]: props.columns === 1,
                    [styles.col_2]: props.columns === 2,
                    [styles.col_3]: props.columns === 3,
                    [styles.col_4]: props.columns === 4,
                    [styles[`tsD_${props.class}`]]: props.class,
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
                }
            )}
        >
            <div className={styles.wrapper}>
                {props.title && (
                    <h2 className={cn(styles['mod-title'], styles['section_title'])} data-title="module headline" style={textColorHeading}>
                        <span>{props.title}</span>
                    </h2>
                )}
                {props.items.map((item, index) =>
                    /* item.disabled != 'disabled' ? (
                        <article
                            className={cn(
                                styles['item'],
                                {
                                    [styles.right]: item.align === 'right',
                                    [styles.left]: item.align === 'left',
                                    [styles.yHero]: item.isFeatured === 'active',
                                    [styles.nHero]: !item.isFeatured,
                                    [styles.yDsc]: item.desc,
                                    [styles.nDsc]: !item.desc,
                                    [styles.nImg]: !item.image,
                                    [styles.yImg]: item.image,
                                    [styles.yHds]: item.headline || item.subheader,
                                    [styles.nHds]: !item.headline || !item.subheader,
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
                            style={props.well === '1' ? borderBackground : noBackground}
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
                                <ItemWrap
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
                    ) */
                    item.disabled != 'disabled' ? (
                        <ModuleItem
                            item={item}
                            well={props.well}
                            index={index}
                            themeStyles={props.themeStyles}
                            textColorHeading={textColorHeading}
                            key={index}
                            imgSize={props.imgSize}
                            type={props.type}
                        />
                    ) : (
                        <></>
                    )
                )}
            </div>
        </div>
    )
}

const ModuleItem = (props: any) => {
    const { item } = props
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)
    const [lightbox, setLightbox] = useState(false)

    /*     function toggleSwitch() {
        setLightbox(!lightbox)
        console.log(lightbox)
    } */

    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    //Defining style objects
    const textColor = {
        color: props.themeStyles['textColor'],
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
    const heroBackground = {
        backgroundColor: props.themeStyles['altColor'],
    }
    const accentColors = {
        color: props.themeStyles['textColorAccent'],
        backgroundColor: props.themeStyles['mainColor'],
    }

    const icons: { [key: string]: any } = {
        faRocket,
        faAnchor,
        faArchway,
    }

    //non constrained images
    const imageNoSizings = ['no_sizing', 'no_set_height']

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

    const oneButton = (item.actionlbl && !item.actionlbl2) || (!item.actionlbl && item.actionlbl2)

    const twoButtons = item.actionlbl && item.actionlbl2 && (item.pagelink || item.weblink) && (item.pagelink2 || item.weblink2)

    const linkNoBtn = isButton() === false && isLink() === true

    const wrapLink = oneButton || linkNoBtn

    const linkAndBtn =
        (item.actionlbl && item.pagelink) || (item.actionlbl && item.weblink) || (item.actionlbl2 && item.pagelink2) || (item.actionlbl2 && item.weblink2)

    return (
        <article
            className={cn(
                styles['item'],
                {
                    [styles.right]: item.align === 'right',
                    [styles.left]: item.align === 'left',
                    [styles.hero]: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yDsc]: item.desc,
                    [styles.nDsc]: !item.desc,
                    [styles.nImg]: !item.image,
                    [styles.yImg]: item.image,
                    [styles.yHds]: item.headline || item.subheader,
                    [styles.nHds]: !item.headline || !item.subheader,
                    [styles.center]: item.align === 'center',
                    [styles.mod_left]: item.align === 'left' && (props.type === 'article_3' || props.type === 'article'),
                    [styles.mod_right]: item.align === 'right' && (props.type === 'article_3' || props.type === 'article'),
                    [styles.mod_center]: item.align === 'center' && (props.type === 'article_3' || props.type === 'article'),
                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !twoButtons,
                    [styles.yLks]: twoButtons,
                },
                styles[`item_${props.index + 1}`]
            )}
            lang="en"
            data-aos="fade-up"
            data-aos-once="true"
            style={props.well === '1' ? borderBackground : noBackground}
        >
            {!wrapLink ? (
                <div className={styles['item-wrap']} style={item.isFeatured && props.type === 'article' ? heroBackground : noBackground}>
                    <ItemWrap
                        item={item}
                        imageNoSizings={imageNoSizings}
                        calcImageSize={calcImageSize}
                        imageWidth={imageWidth}
                        imageHeight={imageHeight}
                        textColorAccent={textColorAccent}
                        textColor={textColor}
                        imgSize={props.imgSize}
                        well={props.well}
                        textColorHeading={props.textColorHeading}
                        icons={icons}
                        icon3={item.icon3}
                        type={props.type}
                        themeStyles={props.themeStyles}
                        isFeatured={item.isFeatured}
                    />

                    {linkAndBtn && (
                        <Button
                            pagelink={item.pagelink}
                            actionlbl={item.actionlbl}
                            newwindow={item.newwindow}
                            newwindow2={item.newwindow2}
                            actionlbl2={item.actionlbl2}
                            pagelink2={item.pagelink2}
                            weblink2={item.weblink2}
                            icon={item.icon}
                            icon2={item.icon2}
                            icons={icons}
                            btnType={item.btnType}
                            btnType2={item.btnType2}
                            themeStyles={props.themeStyles}
                            btnSize={item.btnSize}
                            btnSize2={item.btnSize2}
                            well={props.well}
                        />
                    )}
                </div>
            ) : (
                <Link href={item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''}>
                    <a
                        className={cn(styles['item-wrap'], 'btn_link')}
                        target={item.newwindow === 1 ? '_blank' : item.newwindow2 === 1 ? '_blank' : '_self'}
                        style={props.isFeatured && props.type === 'article' ? heroBackground : noBackground}
                    >
                        <ItemWrap
                            item={item}
                            imageNoSizings={imageNoSizings}
                            calcImageSize={calcImageSize}
                            imageWidth={imageWidth}
                            imageHeight={imageHeight}
                            textColorAccent={textColorAccent}
                            textColor={textColor}
                            imgSize={props.imgSize}
                            well={props.well}
                            textColorHeading={props.textColorHeading}
                            icons={icons}
                            icon3={item.icon3}
                            type={props.type}
                            themeStyles={props.themeStyles}
                            isFeatured={item.isFeatured}
                        />

                        {isButton() && (
                            <Button
                                pagelink={item.pagelink}
                                pagelink2={item.pagelink2}
                                weblink={item.weblink}
                                weblink2={item.weblink2}
                                actionlbl={item.actionlbl}
                                newwindow={item.newwindow}
                                newwindow2={item.newwindow2}
                                actionlbl2={item.actionlbl2}
                                icon={item.icon}
                                icon2={item.icon2}
                                icons={icons}
                                btnType={item.btnType}
                                btnType2={item.btnType2}
                                themeStyles={props.themeStyles}
                                btnSize={item.btnSize}
                                btnSize2={item.btnSize2}
                                well={props.well}
                            />
                        )}
                    </a>
                </Link>
            )}
        </article>
    )
}

const ItemWrap = (props: any) => {
    const {
        item,
        imageNoSizings,
        calcImageSize,
        imageWidth,
        imageHeight,
        textColorAccent,
        textColor,
        imgSize,
        well,
        textColorHeading,
        icons,
        icon3,
        isFeatured,
        themeStyles,
    } = props

    //Check if item is on beacon theme and hero
    const beaconHero = props.type === 'article' && isFeatured === 'active'

    //Colors of text with classes for normal/hero/border
    const textColors = `.accent-txt{color:${themeStyles['textColorAccent']}} .txt-color{color:{${themeStyles['txtColor']} .txt-color-heading{color:{${themeStyles['headingColor']}}`

    return (
        <>
            <style>{textColors}</style>

            {props.type != 'article_3' && props.type != 'article' ? (
                <>
                    {item.image && (
                        <figure
                            className={cn(styles['image-block'], styles['theframe'], styles['imgtag'], styles['imgbase'], styles['img-loaded'])}
                            data-alt="Headline"
                        >
                            <TheListItemImage
                                item={item}
                                imageNoSizings={imageNoSizings}
                                calcImageSize={calcImageSize}
                                imageWidth={imageWidth}
                                imageHeight={imageHeight}
                                textColorAccent={textColorAccent}
                                textColor={textColor}
                                imgSize={imgSize}
                                well={well}
                                icons={icons}
                                icon3={icon3}
                            />

                            {item.caption_tag && <figcaption style={textColorAccent}>{item.caption_tag}</figcaption>}
                        </figure>
                    )}

                    <header
                        className={cn(styles['hd-block'], {
                            [styles.font_xs]: item.headSize === 'font_xs',
                            [styles.font_sm]: item.headSize === 'font_sm',
                            [styles.font_md]: item.headSize === 'font_md',
                            [styles.font_lg]: item.headSize === 'font_lg',
                            [styles.font_xl]: item.headSize === 'font_xl',
                        })}
                    >
                        {item.headerTag === '1' ? (
                            <h1
                                className={cn(styles['hd'], {
                                    ['accent-txt']: well || beaconHero,
                                    ['txt-color-heading']: !well && !beaconHero,
                                })}
                            >
                                {Parser(item.headline)}
                            </h1>
                        ) : (
                            <h2
                                className={cn(styles['hd'], {
                                    ['accent-txt']: well || beaconHero,
                                    ['txt-color-heading']: !well && !beaconHero,
                                })}
                            >
                                {Parser(item.headline)}
                            </h2>
                        )}
                        <h2
                            className={cn(styles['sh'], {
                                ['accent-txt']: well || beaconHero,
                                ['txt-color-heading']: !well && !beaconHero,
                            })}
                        >
                            {Parser(item.subheader)}
                        </h2>
                    </header>
                    {item.desc && (
                        <div className={cn(styles['txt-block'])}>
                            <div className={styles['dsc-block']}>
                                <div
                                    className={cn(styles['dsc'], {
                                        [styles.font_xs]: item.descSize === 'font_xs',
                                        [styles.font_sm]: item.descSize === 'font_sm',
                                        [styles.font_md]: item.descSize === 'font_md',
                                        [styles.font_lg]: item.descSize === 'font_lg',
                                        [styles.font_xl]: item.descSize === 'font_xl',
                                        ['accent-txt']: well || beaconHero,
                                        ['txt-color']: !well && !beaconHero,
                                    })}
                                >
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className={cn(styles['txt-wrap'])}>
                    {item.image && (
                        <figure
                            className={cn(styles['image-block'], styles['theframe'], styles['imgtag'], styles['imgbase'], styles['img-loaded'])}
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
                                imgSize={imgSize}
                                well={well}
                                icons={icons}
                                icon3={icon3}
                            />

                            {item.caption_tag && <figcaption style={textColorAccent}>{item.caption_tag}</figcaption>}
                        </figure>
                    )}
                    <header
                        className={cn(styles['hd-block'], {
                            [styles.font_xs]: item.headSize === 'font_xs',
                            [styles.font_sm]: item.headSize === 'font_sm',
                            [styles.font_md]: item.headSize === 'font_md',
                            [styles.font_lg]: item.headSize === 'font_lg',
                            [styles.font_xl]: item.headSize === 'font_xl',
                        })}
                    >
                        {item.headerTag === '1' ? (
                            <h1
                                className={cn(styles['hd'], {
                                    ['accent-txt']: well || beaconHero,
                                    ['txt-color-heading']: !well && !beaconHero,
                                })}
                            >
                                {Parser(item.headline)}
                            </h1>
                        ) : (
                            <h2
                                className={cn(styles['hd'], {
                                    ['accent-txt']: well || beaconHero,
                                    ['txt-color-heading']: !well && !beaconHero,
                                })}
                            >
                                {Parser(item.headline)}
                            </h2>
                        )}
                        <h2
                            className={cn(styles['sh'], {
                                ['accent-txt']: well || beaconHero,
                                ['txt-color-heading']: !well && !beaconHero,
                            })}
                        >
                            {Parser(item.subheader)}
                        </h2>
                    </header>
                    {item.desc && (
                        <div className={cn(styles['txt-block'])}>
                            <div className={styles['dsc-block']}>
                                <div
                                    className={cn(styles['dsc'], {
                                        [styles.font_xs]: item.descSize === 'font_xs',
                                        [styles.font_sm]: item.descSize === 'font_sm',
                                        [styles.font_md]: item.descSize === 'font_md',
                                        [styles.font_lg]: item.descSize === 'font_lg',
                                        [styles.font_xl]: item.descSize === 'font_xl',
                                        ['accent-txt']: well || beaconHero,
                                        ['txt-color']: !well && !beaconHero,
                                    })}
                                >
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

const Button = (props: TheListItemActionProps) => {
    let icon = props.icon ? props.icons[props.icon] : faRocket
    let icon2 = props.icon2 ? props.icons[props.icon2] : faRocket

    /*     const btn1Styles = {
        color: props.themeStyles['textColorAccent'],
        backgroundColor: props.themeStyles['mainColor'],
    } */

    const btns = props.well
        ? `.btn1{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['mainColor']}} .btn_link:hover .btn1{color: ${props.themeStyles['mainColor']}; background-color: ${props.themeStyles['textColorAccent']}} .btn2{color: ${props.themeStyles['altColor']}; border-color: ${props.themeStyles['altColor']}} .btn_link:hover .btn2{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['altColor']}}`
        : `.btn1{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['mainColor']}} .btn1:hover{color: ${props.themeStyles['mainColor']}; background-color: ${props.themeStyles['textColorAccent']}} .btn2{color: ${props.themeStyles['altColor']}; border-color: ${props.themeStyles['altColor']}} .btn2:hover{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['altColor']}}`

    const link1 = props.pagelink || props.weblink

    const link2 = props.pagelink2 || props.weblink2

    let buttons = [
        {
            name: 'btn1',
            link: props.pagelink || props.weblink,
            window: props.newwindow,
            icons: props.icon,
            label: props.actionlbl,
            active: props.actionlbl ? true : false,
            btnType: props.btnType,
        },
        {
            name: 'btn2',
            link: props.pagelink2 || props.weblink2,
            window: props.newwindow2,
            icons: props.icon2,
            label: props.actionlbl2,
            active: props.actionlbl2 ? true : false,
            btnType2: props.btnType2,
        },
    ]

    return (
        <>
            <style>{btns}</style>
            {props.actionlbl2 && props.actionlbl ? (
                <div className={cn(styles['btn-wrap'], styles['text-wrap'])}>
                    <Link href={link1 || ''}>
                        <a
                            target={props.newwindow === 1 ? '_blank' : '_self'}
                            className={cn('btn_link', {
                                [styles.btn_block]: props.btnSize.includes('btn_block'),
                            })}
                        >
                            <div
                                className={cn(styles['btn'], styles['transition'], 'btn1', {
                                    [styles.btn_1]: props.btnType === 'btn_1' || !props.btnType,
                                    [styles.btn_2]: props.btnType === 'btn_2',
                                    [styles.btn_md]: props.btnSize === 'md' || props.btnSize === 'md btn_block' || !props.btnSize,
                                    [styles.btn_lg]: props.btnSize === 'lg' || props.btnSize === 'lg btn_block',
                                    [styles.btn_sm]: props.btnSize === 'sm' || props.btnSize === 'sm btn_block',
                                    [styles.btn_xs]: props.btnSize === 'xs' || props.btnSize === 'xs btn_block',
                                    [styles.btn_block]: props.btnSize.includes('btn_block'),
                                })}
                            >
                                {props.icon && <FontAwesomeIcon icon={icon || faRocket} />} {props.actionlbl}
                            </div>
                        </a>
                    </Link>

                    <Link href={link2 || ''}>
                        <a
                            target={props.newwindow2 === 1 ? '_blank' : '_self'}
                            className={cn('btn_link', {
                                [styles.btn_block]: props.btnSize2.includes('btn_block'),
                            })}
                        >
                            <div
                                className={cn(styles['btn'], styles['transition'], 'btn2', {
                                    [styles.btn_1]: props.btnType === 'btn_1',
                                    [styles.btn_2]: props.btnType === 'btn_2' || !props.btnType2,
                                    [styles.btn_md]: props.btnSize2 === 'md' || props.btnSize2 === 'md btn_block' || !props.btnSize2,
                                    [styles.btn_lg]: props.btnSize2 === 'lg' || props.btnSize2 === 'lg btn_block',
                                    [styles.btn_sm]: props.btnSize2 === 'sm' || props.btnSize2 === 'sm btn_block',
                                    [styles.btn_xs]: props.btnSize2 === 'xs' || props.btnSize2 === 'xs btn_block',
                                    [styles.btn_block]: props.btnSize2.includes('btn_block'),
                                })}
                            >
                                {props.icon2 && <FontAwesomeIcon icon={icon2 || faRocket} />} {props.actionlbl2}
                            </div>
                        </a>
                    </Link>
                </div>
            ) : props.actionlbl ? (
                <div
                    className={cn(styles['btn'], styles['transition'], 'btn1', {
                        [styles.btn_1]: props.btnType === 'btn_1' || !props.btnType,
                        [styles.btn_2]: props.btnType === 'btn_2',
                        [styles.btn_md]: props.btnSize === 'md' || props.btnSize === 'md btn_block' || !props.btnSize,
                        [styles.btn_lg]: props.btnSize === 'lg' || props.btnSize === 'lg btn_block',
                        [styles.btn_sm]: props.btnSize === 'sm' || props.btnSize === 'sm btn_block',
                        [styles.btn_xs]: props.btnSize === 'xs' || props.btnSize === 'xs btn_block',
                        [styles.btn_w]: props.well === '1',
                        [styles.btn_block]: props.btnSize.includes('btn_block'),
                    })}
                >
                    {props.icon && <FontAwesomeIcon icon={icon || faRocket} />} {props.actionlbl}
                </div>
            ) : (
                <div
                    className={cn(styles['btn'], styles['transition'], 'btn2', {
                        [styles.btn_1]: props.btnType === 'btn_1',
                        [styles.btn_2]: props.btnType === 'btn_2' || !props.btnType2,
                        [styles.btn_md]: props.btnSize2 === 'md' || props.btnSize2 === 'md btn_block' || !props.btnSize2,
                        [styles.btn_lg]: props.btnSize2 === 'lg' || props.btnSize2 === 'lg btn_block',
                        [styles.btn_sm]: props.btnSize2 === 'sm' || props.btnSize2 === 'sm btn_block',
                        [styles.btn_xs]: props.btnSize2 === 'xs' || props.btnSize2 === 'xs btn_block',
                        [styles.btn_w]: props.well === '1',
                        [styles.btn_block]: props.btnSize2.includes('btn_block'),
                    })}
                >
                    {props.icon2 && <FontAwesomeIcon icon={icon2 || faRocket} />} {props.actionlbl2}
                </div>
            )}
        </>
    )
}

const TheListItemImage = (props: TheListItemImageProps) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor } = props

    let icon = props.icon3 ? props.icons[props.icon3] : faRocket

    return (
        <>
            <div className={styles.image}>
                {!imageNoSizings.includes(props.imgSize) ? (
                    <Image src={domainImage(item.image)} layout="fill" objectFit="cover" alt={item.img_alt_tag || ''} objectPosition="top" />
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
                {item.icon3 && (
                    <div className={cn(styles.tsI_icon, styles.icon_block)}>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                )}
            </div>
        </>
    )
}

export default MyArticle
