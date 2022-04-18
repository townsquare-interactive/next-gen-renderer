import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/gallery.module.scss'
import { GetStaticProps } from 'next'
import PhotoTile from '../components/PhotoTile'
import PhotoGallery from '../components/PhotoGallery'
import { images } from '../components/types'

//runs at build time
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    console.log('data', data)
    /*     const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    const data = await res.json()
    console.log('data', data) */

    return {
        props: { posts: data },
    }
}

/* interface imageData {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
} */

/* interface imageData {
    id: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
}

interface images {
    posts: imageData[]
}
 */
const Gallery = (data: images) => {
    console.log('data', data)

    //Slicing only the first five posts to place
    var firstImages = data.posts.slice(0, 20)
    console.log('image list', firstImages)

    return (
        <div className={styles.root}>
            <Head>
                <title>Gallery Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <div className={styles.wrapper}>
                <h1 className={styles.text}>Gallery Page</h1>
                {/* <div className={styles.imageHolder}>
                    {firstImages.map((image) => (
                        <div className={styles.imageBlock} key={image.id}>
                            <PhotoTile url={image.url} />
                        </div>
                    ))}
                </div> */}
                <PhotoGallery images={firstImages} />
            </div>
        </div>
    )
}

export default Gallery
