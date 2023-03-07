'use client'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { ImageElement } from 'elements/ImageElement'
/* import styles from '../components/parallax.module.scss'
import cn from 'classnames'
import { ButtonWrap } from '../elements/ButtonWrap'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import LinkWrap from 'elements/LinkWrap'
import DescBlock from 'elements/DescBlock'
import { useState } from 'react'
import { Media } from '../types'
import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants' */

/* import { domainImage } from 'functions'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useState } from 'react' */

const ReactScroll = ({ item, imgsize, cmsUrl, children }: any) => {
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
                                    opacity={item.modOpacity}
                                />
                            </div>
                        ),
                        speed: -33,

                        //shouldAlwaysCompleteAnimation: false,
                        //translateY: [0, 50],
                    },
                ]}
                //layers={[{ image: nextImg, speed: -35 }]}
                //style={{ height: '70vh' }}
                className={'parralaxbanner'}
            >
                {children}
            </ParallaxBanner>
        </ParallaxProvider>
    )
}

export default ReactScroll
