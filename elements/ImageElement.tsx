'use client'
import { ImageProps } from '../types'
import Image from 'next/image'
import { useState } from 'react'

export const ImageElement = (props: ImageProps) => {
    const { imgSrc, imgAlt, imagePriority, modType = 'article', imageType, opacity, nextImageSizes } = props
    const [hideImage, setHideImage] = useState(false)
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)

    const calcImageSize = (loadedMedia: any) => {
        setWidth(loadedMedia.currentTarget.naturalWidth)
        setHeight(loadedMedia.currentTarget.naturalHeight)
    }

    return (
        <>
            {!hideImage &&
                (imageType === 'nocrop' ? (
                    //Setting width and height of item using calcImageSize
                    <Image
                        src={imgSrc}
                        onLoad={calcImageSize}
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
                        src={imgSrc}
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
                    />
                ))}
        </>
    )
}
