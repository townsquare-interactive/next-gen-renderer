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

    /*     const imageFileSizes =
        modType === 'Parallax' ? '100vw' : modType === 'testimonials_1' ? '130px' : '(max-width: 1920px) 75vw, (max-width: 1200px) 70vw,  100vw' */

    //console.log(modType)

    const imageSizes = {
        large: '100vw',
        testimonial: '130px',
        columns: `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw`,
        normal: `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1200px`,
    }

    const createImageSizes = (modType: any, columns: any) => {
        if (modType === 'Parallax' || modType === 'Banner') {
            return '100vw'
            //return 'large'
        } else if (modType === 'Testimonials') {
            return '130px'
            //return 'testimonial'
        } else if (columns == 3 || columns == 4) {
            return '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            //return 'columns'
        } else {
            return '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1200px'
            //return 'normal'
        }
    }

    console.log(columns > 2)

    let theTruth = false

    /* modType === 'Parallax'
        ? console.log('big')
        : modType === 'Banner'
        ? console.log('big')
        : modType.includes('testimonial')
        ? console.log('130')
        : columns === 3
        ? console.log('column')
        : columns === 4
        ? (theTruth = true)
        : modType === 'article'
        ? console.log('article')
        : columns === 2
        ? console.log('two col')
        : console.log(modType, 'yes', columns) */

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
            : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1200px'

    const br = 'normal'

    //const imageSizes = `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw`
    // console.log(imageSizes[nextImageSizes])

    const currentImageSize = createImageSizes(modType, columns)

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
                        sizes={
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
                                : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1200px'
                        }
                        //temp
                        //fill
                        /*  style={{
                            objectFit: 'cover',
                            objectPosition: 'top',
                            opacity: opacity || 1,
                        }} */
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
                        sizes={
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
                                : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1200px'
                            //keeps defaulting to this ^^^^^^^^
                        }
                        className={modType === 'Parallax' ? 'jarallax-img' : ''}
                    />
                ))}
        </>
    )
}
