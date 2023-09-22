'use client'
import styles from './CharlotteArticle.module.scss'
import { ModuleProps, Media, TheListItemImageProps, TheListItemActionProps, TsiWrp, TheListItemProps } from '../../types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage } from '../../functions'
import { useState } from 'react'
import Link from 'next/link'

// import your icons from fontawesome
/* import { faRocket, faAnchor, faArchway } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core' */

/* const icons: { [key: string]: IconProp } = {
    faRocket,
    faAnchor,
    faArchway,
}
 */
const CharlotteArticle = (props: ModuleProps) => {
    const textColorHeading = {
        color: props.themeStyles['headingColor'],
    }

    return (
        <div
            id="section_1"
            className={cn(
                styles['tsB'],
                styles['tsT_article'],
                styles['flex-mod'],

                {
                    [styles.a1]: props.type === 'article_1',
                    [styles.a2]: props.type === 'article_2',
                    [styles.a3]: props.type === 'article_3',
                    [styles.square_1_1]: props.imgsize === 'square_1_1',
                    [styles.landscape_4_3]: props.imgsize === 'landscape_4_3',
                    [styles.landscape_3_2]: props.imgsize === 'landscape_3_2',
                    [styles.portrait_3_4]: props.imgsize === 'portrait_3_4',
                    [styles.portrait_2_3]: props.imgsize === 'portrait_2_3',
                    [styles.widescreen_16_9]: props.imgsize === 'widescreen_16_9',
                    [styles.widescreen_3_1]: props.imgsize === 'widescreen_3_1',
                    [styles.widescreen_2_4_1]: props.imgsize === 'widescreen_2_4_1',
                    [styles.no_sizing]: props.imgsize === 'no_sizing',
                    [styles.no_set_height]: props.imgsize === 'no_set_height',
                    [styles.well]: props.well === '1',
                    [styles.not_well]: props.well === '',
                    [styles.large]: props.columns === 1,
                    [styles.medium]: props.columns === 2,
                    [styles.small]: props.columns === 3 || props.columns === 4,
                    [styles.xsmall]: props.columns === 4,
                    [styles.col_1]: props.columns === 1,
                    [styles.col_2]: props.columns === 2,
                    [styles.col_3]: props.columns === 3,
                    [styles.col_4]: props.columns === 4,
                    [styles[`tsD_${props.customClassName}`]]: props.customClassName,
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
                    item.disabled != true ? (
                        <TheListItem
                            item={item}
                            well={props.well}
                            index={index}
                            themeStyles={props.themeStyles}
                            textColorHeading={textColorHeading}
                            key={index}
                            imgsize={props.imgsize}
                            type={props.type}
                            columns={props.columns}
                        />
                    ) : (
                        <></>
                    )
                )}
            </div>
        </div>
    )
}

const TheListItem = (props: TheListItemProps) => {
    const { item } = props
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

    const textColorAccent = {
        color: props.themeStyles['textColorAccent'],
    }

    const noBackground = {
        backgroundColor: 'transparent',
    }
    const borderBackground = {
        backgroundColor: props.themeStyles['headerBackground'],
    }

    /*     const icons: { [key: string]: any } = {
        faRocket,
        faAnchor,
        faArchway,
    } */

    //non constrained images
    const imageNoSizings = ['no_sizing', 'no_set_height']

    //determine amount of buttons

    function isButton() {
        if (item.actionlbl || item.actionlbl2) {
            return true
        } else {
            return false
        }
    }
    function isLink() {
        if (item.links.pagelink || item.links.pagelink2 || item.links.weblink || item.links.weblink2) {
            return true
        } else {
            return false
        }
    }

    const oneButton = (item.actionlbl && !item.actionlbl2) || (!item.actionlbl && item.actionlbl2)

    const twoButtons = item.actionlbl && item.actionlbl2 && (item.links.pagelink || item.links.weblink) && (item.links.pagelink2 || item.links.weblink2)

    const linkNoBtn = isButton() === false && isLink() === true

    const wrapLink = oneButton || linkNoBtn

    const linkAndBtn =
        (item.actionlbl && item.links.pagelink) ||
        (item.actionlbl && item.links.weblink) ||
        (item.actionlbl2 && item.links.pagelink2) ||
        (item.actionlbl2 && item.links.weblink2)

    return (
        <article
            className={cn(
                styles['tsI'],
                {
                    [styles.right]: item.align === 'right',
                    [styles.left]: item.align === 'left',
                    [styles.yHero]: item.isFeatured === 'active' || item.isFeatured === true,
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
                    [styles.yLk]: (item.links.pagelink || item.links.weblink || item.links.pagelink2 || item.links.weblink2) && !twoButtons,
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
                <div className={styles['tsI_wrp']}>
                    {props.type === 'article_1' ? (
                        <TheListWrapV1
                            item={item}
                            imageNoSizings={imageNoSizings}
                            calcImageSize={calcImageSize}
                            imageWidth={imageWidth}
                            imageHeight={imageHeight}
                            textColorAccent={textColorAccent}
                            textColor={textColor}
                            imgsize={props.imgsize}
                            well={props.well}
                            textColorHeading={props.textColorHeading}
                            themeStyles={props.themeStyles}
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
                            imgsize={props.imgsize}
                            well={props.well}
                            textColorHeading={props.textColorHeading}
                            themeStyles={props.themeStyles}
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
                            imgsize={props.imgsize}
                            well={props.well}
                            textColorHeading={props.textColorHeading}
                            themeStyles={props.themeStyles}
                        />
                    ) : (
                        ''
                    )}
                </div>
            ) : (
                <Link
                    href={item.links.pagelink || item.links.weblink || item.links.pagelink2 || item.links.weblink2 || ''}
                    className={cn('btn_link', styles['tsI_wrp'])}
                    target={item.newwindow === 1 ? '_blank' : item.newwindow2 === 1 ? '_blank' : '_self'}
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
                            imgsize={props.imgsize}
                            well={props.well}
                            textColorHeading={props.textColorHeading}
                            themeStyles={props.themeStyles}
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
                            imgsize={props.imgsize}
                            well={props.well}
                            textColorHeading={props.textColorHeading}
                            themeStyles={props.themeStyles}
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
                            imgsize={props.imgsize}
                            well={props.well}
                            textColorHeading={props.textColorHeading}
                            themeStyles={props.themeStyles}
                        />
                    ) : (
                        ''
                    )}
                </Link>
            )}
        </article>
    )
}

