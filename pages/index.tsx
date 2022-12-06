import { HomeProps } from '../types'
import { useRouter } from 'next/router'
import { bucketAndSiteUrl, findHomePageSlug } from '../functions'
import { Container } from 'components/Container'
import PageHead from 'components/PageHead'

//runs at build time just like static props
export const getStaticProps = async () => {
    const resLayout = await fetch(bucketAndSiteUrl + '/layout.json')
    const siteData = await resLayout.json()

    const resPageList = await fetch(bucketAndSiteUrl + '/pages/page-list.json')
    const pageList = await resPageList.json()

    const homePageSlug = findHomePageSlug(pageList)

    const resPage = await fetch(bucketAndSiteUrl + '/pages/' + homePageSlug + '.json')
    let page = await resPage.json()

    return {
        props: { page, siteData },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const Home = (props: HomeProps) => {
    let { page, siteData } = props
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Container page={page} siteData={siteData} />
        </>
    )
}

export default Home
