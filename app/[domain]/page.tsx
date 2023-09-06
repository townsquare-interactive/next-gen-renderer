import { convertDomainToSiteIdentifier, generateLayout, getHomePage, getHomePage2 } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'

/* export async function generateMetadata({ params }: { params: { domain: string; slug: string } }) {
    const { domain, slug } = params

    return {
        domain,
        slug,
    }
} */

const Home = (params: any) => {
    console.log('initial params', params.params.domain)
    let newDomain = ''
    if (params?.params?.domain) {
        newDomain = params.params.domain
    }

    const { CMSLayout } = use(generateLayout(newDomain))
    //const { page } = use(getHomePage())
    const { page } = use(getHomePage2(newDomain))

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
        </>
    )
}

export default Home