const TheListWrapV1 = (props: TsiWrp) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor, imgsize, well, textColorHeading } = props

    const linkAndBtn =
        (item.actionlbl && item.links.pagelink) ||
        (item.actionlbl && item.links.weblink) ||
        (item.actionlbl2 && item.links.pagelink2) ||
        (item.actionlbl2 && item.links.weblink2)

    return (
        <>
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
                        imgsize={props.imgsize}
                        well={props.well}
                    />

                    {item.caption_tag && <figcaption style={textColorAccent}>{item.caption_tag}</figcaption>}
                </figure>
            )}

            <div className={cn(styles['tsI_txt'])}>
                <header
                    className={cn(styles['tsI_hds'], {
                        [styles.font_xs]: item.headSize === 'font_xs',
                        [styles.font_sm]: item.headSize === 'font_sm',
                        [styles.font_md]: item.headSize === 'font_md',
                        [styles.font_lg]: item.headSize === 'font_lg',
                        [styles.font_xl]: item.headSize === 'font_xl',
                    })}
                >
                    {item.headerTag === '1' ? (
                        <h1 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                            {Parser(item.headline)}
                        </h1>
                    ) : (
                        <h2 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                            {Parser(item.headline)}
                        </h2>
                    )}

                    <h2 className={styles['tsI_sh']} style={props.well ? textColorAccent : textColorHeading}>
                        {Parser(item.subheader)}
                    </h2>
                </header>

                <div className={styles['tsI_dsc_wrp']}>
                    <div
                        className={cn(styles['tsI_dsc'], {
                            [styles.font_xs]: item.descSize === 'font_xs',
                            [styles.font_sm]: item.descSize === 'font_sm',
                            [styles.font_md]: item.descSize === 'font_md',
                            [styles.font_lg]: item.descSize === 'font_lg',
                            [styles.font_xl]: item.descSize === 'font_xl',
                        })}
                        style={props.well || item.isFeatured ? textColorAccent : textColorHeading}
                    >
                        <p>{Parser(item.desc)}</p>
                    </div>
                </div>
            </div>
            {linkAndBtn && (
                <TheListItemAction
                    pagelink={item.links.pagelink}
                    actionlbl={item.actionlbl}
                    newwindow={item.newwindow}
                    newwindow2={item.newwindow2}
                    actionlbl2={item.actionlbl2}
                    pagelink2={item.links.pagelink2}
                    weblink2={item.links.weblink2}
                    icon={item.icon}
                    icon2={item.icon2}
                    btnType={item.btnType}
                    btnType2={item.btnType2}
                    themeStyles={props.themeStyles}
                    btnSize={item.btnSize}
                    btnSize2={item.btnSize2}
                    well={props.well}
                />
            )}
        </>
    )
}

