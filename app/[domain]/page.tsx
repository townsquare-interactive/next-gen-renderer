import { generateLayout, getAnyPageData } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'
import { notFound } from 'next/navigation'
import type { SlugParams } from 'types'

const Home = ({ params }: { params: { slug: SlugParams; domain: string } }) => {
    const { CMSLayout } = use(generateLayout(params))
    const { page } = use(getAnyPageData(params))
    console.log('domain params', params)

    //for page not existing
    if (typeof page === 'string') {
        notFound()
    }

    return <>{<Container page={page} siteData={CMSLayout} />}</>
}

export default Home
