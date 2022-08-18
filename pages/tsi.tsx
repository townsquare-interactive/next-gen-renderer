import { HomeProps, PageListProps, Context } from '../components/types'
import TsiLayout from '../components/TsiLayout'
import Layout from '../components/Layout'
import { Renderer } from '../components/Renderer'
import pageData from '../cmspage.json'
import { getDomain, cmsPageDataMod } from '../functions'
import styles from './tsi.module.scss'

export const getStaticProps = async (context: Context) => {
    const resGlobal = await fetch(getDomain() + '/global.json')
    const globalData = await resGlobal.json()
    const page = pageData

    return {
        props: { globalData, page },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const Slug = (props: HomeProps) => {
    const { globalData, page } = props

    const secOnePageData = page.modules[0]
    const newSecOneData = cmsPageDataMod(secOnePageData)

    const textColors = `.accent-txt{color:${globalData.themeStyles['textColorAccent']}} .txt-color{color:${globalData.themeStyles['textColor']}} .txt-color-heading{color:${globalData.themeStyles['headingColor']}}`

    const btnStyles = `.btn_1{color: ${props.globalData.themeStyles['textColorAccent']}; background-color: ${props.globalData.themeStyles['mainColor']}} .btn_1:hover{color: ${props.globalData.themeStyles['mainColor']}; background-color: ${props.globalData.themeStyles['textColorAccent']}} .btn_2{color: ${props.globalData.themeStyles['altColor']}; border-color: ${props.globalData.themeStyles['altColor']}} .btn_2:hover{color: ${props.globalData.themeStyles['textColorAccent']}; background-color: ${props.globalData.themeStyles['altColor']}}`

    let colorStyles = textColors + btnStyles

    return (
        <div className={styles.root}>
            <style>{colorStyles}</style>
            <div className={styles.featured}>
                <Layout moduleData={globalData}>
                    <Renderer config={newSecOneData} themeStyles={globalData.themeStyles} />
                </Layout>
            </div>

            <div className={styles.column1}></div>
            <div className={styles.column2}></div>
            <div className={styles.column3}></div>
            <div className={styles.column4}></div>
        </div>
    )
}

export default Slug
