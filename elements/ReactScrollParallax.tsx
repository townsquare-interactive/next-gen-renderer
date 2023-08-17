'use client'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { ImageElement } from 'elements/ImageElement'
import styles from '../components/parallax.module.scss'
/* import Image from 'next/image'
import { domainImage } from 'functions' */
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { ReactScrollProps } from '../types'

const ReactScroll = ({ item, imgsize, cmsUrl, children, columns }: ReactScrollProps) => {
    const [isSSR, setIsSSR] = useState(true)

    let useDelay = item.image ? true : false

    //Setting state to false on load to avoid Hydration Error
    useEffect(() => {
        if (useDelay === true) {
            setIsSSR(false)
        }
    }, [useDelay])

    if (useDelay === false) {
        setIsSSR(false)
    }

    console.log(item, item.modColor1)

    return (
        <>
            {isSSR && (
                <>
                    <div className={styles.outer}>
                        <div className={cn(styles['image-block'], styles['image-block2'])} style={item.modColor1 ? { background: item.modColor1 } : {}}>
                            <ImageElement
                                imgSrc={item.image}
                                imgAlt={item.img_alt_tag}
                                imagePriority={item.imagePriority}
                                imgsize={imgsize}
                                cmsUrl={cmsUrl}
                                modType={'Parallax'}
                                opacity={item.modOpacity || 1}
                                nextImageSizes={item.nextImageSizes}
                                columns={columns}
                            />
                        </div>
                    </div>
                    {children}
                </>
            )}
            {!isSSR && (
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[
                            {
                                children: (
                                    <div className={styles['image-block']} style={item.modColor1 ? { background: item.modColor1 } : {}}>
                                        <ImageElement
                                            imgSrc={item.image}
                                            imgAlt={item.img_alt_tag}
                                            imagePriority={item.imagePriority}
                                            imgsize={imgsize}
                                            cmsUrl={cmsUrl}
                                            modType={'Parallax'}
                                            opacity={item.modOpacity || 1}
                                            nextImageSizes={item.nextImageSizes}
                                            columns={columns}
                                        />
                                    </div>
                                ),
                                speed: -33,
                            },
                        ]}
                        style={{ height: '70vh' }}
                        className={styles['parallax-banner']}
                    >
                        {children}
                    </ParallaxBanner>
                </ParallaxProvider>
            )}
        </>
    )
}

export default ReactScroll
