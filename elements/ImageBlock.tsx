'use client'
import styles from './imageblock.module.scss'
import { ImageBlockProps } from '../types'
import cn from 'classnames'
import { ImageElement } from './ImageElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ImageBlock = (props: ImageBlockProps) => {
    const { item, imgsize = 'landscape_4_3', modType = 'article', columns } = props

    return (
        <div
            className={cn(styles.image, styles[`${imgsize}`], 'image-block', {
                [styles.widescreen_2_4_1]: imgsize === 'widescreen_2-4_1',
                [styles['photo-grid']]: modType === 'photo_grid',
                [styles['testimonials']]: modType === 'testimonials_1',
                [styles['article']]: modType.includes('article'),
                [styles['card']]: modType === 'Card',
                [styles['photo-gallery']]: modType === 'gallery',
                [styles['thumbnail']]: modType === 'thumbnail',
            })}
        >
            {item.image && (
                <ImageElement
                    imgSrc={item.image}
                    imgAlt={item.img_alt_tag}
                    imagePriority={item.imagePriority}
                    imgsize={imgsize}
                    modType={modType}
                    nextImageSizes={item.nextImageSizes}
                    columns={columns}
                    imageType={item.imageType}
                />
            )}

            {item.imageIcon && modType != 'gallery' && (
                <div className={cn(styles['icon-block'])}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={[item.imageIcon.iconPrefix, item.imageIcon.iconModel]} />
                    </div>
                </div>
            )}
            {item.caption_tag && (
                <figcaption className={cn(styles.caption, 'caption-txt {', { ['caption-background']: !modType.includes('article') })}>
                    {item.caption_tag}
                </figcaption>
            )}
        </div>
    )
}
