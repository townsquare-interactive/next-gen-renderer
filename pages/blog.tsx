import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/blog.module.scss'
import Article from '../components/Article'
import { GetStaticProps } from 'next'
import { postData, posts } from '../components/types'

//runs at build time
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log('data', data)

    return {
        props: { posts: data },
        //props: { data },
    }
}

/* interface postData {
    userId: number
    id: number
    title: string
    body: string
}

interface posts {
    data: postData[]
    posts: postData[]
    //posts:postData,
} */

const Blog = (posts: posts) => {
    //console.log('data', data)

    //Slicing only the first five posts to place
    var firstPosts = posts.posts.slice(0, 5)
    return (
        <div className={styles.root}>
            <Head>
                <title>Blog Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>

            <div className={styles.wrapper}>
                <h1 className={styles.text}>Blog Page</h1>
            </div>

            {firstPosts.map((post: postData) => (
                <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`} key={post.id}>
                    <a>
                        <Article title={post.title} body={post.body} border={true} />
                    </a>
                </Link>
            ))}

            <Article
                title="Article Image test"
                body="Adding an image to the component, no border prop"
                imageUrl="https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg"
            />
            <Article title="Intro Article" body="This is the first article on the page" border={false} />
        </div>
    )
}

export default Blog
