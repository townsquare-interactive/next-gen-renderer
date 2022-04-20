import Head from 'next/head'
import Image from 'next/image'
import styles from './photoGallery.module.scss'
import { GetStaticProps } from 'next'
import PhotoTile from '../components/PhotoTile'
import { images, imageData, imageUse } from './types'

/* interface imageData {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
 */
/* 
interface images {
    images: imageData[]
} */

const PhotoGallery = (props: imageUse) => {
    console.log('data', props.images)

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.imageHolder}>
                    {props.images.map((image: imageData) => (
                        <div className={styles.imageBlock} key={image.id}>
                            <PhotoTile url={image.url} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PhotoGallery