const TheListWrapV2 = (props: TsiWrp) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor, imgsize, well, textColorHeading } = props

    const linkAndBtn =
        (item.actionlbl && item.links.pagelink) ||
        (item.actionlbl && item.links.weblink) ||
        (item.actionlbl2 && item.links.pagelink2) ||
        (item.actionlbl2 && item.links.weblink2)

    return (
        <>
            <header
                className={cn(styles['tsI_hds'], {
                    [styles.font_xs]: item.headSize === 'font_xs',
                    [styles.font_sm]: item.headSize === 'font_sm',
                    [styles.font_md]: item.headSize === 'font_md',
                    [styles.font_lg]: item.headSize === 'font_lg',
                    [styles.font_xl]: item.headSize === 'font_xl',
                })}
            >
                {item.headerTag === '1' ? (
                    <h1 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                        {Parser(item.headline)}
                    </h1>
                ) : (
                    <h2 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                        {Parser(item.headline)}
                    </h2>
                )}
                <h2 className={styles['tsI_sh']} style={props.well ? textColorAccent : textColorHeading}>
                    {Parser(item.subheader)}
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
                        imgsize={props.imgsize}
                        well={props.well}
                    />

                    {item.caption_tag && <figcaption style={textColorAccent}>{item.caption_tag}</figcaption>}
                </figure>
            )}
            {item.desc && (
                <div className={cn(styles['tsI_txt'])}>
                    <div className={styles['tsI_dsc_wrp']}>
                        <div
                            className={cn(styles['tsI_dsc'], {
                                [styles.font_xs]: item.descSize === 'font_xs',
                                [styles.font_sm]: item.descSize === 'font_sm',
                                [styles.font_md]: item.descSize === 'font_md',
                                [styles.font_lg]: item.descSize === 'font_lg',
                                [styles.font_xl]: item.descSize === 'font_xl',
                            })}
                            style={props.well || item.isFeatured ? textColorAccent : textColorHeading}
                        >
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
            )}

            {linkAndBtn && (
                <TheListItemAction
                    pagelink={item.links.pagelink}
                    actionlbl={item.actionlbl}
                    newwindow={item.newwindow}
                    newwindow2={item.newwindow2}
                    actionlbl2={item.actionlbl2}
                    pagelink2={item.links.pagelink2}
                    weblink2={item.links.weblink2}
                    icon={item.icon}
                    icon2={item.icon2}
                    btnType={item.btnType}
                    btnType2={item.btnType2}
                    themeStyles={props.themeStyles}
                    btnSize={item.btnSize}
                    btnSize2={item.btnSize2}
                    well={props.well}
                />
            )}
        </>
    )
}

