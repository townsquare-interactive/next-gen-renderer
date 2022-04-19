import { getSortedPostsData } from '../lib/posts'
import { blog } from '../components/types'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export default function BlogRoutes({ allPostsData }: blog) {
    return (
        <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>{/* <Date dateString={date} /> */}</small>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}
