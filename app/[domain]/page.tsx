import { generateLayout, getAnyPageData } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'
import { notFound } from 'next/navigation'
import { landingLayout, landingPage } from '../../landingTemplate.json'

const Home = ({ params }: { params: { slug: string; domain: string } }) => {
    const { CMSLayout } = use(generateLayout(params))
    if (CMSLayout.siteType != 'landing') {
        const { page } = use(getAnyPageData(params))
        console.log('params', params)

        //for page not existing
        if (typeof page === 'string') {
            notFound()
        }

        return <>{<Container page={page} siteData={CMSLayout} />}</>
    } else {
        return <>{<Container page={landingPage} siteData={landingLayout} />}</>
    }
}

export default Home
