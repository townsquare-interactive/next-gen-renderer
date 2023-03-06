'use client'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { ImageElement } from 'elements/ImageElement'
import styles from '../components/parallax.module.scss'
import cn from 'classnames'
import { ButtonWrap } from '../elements/ButtonWrap'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'
import { domainImage } from 'functions'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useState } from 'react'

const ReactScroll = ({ item, imgsize, cmsUrl, children, modId, themeStyles, well, columns, type }: any) => {
    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    {
                        children: (
                            <div style={{ position: 'relative', height: '100%', willChange: 'transform' }}>
                                <ImageElement
                                    imgSrc={item.image}
                                    imgAlt={item.img_alt_tag}
                                    imagePriority={item.imagePriority}
                                    imgsize={imgsize}
                                    cmsUrl={cmsUrl}
                                    modType={'Parallax'}
                                />
                            </div>
                        ),
                        speed: -33,

                        //shouldAlwaysCompleteAnimation: false,
                        //translateY: [0, 50],
                    },
                ]}
                //layers={[{ image: nextImg, speed: -45 }]}
                //style={{ height: '70vh' }}
                className={'parralaxbanner'}
            >
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

                    {/*  {nextImg && <img src={nextImg} alt="" />} */}

                    {item.isWrapLink && <LinkWrap item={item} modType={'banner'}></LinkWrap>}
                </div>
            </ParallaxBanner>
        </ParallaxProvider>
    )
}

export default ReactScroll
