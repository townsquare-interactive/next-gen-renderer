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

import data from '../components/indexData.json'
const imageDataJ: ImagesProps = data.imagesData as ImagesProps
const listData: ListProps = data.listData as ListProps

const Home = () => {
    const imageData: ImagesProps = {
        modLayout: '3-1/3',
        gap: true,
        // modLayout: ModLayout.ThreeAndOneThird,
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
                linkText: 'Menu',
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
                    border={false}
                    //modLayout="article"
                    modLayout="card"
                />

                <List {...listData} />

                <List {...listData} border={true} />

                <Label text="Photo Tiles" gap={false} align="left" border={true} textSize="md" />
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

                <Images {...imageDataJ} />

                <Images {...imageData1} />

                <Images {...imageData2} />
            </div>
        </div>
    )
}

export default Home
