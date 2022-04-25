import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Script from 'next/script'
import Article from '../components/Article'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import PhotoTiles3 from '../components/PhotoTiles3'
/*import { getSortedPostsData } from '../lib/posts'
 import Link from 'next/link'
import utilStyles from '../styles/utils.module.scss'
import { blog } from '../components/types'
import Date from '../components/date' */

/* export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
} */

const Home = () => {
    const imageData = [
        {
            imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
            linkUrl: '/menu',
            title: 'Menu',
        },
        {
            imageUrl: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
            //linkUrl: '/images',
            title: 'Images',
        },
        {
            imageUrl: 'https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg',
            linkUrl: '/blog',
            title: 'Blog',
        },
    ]

    return (
        <div className={styles.root}>
            <Head>
                <title>Home Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>{' '}
            <div className={styles.wrapper}>
                <Header headline="Next Website" imageUrl="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" />
                {/*  <HeroBanner headline="Menu Stuff" imageUrl="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" /> */}
                <h1>Index Page</h1>
                <Article
                    title="Hello welcome to my Next.js playground"
                    body="I am using this site to experiment with the capabilities of Next.js. Using things like the Image tag, getStaticProps, etc.."
                    imageUrl="https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg"
                    //border={false}
                    linkUrl="/"
                    btnText="Contact Us"
                />

                <Image
                    src="https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg"
                    height={500} // Desired size with correct aspect ratio
                    width={700} // Desired size with correct aspect ratio
                    alt=""
                    /*                     sizes="(min-width: 767px) 33vw,(min-width: 568px) 50vw, 100vw" */
                />

                <div style={{ position: 'relative', width: '800px', height: '400px', maxWidth: '100%' }}>
                    <Image
                        // Route of the image file
                        src="https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg"
                        /* height={600} // Desired size with correct aspect ratio
                    width={800} // Desired size with correct aspect ratio */
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        //objectPosition="bottom center"
                    />
                </div>

                {/* <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>{<Date dateString={date} />}</small>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/*                 <PhotoTiles3
                    imageUrls={[
                        'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                        'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
                        'https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg',
                    ]}
                    linkUrl={['/menu', '/blog', '/images']}
                    titles={['Menu', 'Blog', 'Images']}
                /> */}

                <PhotoTiles3 tileData={imageData} />
            </div>
        </div>
    )
}

export default Home
