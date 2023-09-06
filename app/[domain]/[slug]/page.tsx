import { PageListProps } from '../../../types'
import { getDomain, getPageData, generateLayout, convertDomainToSiteIdentifier } from '../../../functions'
import { use } from 'react'
import { Container } from 'components/Container'

export async function generateMetadata({ params }: { params: { domain: string; slug: string } }) {
    const { domain, slug } = params

    const res = await fetch(getDomain(true) + '/pages/page-list.json')
    const data = await res.json()

    return data.pages.map((page: PageListProps) => ({
        slug: slug,
    }))
}

/* export async function generateStaticParams(params: any) {
    console.log('slug params', params)
    const res = await fetch(getDomain(true) + '/pages/page-list.json')
    const data = await res.json()

    return data.pages.map((page: PageListProps) => ({
        slug: page.slug.toString(),
    }))
} */

const Page = ({ params }: { params: { slug: string; domain?: string } }) => {
    console.log('slug params', params)
    let newDomain = ''
    if (params?.domain) {
        //newDomain = convertDomainToSiteIdentifier(params?.domain)
        newDomain = params?.domain
    }
    console.log('new dommain', newDomain)
    const { CMSLayout } = use(generateLayout(newDomain))
    const { page } = use(getPageData(params, newDomain))

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
        </>
    )
}

export default Page
