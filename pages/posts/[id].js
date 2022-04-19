import Head from 'next/head'
import Date from '../../components/date'

import { getAllPostIds, getPostData } from 'posts'

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export default function Post({ postData }) {
    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </div>
    )
}
