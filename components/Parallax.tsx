'use client'
import styles from './parallax.module.scss'
import { ModuleProps, ItemWrapProps, ModuleItemProps } from '../types'
import cn from 'classnames'
import { Fragment, ReactChild, useEffect, useRef, useState } from 'react'
import { ButtonWrap } from '../elements/ButtonWrap'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'
import { ImageElement } from 'elements/ImageElement'
import { ConditionalWrapper, domainImage } from 'functions'
//import Image from 'next/image'
//import SpringParallax from 'elements/SpringParallax'
import ReactScroll from 'elements/ReactScrollParallax'
//import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
//import GoogleLax from 'elements/GoogleLax'
//import next from 'next'
//import SpringParallax from 'elements/SpringParallax'
//import SpringParallax2 from 'elements/SpringParallax2'
import ParallaxCss from 'elements/ParallaxCss'
import ReactParallax from 'elements/ReactParallax'

//import dynamic from 'next/dynamic'

//can be jarallax, custom, scroll
let choseLax: string = 'react-parallax'

//const Jarallax = dynamic(() => import('elements/Jarallax'), { ssr: false })

const Parallax = (props: ModuleProps) => {
    const {
        columns = 1,
        type,
        well,
        imgsize,
        modId,
        title,
        items,
        themeStyles,
        cmsUrl,
        disabled,
        customClassName,
        contentSpacing,
        columnLocation,
        isSingleColumn,
        modCount,
    } = props

    if (choseLax === 'custom') {
        return (
            <>
                {/*  <GoogleLax /> */}
                <ParallaxCss />
                {/*  <ReactParallax item={item}/> */}
            </>
        )
    } else {
        return (
            <>
                <div
                    className={cn(
                        'parallax-mod',
                        styles['root'],
                        styles['flex-mod'],
                        //styles[`${type}`],
                        //'root-container',
                        //styles['item-flex'],
                        //styles[`col_${columns}`],
                        //styles[`${currentSpacing}`],
                        {
                            [styles.well]: well == '1',

                            [styles[`cst_${customClassName}`]]: customClassName,
                            [`cst_${customClassName}`]: customClassName,
                            [styles['first-mod']]: modCount === 1,
                            //[styles.not_well]: !well,
                            //[styles['feature-column']]: columnLocation === 0,
                            // [styles['single-column']]: isSingleColumn,
                        }
                    )}
                    id={`id_${modId}`}
                >
                    {/* {title && <ModuleTitle title={title} />}*/}
                    <div className={cn(styles.wrapper, 'wrapper')}>
                        {items.map((item: any, index: number) => (
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
            </>
        )
    }
}

const ModuleItem = (props: ModuleItemProps) => {
    const { item, modId, itemIndex, cmsUrl, themeStyles, type, imgsize, columns, well } = props

    /*  if (item.headline.includes('jarallax')) {
        choseLax = 'jarallax'
    }
    console.log(choseLax) */

    //const actualLax = item.headline.includes('jarallax') ? 'jarallax' : choseLax
    const actualLax = choseLax

    return (
        <article
            className={cn(
                styles['item'],
                styles[`${item.align}`],
                {
                    [styles.hero]: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !item.twoButtons,
                    [styles.yImg]: item.image,
                    [styles['btn-only']]: item.visibleButton && !item.headline && !item.subheader,
                    ['is-wrap-link']: item.isWrapLink,
                },
                styles[`item_${itemIndex + 1}`],
                `item_${itemIndex + 1}`
            )}
            lang="en"
            style={
                item.modColor1
                    ? {
                          //background: `${item.modColor1}`,
                          //background: `var(--accent-background)`,
                      }
                    : well === '1' && !item.image
                    ? {
                          //backgroundImage: `linear-gradient(-45deg, ${item.textureImage?.gradientColors[0]}, ${item.textureImage?.gradientColors[1]})`,
                          // background: `var(--accent-background)`,
                      }
                    : {
                          //background: `${item.promoColor}`
                      }
            }
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
                align={item.align}
                cmsUrl={cmsUrl}
                actualLax={actualLax}
            />
        </article>
    )
}

const ItemWrap = (props: ItemWrapProps) => {
    const { item, well, themeStyles, modId, columns, type, cmsUrl, imgsize, actualLax } = props

    const useJsLax = true
    return (
        <div
            className={cn(styles['item-wrap'], {
                [styles.notjlax]: !useJsLax,
                [styles['react-scroll']]: actualLax === 'scroll',
            })}
            aria-label={item.headline || 'item-wrap'}
            style={
                well === '1'
                    ? {
                          backgroundImage: item.textureImage?.image ? `url(${domainImage(item.textureImage.image, false)})` : 'none',
                          backgroundPositionY: item.modTwo ? item.modTwo + '%' : '0%',
                          height: item.modOne || 'auto',
                      }
                    : item.modColor1
                    ? {
                          //background: `${item.modColor1}`,
                      }
                    : { height: item.modOne || 'auto' }
            }
        >
            {!useJsLax && (
                /* <div
                    className={styles['parallax-block']}
                    //style={{ backgroundImage: `url(http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/10/screen-8.jpg)` }}
                >
                    <div className={styles['img-block']}>
                        <ImageElement
                            imgSrc={item.image}
                            imgAlt={item.img_alt_tag}
                            imagePriority={item.imagePriority}
                            imgsize={imgsize}
                            cmsUrl={cmsUrl}
                            modType={'Banner'}
                        />
                    </div>
                </div> */
                <>
                    {/* <TheNew
                        item={item}
                        imgsize={imgsize}
                        well={well}
                        type={type}
                        themeStyles={themeStyles}
                        isFeatured={item.isFeatured}
                        columns={columns}
                        modId={modId}
                        align={item.align}
                        cmsUrl={cmsUrl}
                    ></TheNew> */}
                    {/* <div
                        className={cn(styles['caption'], {
                            [styles['cap-bckg']]: item.modSwitch1 != 1 && item.image,
                        })}
                        style={item.modOne ? { height: item.modOne } : { minHeight: '70vh' }}
                    >
                        <div className={styles.content}>
                            {(item.headline || item.subheader) && (
                                <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'parallax'} />
                            )}

                            {item.desc && (
                                <div className={cn(styles['txt-block'])}>
                                    <DescBlock desc={item.desc} descSize={item.descSize} useAccentColor={true} type={type} />
                                </div>
                            )}

                            {item.visibleButton && (
                                <ButtonWrap well={well} modId={modId} type="parallax" columns={columns} themeStyles={themeStyles} {...item} />
                            )}
                        </div>

                        {item.isWrapLink && <LinkWrap item={item} modType={'banner'}></LinkWrap>}
                    </div> */}
                </>
            )}

            {/*  <ReactParallax img={item.image} cmsUrl={cmsUrl} useJsLax={useJsLax}>
               
            </ReactParallax> */}

            {actualLax === 'react-parallax' && (
                <ConditionalWrapper
                    condition={item.image ? true : false}
                    trueOutput={(children: ReactChild) => (
                        <ReactParallax item={item} useJsLax={useJsLax}>
                            {children}
                        </ReactParallax>
                    )}
                    falseOutput={(children: ReactChild) => <>{children}</>}
                >
                    <ParallaxChildren item={item} columns={columns} type={type} well={well} modId={modId} themeStyles={themeStyles} actualLax={actualLax} />
                </ConditionalWrapper>
            )}
            {/*             {actualLax === 'jarallax' && (
                <Jarallax item={item} useJsLax={useJsLax}>
                    <ParallaxChildren item={item} columns={columns} type={type} well={well} modId={modId} themeStyles={themeStyles} actualLax={actualLax} />
                </Jarallax>
            )} */}

            {actualLax === 'scroll' && (
                <div style={{ width: '100%', display: 'block', height: '70vh' }} className="hello">
                    <ReactScroll
                        item={item}
                        imgsize={imgsize}
                        cmsUrl={cmsUrl}
                        well={well}
                        modId={modId}
                        themeStyles={themeStyles}
                        columns={columns}
                        type={type}
                    ></ReactScroll>
                </div>
            )}
        </div>
    )
}

const ParallaxChildren = ({ item, columns, type, well, modId, themeStyles, actualLax, cmsUrl }: any) => {
    return (
        <>
            {actualLax === 'parallax' && (
                <ImageElement imgSrc={item.image} imgAlt={item.img_alt_tag} imagePriority imgsize={item.imgsize} cmsUrl={cmsUrl} modType={'Parallax'} />
            )}
            <div
                className={cn(styles['caption'], {
                    [styles['cap-bckg']]: item.modSwitch1 != 1 && item.image,
                })}
                style={item.modOne ? { height: item.modOne } : { minHeight: '70vh' }}
            >
                <div className={styles.content}>
                    {(item.headline || item.subheader) && (
                        <HeadlineBlock item={item} well={1} columns={columns} isBeaconHero={item.isBeaconHero} modType={'parallax'} />
                    )}

                    {item.desc && (
                        <div className={cn(styles['txt-block'])}>
                            <DescBlock desc={item.desc} descSize={item.descSize} useAccentColor={true} type={type} />
                        </div>
                    )}

                    {item.visibleButton && <ButtonWrap well={well} modId={modId} type="parallax" columns={columns} themeStyles={themeStyles} {...item} />}
                </div>

                {item.isWrapLink && <LinkWrap item={item} modType={'banner'}></LinkWrap>}
            </div>
        </>
    )
}

/* const TheNew = (props: ItemWrapProps) => {
    const { item, well, themeStyles, modId, columns, type, cmsUrl, imgsize } = props

    const ref = useRef(null)
    const [nextImg, setImg] = useState('')

   useEffect(() => {
        const curr: any = ref.current
        const regex = /^(.*?)&w=/

        if (curr?.src) {
            const match = curr?.src.match(regex)
            curr?.src && console.log(match[0] + '1920&q=60')
            curr?.src && setImg(match[0])
        }
    })

    return (
        <>
            <div
                className={cn('tsi-parallax', 'desky')}
                style={{
                    minHeight: '70vh',
                    //boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
                    backgroundImage: `url(${nextImg + '1920&q=60'})`,
                }}
            ></div>
            <div
                className={cn('tsi-parallax', 'mobby')}
                style={{
                    minHeight: '70vh',
                    //boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
                    backgroundImage: `url(${nextImg + '1200&q=60'})`,
                }}
            ></div>
            <Image src={domainImage(item.image, true, cmsUrl || '')} ref={ref} fill alt="" style={{ opacity: '0' }} />
        </>
    ) */

/* return (
        <main>

            <section className="parallaxy bg">
                <div
                    className="bg-img"
                    style={{ backgroundImage: 'url(http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/10/screen-8.jpg)' }}
                ></div>
                              <img src="http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/10/screen-8.jpg" className="bg-img" /> 
                <h1>The sound that occurs when you snap your fingers is made by your middle finger hitting your palm!</h1>
            </section>
        </main>
    ) */
/*  return (
        <div className="new">
            <div className="parallax3">
                <div className="parallax__layer parallax__layer__0">
                    <div style={{ padding: '4rem', color: '#fff' }}>Hello there</div>
                </div>

                <div className="parallax__layer parallax__layer__6">
                 <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" /> 
                    <img src="http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/10/screen-8.jpg" />
                </div>
                <div className="parallax__cover"></div>
            </div>
        </div>
    ) 
}
*/
export default Parallax
