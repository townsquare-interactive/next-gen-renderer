import { HomeProps, PageListProps, Context } from '../types'
import { useRouter } from 'next/dist/client/router'
import { bucketAndSiteUrl } from '../functions'
import { Container } from 'components/Container'
import PageHead from 'components/PageHead'

//runs at build time just like static props
export const getStaticPaths = async () => {
    const res = await fetch(bucketAndSiteUrl + '/pages/page-list.json')
    const data = await res.json()

    const paths = data.pages.map((page: PageListProps) => {
        return {
            params: { slug: page.slug.toString() },
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async (context: Context) => {
    const slug = context.params.slug

    const resLayout = await fetch(bucketAndSiteUrl + '/layout.json')
    const CMSLayout = await resLayout.json()

    const resPage = await fetch(bucketAndSiteUrl + '/pages/' + slug + '.json')
    let page = await resPage.json()

    return {
        props: { page, CMSLayout },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const Slug = (props: HomeProps) => {
    const { page, CMSLayout } = props
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <PageHead page={page} CMSLayout={CMSLayout} pageType="index" />

            <Container page={page} CMSLayout={CMSLayout} />
        </>
    )
}

export default Slug
