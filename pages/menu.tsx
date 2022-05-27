import HeroHeader from '../components/HeroHeader'
import HeroBanner from '../components/HeroBanner'
import Features from '../components/Features'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import data from '../components/moduleData'
import global from '../components/global.json'
import { HomeProps } from '../components/types'
import { Renderer } from '../components/Renderer'
import text from '../components/Text'
import { ModuleData } from '../components/types'

import config from '../pages/config.json'

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { mods: config, global: global },
    }
}

const Menu = ({ moduleData, mods }: HomeProps) => {
    /*     return (
        <div>
            <Layout moduleData={global as ModuleData}>
                <Renderer config={mods.modules} />
            </Layout>
        </div>
    ) */

    return (
        <Layout moduleData={moduleData}>
            <div>
                <HeroHeader headline="Our Restaurant" imageUrl="/images/pexels-pixabay-260922.jpg" />
                <HeroBanner headline="Our Menu" imageUrl="/images/pexels-kaboompics-com-6267.jpg" />
                <Features />
            </div>
        </Layout>
    )
}

export default Menu
