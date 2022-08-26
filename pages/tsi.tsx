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

    const resPage = await fetch(getDomain(true) + '/pages/' + 'test' + '.json')
    let page = await resPage.json()
    page = page.backup.data

    return {
        props: { globalData, page },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const TSI = (props: HomeProps) => {
    const { globalData, page } = props

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

    //Global styles
    const textColors = `.accent-txt{color:${globalData.themeStyles['textColorAccent']}} .txt-color{color:${globalData.themeStyles['textColor']}} .txt-color-heading{color:${globalData.themeStyles['headingColor']}}`

    const btnStyles = `.btn_1{color: ${props.globalData.themeStyles['textColorAccent']}; background-color: ${props.globalData.themeStyles['mainColor']}} .btn_1:hover{color: ${props.globalData.themeStyles['mainColor']}; background-color: ${props.globalData.themeStyles['textColorAccent']}} .btn_2{color: ${props.globalData.themeStyles['altColor']}; border-color: ${props.globalData.themeStyles['altColor']}} .btn_2:hover{color: ${props.globalData.themeStyles['textColorAccent']}; background-color: ${props.globalData.themeStyles['altColor']}}`

    let colorStyles = textColors + btnStyles

    return (
        <Layout moduleData={globalData}>
            <div className={styles.root}>
                <style>{colorStyles}</style>
                <div className={styles.featured}>
                    <Renderer config={page.modules[0]} themeStyles={globalData.themeStyles} width={page.sections[0].wide} />
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
                    {page.modules.map((data, idx) =>
                        data && idx != 0 ? (
                            <div
                                className={cn(styles['column' + (idx + 1)], {
                                    [styles.featured]: idx === 0,
                                    [styles[`column ${idx + 1}`]]: idx != 0,
                                    [styles.thirdColumn]: page.sections[idx].wide == '316',
                                    [styles.halfColumn]: page.sections[idx].wide == '484',
                                    [styles.twoThirdColumn]: page.sections[idx].wide == '652',
                                    [styles.threeFourthColumn]: page.sections[idx].wide == '736',
                                    [styles.oneFourthColumn]: page.sections[idx].wide == '232',
                                })}
                            >
                                <Renderer config={data} themeStyles={globalData.themeStyles} width={page.sections[idx].wide || ''} />
                            </div>
                        ) : (
                            <></>
                        )
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default TSI
