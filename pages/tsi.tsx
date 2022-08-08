import { HomeProps, PageListProps, Context } from '../components/types'
import TsiLayout from '../components/TsiLayout'
import { Renderer } from '../components/Renderer'
import page from '../cms.json'
import { getDomain } from '../functions'
import styles from './tsi.module.scss'

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
        <div className={styles.root}>
            <div className={styles.featured}>
                {/*   <TsiLayout>
                    <Renderer config={page.modules} themeStyles={globalData.themeStyles} />
                </TsiLayout> */}
            </div>
            <div className={styles.column1}>
                <TsiLayout>
                    <Renderer config={page.modules} themeStyles={globalData.themeStyles} />
                </TsiLayout>
            </div>
            <div className={styles.column2}>
                <TsiLayout>
                    <Renderer config={page.modules} themeStyles={globalData.themeStyles} />
                </TsiLayout>
            </div>
            <div className={styles.column3}></div>
            <div className={styles.column4}></div>
        </div>
    )
}

export default Slug
