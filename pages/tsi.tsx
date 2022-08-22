import { HomeProps, PageListProps, Context } from '../components/types'
import Layout from '../components/Layout'
import { Renderer } from '../components/Renderer'
import pageData from '../cmspage.json'
import { getDomain, cmsPageDataMod } from '../functions'
import styles from './tsi.module.scss'
import cn from 'classnames'

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

    /* const secOnePageData = page.modules[0] */
    const secOneData = cmsPageDataMod(page.modules[0])
    const secTwoData = cmsPageDataMod(page.modules[1])
    const secThreeData = cmsPageDataMod(page.modules[2])
    const secFourData = cmsPageDataMod(page.modules[3])
    const secFiveData = cmsPageDataMod(page.modules[4])

    const textColors = `.accent-txt{color:${globalData.themeStyles['textColorAccent']}} .txt-color{color:${globalData.themeStyles['textColor']}} .txt-color-heading{color:${globalData.themeStyles['headingColor']}}`

    const btnStyles = `.btn_1{color: ${props.globalData.themeStyles['textColorAccent']}; background-color: ${props.globalData.themeStyles['mainColor']}} .btn_1:hover{color: ${props.globalData.themeStyles['mainColor']}; background-color: ${props.globalData.themeStyles['textColorAccent']}} .btn_2{color: ${props.globalData.themeStyles['altColor']}; border-color: ${props.globalData.themeStyles['altColor']}} .btn_2:hover{color: ${props.globalData.themeStyles['textColorAccent']}; background-color: ${props.globalData.themeStyles['altColor']}}`

    let colorStyles = textColors + btnStyles

    let columnStyles
    if (page.sections[1].wide == '938') {
        columnStyles = 'wide-column'
    } else if (page.sections[1].wide == '484' && page.sections[2].wide == '484') {
        columnStyles = 'half-columns'
    } else if (page.sections[1].wide == '316' && page.sections[2].wide == '316' && page.sections[3].wide == '316') {
        columnStyles = 'third-columns'
    } else if (page.sections[1].wide == '232' && page.sections[2].wide == '232' && page.sections[3].wide == '232' && page.sections[3].wide == '232') {
        columnStyles = 'fourth-columns'
    } else if (page.sections[1].wide == '652' && page.sections[2].wide == '316') {
        columnStyles = 'two-third_one-third'
    } else if (page.sections[1].wide == '316' && page.sections[2].wide == '652') {
        columnStyles = 'one-third_two-third'
    } else if (page.sections[1].wide == '232' && page.sections[2].wide == '736') {
        columnStyles = 'one-fourth_three-fourth'
    } else if (page.sections[1].wide == '736' && page.sections[2].wide == '232') {
        columnStyles = 'three-fourth_one-fourth'
    } else if (page.sections[1].wide == '484' && page.sections[2].wide == '232' && page.sections[3].wide == '232') {
        columnStyles = 'half_one-fourth_one-fourth'
    } else if (page.sections[1].wide == '232' && page.sections[2].wide == '232' && page.sections[3].wide == '484') {
        columnStyles = 'one-fourth_one-fourth_half'
    } else if (page.sections[1].wide == '232' && page.sections[2].wide == '484' && page.sections[3].wide == '232') {
        columnStyles = 'one-fourth_half_one-fourth'
    }

    console.log(page.sections[2].wide)

    return (
        <Layout moduleData={globalData}>
            <div className={styles.root}>
                <style>{colorStyles}</style>
                <div className={styles.featured}>
                    <Renderer config={secOneData} themeStyles={globalData.themeStyles} width={page.sections[0].wide} />
                </div>
                <div
                    className={cn(styles.columns, {
                        [styles['wide-column']]: columnStyles === 'wide-column',
                        [styles['half-columns']]: columnStyles === 'half-columns',
                        [styles['third-columns']]: columnStyles === 'third-columns',
                        [styles['fourth-columns']]: columnStyles === 'fourth-columns',
                        [styles['two-third_one-third']]: columnStyles === 'two-third_one-third',
                        [styles['one-third_two-third']]: columnStyles === 'one-third_two-third',
                        [styles['one-fourth_three-fourth']]: columnStyles === 'one-fourth_three-fourth',
                        [styles['three-fourth_one-fourth']]: columnStyles === 'three-fourth_one-fourth',
                        [styles['half_one-fourth_one-fourth']]: columnStyles === 'half_one-fourth_one-fourth',
                        [styles['one-fourth_one-fourth_half']]: columnStyles === 'one-fourth_one-fourth_half',
                        [styles['one-fourth_half_one-fourth']]: columnStyles === 'one-fourth_half_one-fourth',
                    })}
                >
                    <div
                        className={cn(styles.column1, {
                            [styles.thirdColumn]: page.sections[1].wide == '316',
                            [styles.halfColumn]: page.sections[1].wide == '484',
                            [styles.twoThirdColumn]: page.sections[1].wide == '652',
                            [styles.threeFourthColumn]: page.sections[1].wide == '736',
                            [styles.oneFourthColumn]: page.sections[1].wide == '232',
                        })}
                    >
                        <Renderer config={secTwoData} themeStyles={globalData.themeStyles} width={page.sections[1].wide} />
                    </div>
                    <div
                        className={cn(styles.column2, {
                            [styles.thirdColumn]: page.sections[2].wide == '316',
                            [styles.halfColumn]: page.sections[2].wide == '484',
                            [styles.twoThirdColumn]: page.sections[2].wide == '652',
                            [styles.threeFourthColumn]: page.sections[2].wide == '736',
                            [styles.oneFourthColumn]: page.sections[2].wide == '232',
                        })}
                    >
                        <Renderer config={secThreeData} themeStyles={globalData.themeStyles} width={page.sections[2].wide} />
                    </div>
                    <div
                        className={cn(styles.column3, {
                            [styles.thirdColumn]: page.sections[3].wide == '316',
                            [styles.halfColumn]: page.sections[3].wide == '484',
                            [styles.twoThirdColumn]: page.sections[3].wide == '652',
                            [styles.threeFourthColumn]: page.sections[3].wide == '736',
                            [styles.oneFourthColumn]: page.sections[3].wide == '232',
                        })}
                    >
                        <Renderer config={secFourData} themeStyles={globalData.themeStyles} width={page.sections[3].wide} />
                    </div>
                    <div
                        className={cn(styles.column4, {
                            [styles.thirdColumn]: page.sections[4].wide == '316',
                            [styles.halfColumn]: page.sections[4].wide == '484',
                            [styles.twoThirdColumn]: page.sections[4].wide == '652',
                            [styles.threeFourthColumn]: page.sections[4].wide == '736',
                            [styles.oneFourthColumn]: page.sections[4].wide == '232',
                        })}
                    >
                        <Renderer config={secFiveData} themeStyles={globalData.themeStyles} width={page.sections[4].wide} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Slug
