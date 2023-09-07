import { convertDomainToSiteIdentifier, generateLayout, getAnyPageData, getHomePage, getHomePage2 } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'

/* export async function generateMetadata({ params }: { params: { domain: string; slug: string } }) {
    const { domain, slug } = params

    return {
        domain,
        slug,
    }
} */

//const Home = (params: any) => {
const Home = (params: any) => {
    console.log('initial params', params.params)
    let newDomain = ''
    let newParams = ''
    if (params?.params?.domain && params?.params?.domain.includes('vercel')) {
        newDomain = params.params.domain
        newParams = params.params
    }

    if (params?.params?.domain.includes('jremod') || params?.params?.domain.includes('fav')) {
        console.log('not the correct domain', params.domain)
        return <div>Weird domain</div>
    } else {
        const { CMSLayout } = use(generateLayout(params.params))
        //const { page } = use(getHomePage())
        //const { page } = use(getHomePage2(newDomain))
        const { page } = use(getAnyPageData(params.params))

        return (
            <>
                <Container page={page} siteData={CMSLayout} />
            </>
        )
    }
    /* const { CMSLayout } = use(generateLayout())
    const { page } = use(getHomePage())
    //const { page } = use(getHomePage2(newDomain))
    //const { page } = use(getAnyPageData(params.params))

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
        </>
    ) */
}

export default Home
