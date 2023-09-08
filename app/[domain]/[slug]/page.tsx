import { PageListProps } from '../../../types'
import { getDomain, getPageData, generateLayout, convertDomainToSiteIdentifier, getAnyPageData } from '../../../functions'
import { use } from 'react'
import { Container } from 'components/Container'

/* export async function generateMetadata({ params }: { params: { domain: string; slug: string } }) {
    const { domain, slug } = params

    const res = await fetch(getDomain(true) + '/pages/page-list.json')
    const data = await res.json()

    return data.pages.map((page: PageListProps) => ({
        slug: slug,
    }))
} */

/* export async function generateStaticParams() {
    // console.log('slug params', params)
    const res = await fetch(getDomain(true) + '/pages/page-list.json')
    const data = await res.json()

    return data.pages.map((page: PageListProps) => ({
        slug: page.slug.toString(),
    }))
} */

const Page = ({ params }: { params: { slug: string; domain: string } }) => {
    console.log('slug params', params)

    /*     if (params?.domain?.includes('fav')) {
        console.log('not the correct domain', params.domain)
        return <div>Weird domain</div>
    } else { */
    const { CMSLayout } = use(generateLayout(params))
    const { page } = use(getAnyPageData(params))

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
        </>
    )
    //}
}

export default Page
