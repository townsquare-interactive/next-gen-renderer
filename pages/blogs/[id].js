import Article from '/components/Article'

//runs at build time just like static props
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map((blog) => {
        return {
            params: { id: blog.id.toString() },
        }
    })
    console.log('paths', paths)
    return {
        //props: { posts: data },
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    //grabs 1 item each time
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)

    const data = await res.json()

    return {
        props: { blog: data },
    }
}

const Details = ({ blog }) => {
    return (
        <div>
            <Article title={`Blog #${blog.id}: ${blog.title}`} body={blog.body} border={false} />
        </div>
    )
}

export default Details
