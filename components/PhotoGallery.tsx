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

                <div style={{ position: 'relative', width: '900px', height: '400px', maxWidth: '100%' }}>
                    <Image
                        // Route of the image file
                        src="https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg"
                        /* height={600} // Desired size with correct aspect ratio
                    width={800} // Desired size with correct aspect ratio */
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        //objectPosition="bottom center"
                    />
                </div>
            </div>
        </div>
    )
}

export default PhotoGallery
