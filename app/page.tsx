import { getHomePage, generateLayout } from '../functions'
import { use } from 'react'
import { Container } from 'components/Container'
import Parallax from 'components/Parallax'

const Home = () => {
    const { CMSLayout } = use(generateLayout())
    const { page } = use(getHomePage())

    return (
        <>
            <Container page={page} siteData={CMSLayout} />
            {/* <Parallax /> */}
        </>
    )
}

export default Home
