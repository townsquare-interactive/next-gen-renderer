import { generateLayout, getAnyPageData } from '../../../functions'
import { use } from 'react'
import { Container } from 'components/Container'
import { notFound } from 'next/navigation'

const Page = ({ params }: { params: { slug: string; domain: string } }) => {
    const { CMSLayout } = use(generateLayout(params))
    const { page } = use(getAnyPageData(params))
    console.log('domain params', params)
    const siteLayout = page.siteLayout || CMSLayout

    //for page not existing
    if (typeof page === 'string') {
        notFound()
    }

    return <>{<Container page={page} siteData={siteLayout} />}</>
}

export default Page
