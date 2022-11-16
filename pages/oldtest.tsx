import Head from 'next/head'
import { Renderer } from 'components/Renderer'
import test from '../test.json'

/* import getData from '../functions' */

const Home = () => {
    const page = test

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
            <Head>
                <title>title</title>
                <meta property="og:title" content={'title'} key="title" />
                <meta name="description" content={'description'} />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="1024" />
                <link rel="shortcut icon" href={''} />
            </Head>

            <Renderer config={page.modules} themeStyles={themeStyles} />
        </div>
    )
}

export default Home
