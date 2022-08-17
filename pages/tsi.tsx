import { HomeProps, PageListProps, Context } from '../components/types'
import TsiLayout from '../components/TsiLayout'
import { Renderer } from '../components/Renderer'
import oldPage from '../cms.json'
import page from '../cmspage.json'
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

    /*  const column1Mods = Object.keys(page.modules[0])

    var size = column1Mods.length

    console.log(size)

    console.log(column1Mods) */

    let newArr: any[] = []

    for (const [key, value] of Object.entries(page.modules[0])) {
        let modType
        if (value.type === 'article_1' || value.type === 'article_2' || value.type === 'article_3' || value.type === 'article') {
            modType = 'MyArticle'
        }
        let modData = { ...value, modId: key }

        const arr = { attributes: modData, componentType: modType }
        newArr.push(arr)
    }

    console.log(newArr)

    return (
        <div className={styles.root}>
            <div className={styles.featured}>
                <TsiLayout>
                    <Renderer config={newArr} themeStyles={globalData.themeStyles} />
                </TsiLayout>
                {/*   <TsiLayout>
                    <Renderer config={page.modules} themeStyles={globalData.themeStyles} />
                </TsiLayout> */}
            </div>

            {/*             {page.modules.map((mod, index) => (
                
                <TsiLayout key={index}>
                    <Renderer config={mod.modules} themeStyles={globalData.themeStyles} />
                </TsiLayout>
            ))} */}
            <div className={styles.column1}>
                {/*                 <TsiLayout>
                    <Renderer config={newArr} themeStyles={globalData.themeStyles} />
                </TsiLayout> */}
            </div>
            <div className={styles.column2}>
                {/*                 <TsiLayout>
                    <Renderer config={page.modules} themeStyles={globalData.themeStyles} />
                </TsiLayout> */}
            </div>
            <div className={styles.column3}></div>
            <div className={styles.column4}></div>
        </div>
    )
}

export default Slug
