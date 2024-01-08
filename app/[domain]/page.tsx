import { generateLayout, getAnyPageData, getDomainListFromVercel } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'

const Home = ({ params }: { params: { slug: string; domain: string } }) => {
    const { CMSLayout } = use(generateLayout(params))
    const { page } = use(getAnyPageData(params))
    //const apexId = use(getDomainListFromVercel('nextgenprototype.vercel.app'))
    //console.log('apexid from vercel',apexId)
    console.log('params', params)

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
        </>
    )
}

export default Home
