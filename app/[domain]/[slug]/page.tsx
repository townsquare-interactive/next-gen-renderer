import { generateLayout, getAnyPageData } from '../../../functions'
import { use } from 'react'
import { Container } from 'components/Container'
import { notFound } from 'next/navigation'; // Adjust import

const Page = ({ params }: { params: { slug: string; domain: string } }) => {
    const { CMSLayout } = use(generateLayout(params))
    const { page } = use(getAnyPageData(params))
    console.log('params', params)
    console.log('here is page', page)

    //for page not existing
    if (typeof page === 'string') {
        notFound(); 
    } 

    return <>{<Container page={page} siteData={CMSLayout}/>}</>
}

export default Page
