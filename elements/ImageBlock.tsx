'use client'
import styles from './imageblock.module.scss'
import { ImageBlockProps } from '../types'
import cn from 'classnames'
import { ImageElement } from './ImageElement'

// importing fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ImageBlock = (props: ImageBlockProps) => {
    const { item, imgsize = 'landscape_4_3', cmsUrl, modType = 'article' } = props

    return (
        <>
            <div
                className={cn(styles.image, styles[`${imgsize}`], {
                    [styles.widescreen_2_4_1]: imgsize === 'widescreen_2-4_1',
                    [styles['photo-grid']]: modType === 'photo_grid',
                    [styles['testimonials']]: modType === 'testimonials_1',
                    [styles['article']]: modType.includes('article'),
                })}
            >
                {item.image && (
                    <ImageElement
                        imgSrc={item.image}
                        imgAlt={item.img_alt_tag}
                        imagePriority={item.imagePriority}
                        imgsize={imgsize}
                        cmsUrl={cmsUrl}
                        modType={modType}
                    />
                )}

                {item.imageIcon && (
                    <div className={cn(styles['icon-block'])}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={[item.imageIcon.iconPrefix, item.imageIcon.iconModel]} />
                        </div>
                    </div>
                )}
                {item.caption_tag && (
                    <figcaption className={cn(styles.caption, 'accent-txt', { ['caption-background']: !modType.includes('article') })}>
                        {item.caption_tag}
                    </figcaption>
                )}
            </div>
        </>
    )
}
