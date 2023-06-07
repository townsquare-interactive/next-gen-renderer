import { PageListProps } from '../../types'
import { getDomain, getPageData, generateLayout, getStrapiPages, getSanityPages, getSanitySiteData } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'
import ContactForm from '../../components/ContactForm'

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

    /*------------ Strapi CMS access ----------------*/
    const { strapiPages } = use(getStrapiPages())

    // const firstPageModList = strapiPages.data[0].attributes.Body

    for (let x = 0; x < strapiPages.data.length; x++) {
        console.log('page:', strapiPages.data[x])
        console.log('mods:', strapiPages.data[x].attributes.Body)
    }

    /*     for (let x = 0; x < modList.length; x++) {
        console.log('mod id:', modList[x].id)
        console.log('items:', modList[x].items)
    } */
    //const firstItemMod1 = strapiPages.data[0].attributes.Body[0].article_items.data[0].attributes

    //sanity data
    /* const sanityPages = use(getSanityPages())
    console.log('Pages -----', sanityPages)
    const sanitySiteData = use(getSanitySiteData())
    console.log('Site Data ----', sanitySiteData) */

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
            <ContactForm />
        </>
    )
}

export default Page
