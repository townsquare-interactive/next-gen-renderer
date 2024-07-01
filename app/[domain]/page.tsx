import { generateLayout, getAnyPageData } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'
import { notFound } from 'next/navigation'

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
        const { page } = use(getAnyPageData({ slug: 'landing', domain: params.domain }))
        return <>{<Container page={page} siteData={CMSLayout} />}</>
    }
}

export default Home
