import HeroHeader from '../components/HeroHeader'
import HeroBanner from '../components/HeroBanner'
import Features from '../components/Features'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import data from '../components/moduleData'
import { HomeProps } from '../components/types'
import { Renderer } from '../components/Renderer'
import text from '../components/Text'

import config from '../pages/config.json'

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { moduleData: data },
    }
}

const Menu = ({ moduleData }: HomeProps) => {
    return <Renderer config={config} />
}

/* return (
        <Layout moduleData={moduleData}>
            <div>

                <HeroHeader headline="Our Restaurant" imageUrl="/images/pexels-pixabay-260922.jpg" />
                <HeroBanner headline="Our Menu" imageUrl="/images/pexels-kaboompics-com-6267.jpg" />
                <Features />
            </div>
        </Layout> 

        
    )*/

export default Menu
