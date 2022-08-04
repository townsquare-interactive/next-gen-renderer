import styles from './myArticle.module.scss'
import { ArticleProps, Media, TheListItemImageProps, TheListItemActionProps, ItemWrapProps, ModuleItemProps, ConditionalWrapperProps } from './types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage } from '../functions'
import { ReactChild, useState } from 'react'
import Link from 'next/link'

// importing fontAwesome icons
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
                    [styles[`cst_${props.class}`]]: props.class,
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

const ModuleItem = (props: ModuleItemProps) => {
    const { item } = props

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
    const heroBackground = {
        backgroundColor: props.themeStyles['altColor'],
    }

    //Key to determine which imported logo to use
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

    const oneButton =
        (item.actionlbl && !item.actionlbl2 && (item.pagelink || item.weblink)) || (!item.actionlbl && item.actionlbl2 && (item.pagelink2 || item.weblink2))

    const twoButtons = item.actionlbl && item.actionlbl2 && (item.pagelink || item.weblink) && (item.pagelink2 || item.weblink2)

    const linkNoBtn = isButton() === false && isLink() === true

    const wrapLink = oneButton || linkNoBtn

    /* const pageLink = item.pagelink || item.pagelink2 ? true : false */

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
            <ConditionalWrapper
                condition={wrapLink ? true : false}
                trueOutput={(children: ReactChild) => (
                    <Link href={item.pagelink || item.weblink || item.pagelink2 || item.weblink2 || ''} passHref={item.weblink || item.weblink2 ? true : false}>
                        <a
                            className={cn(styles['item-wrap'], 'btn_link')}
                            target={item.newwindow === 1 ? '_blank' : item.newwindow2 === 1 ? '_blank' : '_self'}
                            style={item.isFeatured === 'active' && props.type === 'article' ? heroBackground : noBackground}
                        >
                            {children}
                        </a>
                    </Link>
                )}
                falseOutput={(children: ReactChild) => (
                    <div className={styles['item-wrap']} style={item.isFeatured === 'active' && props.type === 'article' ? heroBackground : noBackground}>
                        {children}
                    </div>
                )}
            >
                <ItemWrap
                    item={item}
                    imageNoSizings={imageNoSizings}
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
                    columns={props.columns}
                />
            </ConditionalWrapper>
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, imageNoSizings, textColorAccent, textColor, imgSize, well, icons, icon3, isFeatured, themeStyles, type } = props

    //Check if item is on beacon theme and hero
    const beaconHero = type === 'article' && isFeatured === 'active'

    //Colors of text with classes for normal/hero/border
    const textColors = `.accent-txt{color:${themeStyles['textColorAccent']}} .txt-color{color:${themeStyles['textColor']}} .txt-color-heading{color:${themeStyles['headingColor']}}`

    const linkAndBtn =
        (item.actionlbl && item.pagelink) || (item.actionlbl && item.weblink) || (item.actionlbl2 && item.pagelink2) || (item.actionlbl2 && item.weblink2)

    return (
        <>
            <style>{textColors}</style>
            {props.type != 'article_2' ? (
                <>
                    {item.image && (
                        <ImageBlock
                            item={item}
                            imageNoSizings={imageNoSizings}
                            textColorAccent={textColorAccent}
                            textColor={textColor}
                            imgSize={imgSize}
                            well={well}
                            icons={icons}
                            icon3={icon3}
                        />
                    )}
                    <HeaderBlock item={props.item} well={props.well} columns={props.columns} beaconHero={beaconHero} />
                </>
            ) : (
                <>
                    <HeaderBlock item={props.item} well={props.well} columns={props.columns} beaconHero={beaconHero} />

                    {item.image && (
                        <ImageBlock
                            item={item}
                            imageNoSizings={imageNoSizings}
                            textColorAccent={textColorAccent}
                            textColor={textColor}
                            imgSize={imgSize}
                            well={well}
                            icons={icons}
                            icon3={icon3}
                        />
                    )}
                </>
            )}

            {item.desc && (
                <div className={cn(styles['txt-block'])}>
                    <div
                        className={cn(styles['dsc-block'], {
                            [styles.font_xs]: item.descSize === 'font_xs',
                            [styles.font_sm]: item.descSize === 'font_sm',
                            [styles.font_md]: item.descSize === 'font_md',
                            [styles.font_lg]: item.descSize === 'font_lg',
                            [styles.font_xl]: item.descSize === 'font_xl',
                            ['accent-txt']: well || beaconHero,
                            ['txt-color']: !well && !beaconHero,
                        })}
                    >
                        <p className={cn(styles['dsc'])}>{item.desc}</p>
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
                />
            )}
        </>
    )
}

