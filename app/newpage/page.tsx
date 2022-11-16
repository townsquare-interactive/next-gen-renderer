import styles from '../../styles/Home.module.scss'
import { PageListProps } from '../../types'
import Layout from '../../components/Layout'
import { Renderer } from '../../components/Renderer'
import { getDomain, decideColumns, setColors, getPageData, getLayout, createInlineStyles } from '../../functions'
import cn from 'classnames'
import { Fragment, use } from 'react'

const params = { slug: 'article' }

const Home = () => {
    const { CMSLayout } = use(getLayout())
    const { page } = use(getPageData(params))

    //const page = test
    /* console.log(page) */

    const themeStyles = {
        promoColor: '#365070',
        textColor: 'rgb(46, 46, 46)',
        headingColor: 'rgb(46, 46, 46)',
        textColorAccent: '#fff',
        linkColor: 'rgb(230, 211, 65)',
        accentBackgroundColor: '#000',
        accentColor2: 'rgb(230, 211, 65)',
        altColor: 'rgb(230, 211, 65)',
        headerBackground: 'rgb(64,64,64)',
        footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
        navBackground: 'rgb(64,64,64,.9)',
        BckdHeaderSocial: '#12343d',
        NavText: 'rgba(237,237,223,1)',
        subHeadingColor: '#5b5b5b',
        footerText: '#fff',
    }

    return (
        <div>
            <Renderer config={page.data.modules[0]} themeStyles={themeStyles} />
        </div>
    )
}

export default Home
