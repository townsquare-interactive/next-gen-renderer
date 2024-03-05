'use client'
import { ImageElement } from 'elements/ImageElement'
import styles from '../components/parallax.module.scss'
import { useEffect, useState, Suspense, lazy } from 'react'
import cn from 'classnames'
import { ReactScrollProps } from '../types'
import dynamic from 'next/dynamic'
const ParallaxContent = dynamic(() => import('./ParallaxContent'), {
    ssr: false,
})

const ReactScroll = ({ item, imgsize, children, columns }: ReactScrollProps) => {
    const [isSSR, setIsSSR] = useState(false)

    useEffect(() => {
        // Check if the code is executing on the server (SSR)
        setIsSSR(true)
    }, [])

    const NoParallaxImage = () => {
        return (
            <div className={styles.outer}>
                <div className={cn(styles['image-block'], styles['image-block2'])} style={item.modColor1 ? { background: item.modColor1 } : {}}>
                    <ImageElement
                        imgSrc={item.image || ''}
                        imgAlt={item.img_alt_tag}
                        imagePriority={item.imagePriority}
                        imgsize={imgsize}
                        modType={'Parallax'}
                        opacity={item.modOpacity || 1}
                        nextImageSizes={item.nextImageSizes}
                        columns={columns}
                    />
                </div>
            </div>
        )
    }

    return (
        <>
            {!isSSR ? (
                <>
                    <NoParallaxImage />
                    {children}
                </>
            ) : (
                <Suspense
                    fallback={
                        <>
                            <NoParallaxImage />
                            {children}
                        </>
                    }
                >
                    <ParallaxContent item={item} imgsize={imgsize} columns={columns}>
                        {children}
                    </ParallaxContent>
                </Suspense>
            )}
        </>
    )
}

export default ReactScroll