const TheListWrapV3 = (props: TsiWrp) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor, imgsize, well, textColorHeading } = props

    const linkAndBtn =
        (item.actionlbl && item.links.pagelink) ||
        (item.actionlbl && item.links.weblink) ||
        (item.actionlbl2 && item.links.pagelink2) ||
        (item.actionlbl2 && item.links.weblink2)

    return (
        <>
            <div className={styles['tsI_txt_wrp']}>
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
                            imgsize={props.imgsize}
                            well={props.well}
                        />

                        {item.caption_tag && <figcaption style={textColorAccent}>{item.caption_tag}</figcaption>}
                    </figure>
                )}

                <div className={cn(styles['tsI_txt'])}>
                    <header
                        className={cn(styles['tsI_hds'], {
                            [styles.font_xs]: item.headSize === 'font_xs',
                            [styles.font_sm]: item.headSize === 'font_sm',
                            [styles.font_md]: item.headSize === 'font_md',
                            [styles.font_lg]: item.headSize === 'font_lg',
                            [styles.font_xl]: item.headSize === 'font_xl',
                        })}
                    >
                        {item.headerTag === '1' ? (
                            <h1 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                                {Parser(item.headline)}
                            </h1>
                        ) : (
                            <h2 className={styles['tsI_hd']} style={props.well ? textColorAccent : textColorHeading}>
                                {Parser(item.headline)}
                            </h2>
                        )}
                        <h2 className={styles['tsI_sh']} style={props.well ? textColorAccent : textColorHeading}>
                            {Parser(item.subheader)}
                        </h2>
                    </header>

                    <div className={styles['tsI_dsc_wrp']}>
                        <div
                            className={cn(styles['tsI_dsc'], {
                                [styles.font_xs]: item.descSize === 'font_xs',
                                [styles.font_sm]: item.descSize === 'font_sm',
                                [styles.font_md]: item.descSize === 'font_md',
                                [styles.font_lg]: item.descSize === 'font_lg',
                                [styles.font_xl]: item.descSize === 'font_xl',
                            })}
                            style={props.well ? textColorAccent : textColorHeading}
                        >
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>

                {linkAndBtn && (
                    <TheListItemAction
                        pagelink={item.links.pagelink}
                        actionlbl={item.actionlbl}
                        newwindow={item.newwindow}
                        newwindow2={item.newwindow2}
                        actionlbl2={item.actionlbl2}
                        pagelink2={item.links.pagelink2}
                        weblink2={item.links.weblink2}
                        icon={item.icon}
                        icon2={item.icon2}
                        btnType={item.btnType}
                        btnType2={item.btnType2}
                        themeStyles={props.themeStyles}
                        btnSize={item.btnSize}
                        btnSize2={item.btnSize2}
                        well={props.well}
                    />
                )}
            </div>
        </>
    )
}

