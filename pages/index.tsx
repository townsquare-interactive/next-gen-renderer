import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Script from 'next/script'
import List from '../components/List'
import Header from '../components/Header'
import Hero from '../components/Header'
import Images from '../components/Images'
import Label from '../components/Label'
import Card from '../components/Card'
import Text from '../components/Text'
import { ImagesProps, ListProps } from '../components/types'

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
    const imageData: ImagesProps = {
        gap: true,
        modLayout: '3-1/3',
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

    const imageData1: ImagesProps = {
        gap: true,
        modLayout: '2-2/3',
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
    const imageData2: ImagesProps = {
        modLayout: '1-hero',
        items: [
            {
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                //linkText: 'Menu',
                linkUrl: '/menu',
                headline: 'Now Hero',
            },
        ],
    }
    const textData: ListProps = {
        headline: 'Text Data Test',
        body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
        imageUrl: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
        border: false,
        linkUrl: '/',
        btnText: 'Contact Us',
        modLayout: 'article',
        textSize: 'md',
        align: 'left',
        reverse: false,
    }

    return (
        <div className={styles.root}>
            <Head>
                <title>Home Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <div className={styles.wrapper}>
                {/*                 <HeroBanner headline="Next Website" imageUrl="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" /> */}

                <Header
                    headline="My Website"
                    imageUrl="https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg"
                    backgroundImageUrl="/images/seamless-5178982.png"
                    //reverse={true}
                />

                <List
                    headline="Hello welcome to my Next.js playground"
                    body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                    imageUrl="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg"
                    //border={false}
                    border={true}
                    linkUrl="/"
                    btnText="Contact Us"
                    modLayout="article"
                    textSize="md"
                    align="left"
                    //reverse={true}
                />

                <List
                    headline="Hello"
                    body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                    imageUrl="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg"
                    linkUrl="/"
                    btnText="Contact Us"
                    border={false}
                    //modLayout="article"
                    modLayout="card"
                    //align="left"
                    //reverse={true}
                />
                <List
                    headline="Hello welcome to my Next.js playground"
                    body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                    imageUrl="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg"
                    linkUrl="/"
                    btnText="Contact Us"
                    border={true}
                    //modLayout="article"
                    modLayout="card"
                />

                <List
                    headline="Hello welcome to my Next.js playground "
                    body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                    imageUrl="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg"
                    border={true}
                    linkUrl="/"
                    btnText="Contact Us"
                    //modLayout="article"
                    textSize="md"
                    modLayout="article"
                />

                <List {...textData} />

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

                {/*
                layout: can be left right or center
                border: true or false
                gap:true or false, adds padding to text
                size: size of text: sm, md, lg
            
            */}
                <Label text="Photo Tiles" gap={true} align="left" border={true} textSize="md" />
                <Text
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    gap={false}
                    //align="left"
                    border={false}
                    textSize="md"
                />

                {/*
                    layout options:
                    3-1/3 : Three images, each one 1/3 in size
                    3-2/3: Three images, Main image takes up 2/3
                    2-2/3: Two images, main image takes up 2/3
                    2-1/2: Two images, each image takes up 1/2
                    1-full: One image that takes up full width


                    */}

                {/*                 <Images tileData={imageData.items} modLayout={imageData.layout} gap={imageData.gap} />

                <Images tileData={imageData.items} modLayout="3-1/3" />

                <Images tileData={imageData1.items} gap={imageData1.gap} modLayout="2-2/3" />

                <Images tileData={imageData1.items} gap={imageData1.gap} modLayout="2-1/2" />

                <Images tileData={imageData2.items} modLayout={imageData2.layout} /> */}

                <Images {...imageData} />

                <Images {...imageData1} />

                <Images {...imageData2} />
            </div>
        </div>
    )
}

export default Home
