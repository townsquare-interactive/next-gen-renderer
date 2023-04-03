'use client'
//import styles from './ImageBlock.module.scss'
import { Media, ImageProps } from '../types'
import Image from 'next/image'
import { domainImage } from '../functions'
import { useState } from 'react'

export const ImageElement = (props: ImageProps) => {
    const { imgSrc, imgAlt, imagePriority, cmsUrl, modType = 'article', imageType, opacity, nextImageSizes, columns = 1 } = props
    const [hideImage, setHideImage] = useState(false)
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)

    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    /*     const imageSizes = {
        large: '100vw',
        testimonial: '130px',
        columns: `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw`,
        normal: `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1200px`,
    }

    const theSizes =
        modType === 'Parallax'
            ? '100vw'
            : modType === 'Banner'
            ? '100vw'
            : modType.includes('testimonial')
            ? '130px'
            : columns === 3
            ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            : columns === 4
            ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1200px' */

    return (
        <>
            {!hideImage &&
                (imageType === 'nocrop' ? (
                    //Setting width and height of item using calcImageSize
                    <Image
                        src={domainImage(imgSrc, true, cmsUrl || '')}
                        onLoadingComplete={calcImageSize}
                        width={imageWidth}
                        height={imageHeight}
                        alt={imgAlt || ''}
                        quality="50"
                        priority={imagePriority}
                        style={
                            modType === 'Card'
                                ? {
                                      objectFit: 'cover',
                                      objectPosition: 'top',
                                      opacity: opacity || 1,
                                  }
                                : { width: '100%', height: 'auto', opacity: opacity || 1 }
                        }
                        onError={() => {
                            setHideImage(true)
                        }}
                        sizes={nextImageSizes || '100vw'}
                    />
                ) : (
                    <Image
                        src={domainImage(imgSrc, true, cmsUrl || '')}
                        fill
                        alt={imgAlt || ''}
                        quality="50"
                        priority={imagePriority}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'top',
                            opacity: opacity || 1,
                        }}
                        onError={() => {
                            setHideImage(true)
                        }}
                        sizes={nextImageSizes || '100vw'}
                        className={modType === 'Parallax' ? 'jarallax-img' : ''}
                    />
                ))}
        </>
    )
}
