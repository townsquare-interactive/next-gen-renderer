import { generateLayout, getAnyPageData } from '../../../functions'
import { use } from 'react'
import { Container } from 'components/Container'

const Page = ({ params }: { params: { slug: string; domain: string } }) => {
    const { CMSLayout } = use(generateLayout(params))
    const { page } = use(getAnyPageData(params))
    console.log('params', params)
    return (
        <>
            <Container page={page} siteData={CMSLayout} />
        </>
    )
}

export default Page


