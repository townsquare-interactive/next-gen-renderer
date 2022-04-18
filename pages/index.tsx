import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Script from 'next/script'
import Article from '../components/Article'

const Home: NextPage = () => {
    return (
        <div className={styles.root}>
            <Head>
                <title>Home Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>{' '}
            <div className={styles.wrapper}>
                <h1>Index Page</h1>
                <Article
                    title="Hello welcome to my Next.js playground"
                    body="I am using this site to experiment with the capabilities of Next.js. Using things like the Image tag, getStaticProps, etc.."
                    imageUrl="https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg"
                />

                <Image
                    src="https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg"
                    height={500} // Desired size with correct aspect ratio
                    width={700} // Desired size with correct aspect ratio
                    alt=""
                />

                <div style={{ position: 'relative', width: '800px', height: '400px', maxWidth: '100%' }}>
                    <Image
                        // Route of the image file
                        src="https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg"
                        /* height={600} // Desired size with correct aspect ratio
                    width={800} // Desired size with correct aspect ratio */
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        //objectPosition="bottom center"
                    />
                </div>
            </div>
            {/*             <Script
                id="weather"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
`,
                }}
                onLoad={() => console.log(`Weather script loaded`)}
            /> */}
        </div>
    )
}

export default Home
