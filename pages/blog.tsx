import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/blog.module.scss'
import List from '../components/List'
import { GetStaticProps } from 'next'
import { postData, posts } from '../components/types'
import globalD from '../components/global.json'
import Layout from '../components/Layout'

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

const Blog = (posts: posts) => {
    //console.log('data', data)

    //Slicing only the first five posts to place
    var firstPosts = posts.posts.slice(0, 5)
    return (
        <div className={styles.root}>
            <Head>
                <title>Blog</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>

            <Layout moduleData={globalD}>
                <div className={styles.wrapper}>
                    <h1 className={styles.text}>Blog Page</h1>
                </div>

                {firstPosts.map((post: postData) => (
                    <Link href={`/blogs/${post.id}`} key={post.id}>
                        <a>
                            <List headline={post.title} body={post.body} border={true} />
                        </a>
                    </Link>
                ))}
            </Layout>
        </div>
    )
}

export default Blog
