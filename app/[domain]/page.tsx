import { generateLayout, getAnyPageData } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'
import { notFound } from 'next/navigation'; // Adjust import

const Home = ({ params }: { params: { slug: string; domain: string } }) => {
    const { CMSLayout } = use(generateLayout(params))
    const { page } = use(getAnyPageData(params))
    console.log('params', params)

    //for page not existing
    if (typeof page === 'string') {
        notFound(); 
    } 

    return <>{<Container page={page} siteData={CMSLayout}/>}</>
}

export default Home
