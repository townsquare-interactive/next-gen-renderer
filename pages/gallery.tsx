import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/gallery.module.scss'
import { GetStaticProps } from 'next'
import PhotoTile from '../components/PhotoTile'
import PhotoGallery from '../components/PhotoGallery'
import { images } from '../components/types'

const API_KEY = '563492ad6f917000010000019a20b7133bbc4cc8aa6ee45ef9cfe4d0'

export const getCuratedPhotos = async () => {
    const res = await fetch(`https://api.pexels.com/v1/curated?page=11&per_page=18`, {
        headers: {
            Authorization: API_KEY,
        },
    })
    const responseJson = await res.json()
    return responseJson.photos
}

//runs at build time
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    console.log('data', data)

    return {
        props: { posts: data },
    }
}

/* export async function getStaticProps() {
    const data = await getCuratedPhotos();
    return {
      props: {
        data,
      },
    };
  } */

const Gallery = (data: images) => {
    console.log('data', data)

    //Slicing only the first five posts to place
    var firstImages = data.posts.slice(0, 20)
    //var firstImages = data
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

                <div /* style={{ position: 'relative', width: '900px', height: '400px', maxWidth: '100%' }} */>
                    {/*                     <Image

                        src="https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg"
                        height={600}
                        width={800}
                        //layout="fill"
                        layout="responsive"
                        objectFit="contain"
                        alt=""

                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Gallery
