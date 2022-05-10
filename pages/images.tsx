import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/images.module.scss'
import PhotoTile from '../components/PhotoTile'
import { images } from '../components/types'
import Layout from '../components/Layout'
import { HomeProps } from '../components/types'
import { GetStaticProps } from 'next'
import data from '../components/moduleData'

const API_KEY = '563492ad6f917000010000019a20b7133bbc4cc8aa6ee45ef9cfe4d0'

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { moduleData: data },
    }
}

const Images = ({ moduleData }: HomeProps) => {
    return (
        <div className={styles.root}>
            <Head>
                <title>Gallery Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Layout moduleData={moduleData}>
                <div className={styles.wrapper}>
                    <h1 className={styles.text}>Image Testing</h1>
                    <h3>Regular Image</h3>
                    <p>Width:600px , Height: 400px</p>
                    <p>
                        <b>Must know aspect ratio for image</b>
                    </p>
                    <div>
                        <Image
                            // Route of the image file
                            src="https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg"
                            height={400}
                            width={600}
                            alt=""
                        />
                    </div>

                    <h3>Responsive Image</h3>
                    <p>Changes image size depending on screen size</p>
                    <div>
                        <Image
                            // Route of the image file
                            src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg"
                            height={9}
                            width={16}
                            layout="responsive"
                            objectFit="contain"
                            alt=""
                            quality={55}
                        />
                    </div>

                    <h3>Cropping with Divs</h3>
                    <p>Image its size of div proportions, width: 400px, height: 200px</p>
                    <div style={{ position: 'relative', width: '400px', height: '200px', maxWidth: '100%' }}>
                        <Image
                            // Route of the image file
                            src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg"
                            // height={600}
                            //width={800}
                            layout="fill"
                            objectFit="contain"
                            alt=""
                        />
                    </div>
                    <h3>Background Image</h3>
                    <div className={styles.fillBlock} style={{ position: 'relative', width: '100%', height: '350px', maxWidth: '100%' }}>
                        <p>Background image</p>
                        <Image
                            // Route of the image file
                            src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg"
                            // height={600}
                            //width={800}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </div>

                    <h3>Image other testing</h3>
                    <div>
                        <Image
                            // Route of the image file
                            src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg"
                            height={750}
                            width={1260}
                            alt=""
                            quality={55}
                            layout="responsive"
                        />
                    </div>

                    <Image
                        // Route of the image file
                        src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg"
                        height={750}
                        width={1260}
                        alt=""
                        quality={55}
                        layout="responsive"
                    />

                    <Image
                        // Route of the image file
                        src="https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg"
                        height={750}
                        width={1260}
                        alt=""
                        quality={55}
                        layout="responsive"
                    />

                    <Image
                        // Route of the image file
                        src="https://images.pexels.com//photos/1070945/pexels-photo-1070945.jpeg"
                        height={750}
                        width={1260}
                        alt=""
                        quality={55}
                        layout="responsive"
                    />

                    <Image
                        // Route of the image file
                        src="https://images.pexels.com//photos/92248/pexels-photo-92248.jpeg"
                        height={750}
                        width={1260}
                        alt=""
                        quality={55}
                        layout="responsive"
                    />
                </div>
            </Layout>
        </div>
    )
}

export default Images
