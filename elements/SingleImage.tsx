'use client'
//import styles from './ImageBlock.module.scss'
import { Media, ImageProps } from '../types'
import Image from 'next/image'
import { domainImage } from '../functions'
import { useState } from 'react'

export const SingleImage = (props: ImageProps) => {
    const { imgSrc, imgAlt, imagePriority, imgsize = 'landscape_4_3', cmsUrl, modType = 'article', imgtype } = props
    const [hideImage, setHideImage] = useState(false)
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)

    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    const imageFileSizes = '(max-width: 1920px) 75vw, (max-width: 1200px) 70vw,  100vw'

    /*  */

    return (
        <>
            {!hideImage &&
                (imgtype === 'nocrop' ? (
                    //Setting width and height of item using calcImageSize
                    <Image
                        src={domainImage(imgSrc, true, cmsUrl || '')}
                        onLoadingComplete={calcImageSize}
                        width={imageWidth}
                        height={imageHeight}
                        alt={imgAlt || ''}
                        quality="50"
                        priority={imagePriority}
                        style={{ width: '100%', height: 'auto' }}
                        onError={() => {
                            setHideImage(true)
                        }}
                        sizes={imageFileSizes}
                    />
                ) : (
                    <Image
                        src={domainImage(imgSrc, true, cmsUrl || '')}
                        fill
                        alt={imgAlt || ''}
                        quality="50"
                        priority={imagePriority}
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        onError={() => {
                            setHideImage(true)
                        }}
                        sizes={imageFileSizes}
                    />
                ))}
        </>
    )
}