const TheListItemAction = (props: TheListItemActionProps) => {
    /*     let icon = props.icon ? icons[props.icon] : faRocket
    let icon2 = props.icon2 ? icons[props.icon2] : faRocket */

    const btns = props.well
        ? `.btn1{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['promoColor']}} .btn_link:hover .btn1{color: ${props.themeStyles['promoColor']}; background-color: ${props.themeStyles['textColorAccent']}} .btn2{color: ${props.themeStyles['promoColor']}; border-color: ${props.themeStyles['promoColor']}} .btn_link:hover .btn2{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['promoColor']}}`
        : `.btn1{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['promoColor']}} .btn1:hover{color: ${props.themeStyles['promoColor']}; background-color: ${props.themeStyles['textColorAccent']}} .btn2{color: ${props.themeStyles['promoColor']}; border-color: ${props.themeStyles['promoColor']}} .btn2:hover{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['promoColor']}}`

    const link1 = props.pagelink || props.weblink

    const link2 = props.pagelink2 || props.weblink2

    return (
        <>
            <style>{btns}</style>
            {props.actionlbl2 && props.actionlbl ? (
                <div className={cn(styles['tsI_btn_std_wrp'], styles['tsI_text'])}>
                    <Link
                        href={link1 || ''}
                        target={props.newwindow === 1 ? '_blank' : '_self'}
                        className={cn('btn_link', {
                            [styles.btn_block]: props.btnSize.includes('btn_block'),
                        })}
                    >
                        <div
                            className={cn(styles['tsI_btn'], styles['transition'], 'btn1', {
                                [styles.btn_1]: props.btnType === 'btn_1' || !props.btnType,
                                [styles.btn_2]: props.btnType === 'btn_2',
                                [styles.btn_md]: props.btnSize === 'md' || props.btnSize === 'md btn_block' || !props.btnSize,
                                [styles.btn_lg]: props.btnSize === 'lg' || props.btnSize === 'lg btn_block',
                                [styles.btn_sm]: props.btnSize === 'sm' || props.btnSize === 'sm btn_block',
                                [styles.btn_xs]: props.btnSize === 'xs' || props.btnSize === 'xs btn_block',
                                [styles.btn_block]: props.btnSize.includes('btn_block'),
                            })}
                        >
                            {/*  {props.icon && <FontAwesomeIcon icon={icon || faRocket} />} {props.actionlbl} */}
                        </div>
                    </Link>

                    <Link
                        href={link2 || ''}
                        target={props.newwindow2 === 1 ? '_blank' : '_self'}
                        className={cn('btn_link', {
                            [styles.btn_block]: props.btnSize2.includes('btn_block'),
                        })}
                    >
                        <div
                            className={cn(styles['tsI_btn'], styles['transition'], 'btn2', {
                                [styles.btn_1]: props.btnType === 'btn_1',
                                [styles.btn_2]: props.btnType === 'btn_2' || !props.btnType2,
                                [styles.btn_md]: props.btnSize2 === 'md' || props.btnSize2 === 'md btn_block' || !props.btnSize2,
                                [styles.btn_lg]: props.btnSize2 === 'lg' || props.btnSize2 === 'lg btn_block',
                                [styles.btn_sm]: props.btnSize2 === 'sm' || props.btnSize2 === 'sm btn_block',
                                [styles.btn_xs]: props.btnSize2 === 'xs' || props.btnSize2 === 'xs btn_block',
                                [styles.btn_block]: props.btnSize2.includes('btn_block'),
                            })}
                        >
                            {/*  {props.icon2 && <FontAwesomeIcon icon={icon2 || faRocket} />} */} {props.actionlbl2}
                        </div>
                    </Link>
                </div>
            ) : props.actionlbl ? (
                <div
                    className={cn(styles['tsI_btn'], styles['transition'], 'btn1', {
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
                    {/*  {props.icon && <FontAwesomeIcon icon={icon || faRocket} />}  */}
                    {props.actionlbl}
                </div>
            ) : (
                <div
                    className={cn(styles['tsI_btn'], styles['transition'], 'btn2', {
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
                    {/*  {props.icon2 && <FontAwesomeIcon icon={icon2 || faRocket} />}  */}
                    {props.actionlbl2}
                </div>
            )}
        </>
    )
}
const TheListItemImage = (props: TheListItemImageProps) => {
    const { item, imageNoSizings, calcImageSize, imageWidth, imageHeight, textColorAccent, textColor } = props

    //let icon = props.icon3 ? props.icons[props.icon3] : faRocket

    return (
        <>
            <div className={styles.image}>
                {!imageNoSizings.includes(props.imgsize) ? (
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
                {/* {item.icon3 && (
                    <div className={cn(styles.tsI_icon, styles.icon_block)}>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                )} */}
            </div>
        </>
    )
}

export default CharlotteArticle
