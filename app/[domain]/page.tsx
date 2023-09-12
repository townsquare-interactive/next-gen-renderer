import { generateLayout, getAnyPageData } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'

const Home = ({ params }: { params: { slug: string; domain: string } }) => {
    console.log('lets test some params', params)
    const { CMSLayout } = use(generateLayout(params))
    const { page } = use(getAnyPageData(params))

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
        </>
    )
}

export default Home
