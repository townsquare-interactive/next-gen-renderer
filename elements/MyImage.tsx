'use client'
import styles from './myimage.module.scss'
import { Media, MyImagesProps } from '../types'
import Image from 'next/image'
import cn from 'classnames'

import { domainImage } from '../functions'
import { useState } from 'react'

// importing fontAwesome icons
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MyImage = (props: MyImagesProps) => {
    const { item, imgsize, cmsUrl, modType = 'article' } = props
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)

    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    const imgSizes = [
        'landscape_4_3',
        'square_1_1',
        'portrait_3_4',
        'portrait_2_3',
        'widescreen_16_9',
        'widescreen_3_1',
        'widescreen_2-4_1',
        'widescreen_2_4_1',
    ]

    //non constrained images
    const imageNoSizings = ['no_sizing', 'no_set_height']

    const rock = ['fa', 'rocket']

    return (
        <>
            <div
                className={cn(styles.image, styles[`${imgsize}`], {
                    [styles.landscape_4_3]: !imgsize || (!imgSizes.includes(imgsize) && !imageNoSizings.includes(imgsize)),
                    [styles.widescreen_2_4_1]: imgsize === 'widescreen_2-4_1',
                    [styles['photo-grid']]: modType === 'photo_grid',
                })}
            >
                {!imageNoSizings.includes(imgsize) ? (
                    <Image
                        src={domainImage(item.image, true, cmsUrl || '')}
                        fill
                        alt={item.img_alt_tag || ''}
                        quality="50"
                        priority={item.desc ? false : true}
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        sizes="(max-width: 1920px) 100vw,
        (max-width: 1200px) 50vw,
        100vw"
                    />
                ) : (
                    //Setting width and height to image props if nosizing added
                    <Image
                        src={domainImage(item.image, true, cmsUrl || '')}
                        onLoadingComplete={calcImageSize}
                        width={imageWidth}
                        height={imageHeight}
                        alt={item.img_alt_tag || ''}
                        quality="50"
                        priority={item.desc ? false : true}
                        style={{ width: '100%', height: 'auto' }}
                        sizes="(max-width: 1920px) 100vw,
        (max-width: 1200px) 70vw,
        100vw"
                    />
                )}
                {item.imageIcon && (
                    <div className={cn(styles['icon-block'])}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={[item.imageIcon.iconPrefix, item.imageIcon.iconModel]} />
                        </div>
                    </div>
                )}
            </div>
            {item.caption_tag && <figcaption className={cn(styles.caption, 'accent-txt')}>{item.caption_tag}</figcaption>}
        </>
    )
}
