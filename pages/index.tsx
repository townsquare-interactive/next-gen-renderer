import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Script from 'next/script'
import Article from '../components/Article'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import Hero from '../components/Hero'
import PhotoTiles3 from '../components/PhotoTiles3'
import Label from '../components/Label'
import Card from '../components/Card'

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
    const imageData = {
        gap: true,
        layout: '3-2/3',
        items: [
            {
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                linkText: 'Menu',
                linkUrl: '/menu',
            },
            {
                imageUrl: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
                linkText: 'Images',
                //linkUrl: '/images',
            },
            {
                imageUrl: 'https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg',
                linkText: 'Blog',
                linkUrl: '/blog',
            },
        ],
    }

    const imageData1 = {
        gap: true,
        items: [
            {
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                linkText: 'Menu',
                linkUrl: '/menu',
            },
            {
                imageUrl: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
                linkText: 'Images',
                linkUrl: '/images',
            },
        ],
    }
    const imageData2 = {
        layout: '1-full',
        items: [
            {
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                //linkText: 'Menu',
                linkUrl: '/menu',
                headline: 'Now Hero',
            },
        ],
    }

    return (
        <div className={styles.root}>
            <Head>
                <title>Home Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <div className={styles.wrapper}>
                {/*                 <HeroBanner headline="Next Website" imageUrl="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" /> */}

                <Hero
                    headline="My Website"
                    imageUrl="https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg"
                    backgroundImage="/images/seamless-5178982.png"
                    //reverse={true}
                />

                <Article
                    title="Hello welcome to my Next.js playground"
                    body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                    imageUrl="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg"
                    //border={false}
                    linkUrl="/"
                    btnText="Contact Us"
                    //modLayout="article"
                    modLayout="article"
                />

                <Article
                    title="Hello welcome to my Next.js playground"
                    body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                    imageUrl="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg"
                    //border={false}
                    linkUrl="/"
                    btnText="Contact Us"
                    //modLayout="article"
                    modLayout="card"
                />

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

                <Label text="Photo Tiles" />

                {/*
                    layout options:
                    3-1/3 : Three images, each one 1/3 in size
                    3-2/3: Three images, Main image takes up 2/3
                    2-2/3: Two images, main image takes up 2/3
                    2-1/2: Two images, each image takes up 1/2
                    1-full: One image that takes up full width
                    */}

                <PhotoTiles3 tileData={imageData.items} layout={imageData.layout} gap={imageData.gap} />

                <PhotoTiles3 tileData={imageData.items} layout="3-1/3" />

                <PhotoTiles3 tileData={imageData1.items} gap={imageData1.gap} layout="2-2/3" />

                <PhotoTiles3 tileData={imageData1.items} gap={imageData1.gap} layout="2-1/2" />

                <PhotoTiles3 tileData={imageData2.items} layout={imageData2.layout} />

                {/*                 <Label text="Quotes" border={true} />*/}

                <Card
                    imageUrl="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg"
                    title="hello"
                    body=" Hey whats up hello, Hey whats up helloHey whats up helloHey whats up helloHey whats up helloHey whats up helloHey whats up helloHey whats up
                    helloHey whats up helloHey whats up helloHey whats up hello"
                />
            </div>
        </div>
    )
}

export default Home
