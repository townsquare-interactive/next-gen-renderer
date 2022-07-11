import { HomeProps, PageListProps, Context } from '../components/types'
import TsiLayout from '../components/TsiLayout'
import { Renderer } from '../components/Renderer'
import page from '../cms.json'
import { getDomain } from '../functions'

export const getStaticProps = async (context: Context) => {
    const resGlobal = await fetch(getDomain() + '/global.json')

    const globalData = await resGlobal.json()

    return {
        props: { globalData },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const Slug = (props: HomeProps) => {
    //const { page, globalData } = props
    const { globalData } = props

    return (
        <div>
            <TsiLayout>
                <div>
                    <Renderer config={page.modules} themeStyles={globalData.themeStyles} />
                </div>
            </TsiLayout>
        </div>
    )
}

export default Slug
