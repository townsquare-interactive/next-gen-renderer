import { generateLayout } from '../functions'
import { getHomePage } from 'serverFunctions'
import { use } from 'react'
import { Container } from 'components/Container'

const Home = () => {
    const { CMSLayout } = use(generateLayout())
    const { page } = use(getHomePage())

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
        </>
    )
}

export default Home
