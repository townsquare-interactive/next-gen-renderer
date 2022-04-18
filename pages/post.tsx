import { postData, comments, postComment } from '../components/types'
import { NextPage } from 'next'
import { loadComponents } from 'next/dist/server/load-components'

const Post = ({ id, comments }: comments) => {
    //console.log(body)
    return (
        <div>
            <h1>Blog Number {id}</h1>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h3>Name: {comment.name}</h3>
                    <p> {comment.body}</p>
                </div>
            ))}
        </div>
    )
}
Post.getInitialProps = async ({ query }: any) => {
    //console.log(query)

    const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=3')
    const data = await res.json()
    console.log('data', data)

    return { ...query, comments: data }

    /*     return {
        props: { posts: data },
        //props: { data },
    } */
}

export default Post
