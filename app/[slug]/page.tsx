import { PageListProps } from '../../types'
import { getDomain, getPageData, generateLayout } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'
import { createClient } from 'next-sanity'
import ContactForm from '../../components/ContactForm'

//for sanity cms
const client = createClient({
    projectId: '5q931z68',
    dataset: 'production',
    apiVersion: '2023-05-26',
    useCdn: false,
})

async function getSanityPages() {
    const sanityPages = await client.fetch(`*[_type == "pages"]`)
    return sanityPages
}

async function getSanitySiteData() {
    const sanitySiteData = await client.fetch(`*[_type == "sitedata"]`)
    return sanitySiteData
}

export async function generateStaticParams() {
    const res = await fetch(getDomain(true) + '/pages/page-list.json')
    const data = await res.json()

    return data.pages.map((page: PageListProps) => ({
        slug: page.slug.toString(),
    }))
}

const Page = ({ params }: { params: { slug: string } }) => {
    const { CMSLayout } = use(generateLayout())
    const { page } = use(getPageData(params))

    const sanityPages = use(getSanityPages())
    //console.log('Pages -----', sanityPages)

    const sanitySiteData = use(getSanitySiteData())
    // console.log('Site Data ----', sanitySiteData)

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
            <ContactForm />
        </>
    )
}

export default Page