const Button = (props: TheListItemActionProps) => {
    const btns = props.well
        ? `.btn_1{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['mainColor']}} .btn_link:hover .btn_1{color: ${props.themeStyles['mainColor']}; background-color: ${props.themeStyles['textColorAccent']}} .btn_{color: ${props.themeStyles['altColor']}; border-color: ${props.themeStyles['altColor']}} .btn_link:hover .btn_2{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['altColor']}} .btn_2{color: ${props.themeStyles['altColor']}; border-color: ${props.themeStyles['altColor']}}`
        : `.btn_1{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['mainColor']}} .btn_1:hover{color: ${props.themeStyles['mainColor']}; background-color: ${props.themeStyles['textColorAccent']}} .btn_2{color: ${props.themeStyles['altColor']}; border-color: ${props.themeStyles['altColor']}} .btn_2:hover{color: ${props.themeStyles['textColorAccent']}; background-color: ${props.themeStyles['altColor']}}`

    let buttons = [
        {
            name: 'btn1',
            link: props.pagelink || props.weblink,
            window: props.newwindow,
            icon: props.icons[props.icon || ''],
            label: props.actionlbl,
            active: props.actionlbl ? true : false,
            btnType: props.btnType,
            btnSize: props.btnSize,
            linkType: props.pagelink ? 'local' : 'ext',
        },
        {
            name: 'btn2',
            link: props.pagelink2 || props.weblink2,
            window: props.newwindow2,
            icon: props.icons[props.icon2 || ''],
            label: props.actionlbl2,
            active: props.actionlbl2 ? true : false,
            btnType: props.btnType2,
            btnSize: props.btnSize2,
            linkType: props.pagelink2 ? 'local' : 'ext',
        },
    ]

    return (
        <>
            <style>{btns}</style>
            <ConditionalWrapper
                condition={props.actionlbl2 && props.actionlbl ? true : false}
                trueOutput={(children: ReactChild) => <div className={cn(styles['btn-wrap'], styles['txt-wrap'])}>{children}</div>}
                falseOutput={(children: ReactChild) => <>{children}</>}
            >
                <>
                    {buttons.map((bt, index) => (
                        <>
                            {bt.active && (
                                <ConditionalWrapper
                                    condition={props.actionlbl2 && props.actionlbl ? true : false}
                                    trueOutput={(children: ReactChild) => (
                                        <Link href={bt.link || ''} key={index} passHref={bt.linkType === 'ext' ? true : false}>
                                            <a
                                                target={bt.window === 1 ? '_blank' : '_self'}
                                                className={cn('btn_link', {
                                                    [styles.btn_block]: bt.btnSize.includes('btn_block'),
                                                })}
                                            >
                                                {children}
                                            </a>
                                        </Link>
                                    )}
                                    falseOutput={(children: ReactChild) => <>{children}</>}
                                >
                                    <div
                                        className={cn(styles['btn'], styles['transition'], `${bt.btnType}`, {
                                            ['btn_1']: !bt.btnType,
                                            [styles.btn_1]: bt.btnType === 'btn_1' || !props.btnType,
                                            [styles.btn_2]: bt.btnType === 'btn_2',
                                            [styles.btn_md]: bt.btnSize === 'md' || bt.btnSize === 'md btn_block' || !bt.btnSize,
                                            [styles.btn_lg]: bt.btnSize === 'lg' || bt.btnSize === 'lg btn_block',
                                            [styles.btn_sm]: bt.btnSize === 'sm' || bt.btnSize === 'sm btn_block',
                                            [styles.btn_xs]: bt.btnSize === 'xs' || bt.btnSize === 'xs btn_block',
                                            [styles.btn_block]: bt.btnSize.includes('btn_block'),
                                            [styles.btn_w]: props.well === '1',
                                        })}
                                    >
                                        {bt.icon && <FontAwesomeIcon icon={bt.icon || faRocket} />} {bt.label}
                                    </div>
                                </ConditionalWrapper>
                            )}
                        </>
                    ))}
                </>
            </ConditionalWrapper>
        </>
    )
}

const HeaderBlock = (props: any) => {
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
        <header
            className={cn(styles['hd-block'], {
                [styles.font_xs]: item.headSize === 'font_xs',
                [styles.font_sm]: item.headSize === 'font_sm',
                [styles.font_md]: item.headSize === 'font_md',
                [styles.font_lg]: item.headSize === 'font_lg',
                [styles.font_xl]: item.headSize === 'font_xl',
            })}
        >
            <HeadTag
                className={cn(styles['hd'], {
                    ['accent-txt']: well || beaconHero,
                    ['txt-color-heading']: !well && !beaconHero,
                })}
            >
                {Parser(item.headline)}
            </HeadTag>
            <SubTag
                className={cn(styles['sh'], {
                    ['accent-txt']: well || beaconHero,
                    ['txt-color-heading']: !well && !beaconHero,
                })}
            >
                {Parser(item.subheader)}
            </SubTag>
        </header>
    )
}

const ImageBlock = (props: TheListItemImageProps) => {
    const { item, imageNoSizings } = props
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)

    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    let icon = props.icon3 ? props.icons[props.icon3] : faRocket

    return (
        <figure className={cn(styles['image-block'], styles['theframe'], styles['imgtag'], styles['imgbase'], styles['img-loaded'])} data-alt="Headline">
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
                    <div className={cn(styles['icon-block'])}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={icon} />
                        </div>
                    </div>
                )}
            </div>
            {item.caption_tag && <figcaption style={props.textColorAccent}>{item.caption_tag}</figcaption>}
        </figure>
    )
}

//Used to have conditional tag wraps around code without repeating inside code
const ConditionalWrapper = ({ condition, falseOutput, trueOutput, children }: ConditionalWrapperProps) =>
    condition ? trueOutput(children) : falseOutput(children)

export default MyArticle
