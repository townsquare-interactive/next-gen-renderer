import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './newlax.module.scss'
//import StaticallyImportedImage from "../public/img/pexels-pixabay-45911.jpg";
import { Parallax, Background } from 'react-parallax'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'

export default function Parallaxer() {
    /*   const [accelerator, setAccelerator] = useState(0.5)
    const [imgOffset, setImgOffset] = useState(0)

    const handleScroll = () => setImgOffset(window.pageYOffset)
    useEffect(() => {
        // You may want to throttle this. Might not need to though.
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // You can add the style directly. I just have the parallax as a client config so it's easy to have conditions here to include or omit it.
    const attrs = {
        style: { transform: `translateY(${imgOffset * accelerator}px)` },
    }

    return (
        <div className={styles.main}>
            <div>
                <div className={styles['image-wrap']} {...attrs}>
                    <Image
                        src={'http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/08/EiffelWater1.jpg?w=1080&h=810'}
                        className={styles['image-component']}
                        fill
                        alt="Peacock with tail fanned out."
                    />
                </div>
            </div>
            <div className={styles['text-box']}>
                <h1>Parallax Effect using next/image</h1>
                <div>
                    <p>The principle here is to add the parallax effect on a container div.</p>
                   
                </div>
            </div>
 
        </div>
    ) */
    /* return (
        <div className="bod sticky-parallax">
            <div className="magic-fixed-pixel"></div>
            <div id="overflow">
                <div id="container">
                    <div id="parallax"></div>
                    <div id="content">
                        <div className="magic-pixel"></div>
                        <div className="box">Content</div>
                        <div className="box">in</div>
                        <div className="box">boxes</div>
                        <div className="box">to</div>
                        <div className="box">make</div>
                        <div className="box">the</div>
                        <div className="box">page</div>
                        <div className="box">scroll</div>
                    </div>
                </div>
            </div>
        </div>
    ) */
    /* react-parallax */
    /* const insideStyles = {
        background: 'white',
        padding: 20,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    }

    return (
        <>
            <Parallax strength={300}>
                <Background className="custom-bg">
                    <img src="https://www.state.gov/wp-content/uploads/2020/11/shutterstock_186964970-scaled.jpg" />
                </Background>
                <div style={{ height: '70vh' }}>
                    <div
                        style={{
                            background: 'white',
                            padding: 20,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                        }}
                    >
                        HTML inside the parallax
                    </div>
                </div>
            </Parallax>

           <Parallax
                bgImage={'http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/08/EiffelWater1.jpg?w=1080&h=810'}
                strength={500}
            >
                <div style={{ height: '70vh' }}>
                    <div
                        style={{
                            background: 'white',
                            padding: 20,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                        }}
                    >
                        HTML inside the parallax
                    </div>
                </div>
            </Parallax>
        </>
    ) */
    return (
        <>
            <div style={{ width: '100%' }} className="bod">
                {/*                 <ScrollParallax>
                    <div style={{ padding: '4rem', background: 'blue' }}>Stuff</div>
                </ScrollParallax>

                <ScrollParallax>
                    <img src="http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/08/EiffelWater1.jpg?w=1080&h=810" />
                </ScrollParallax> */}

                <header className="parallax-container background-layer">
                    <section aria-labelledby="title" className="parallax-layer midground-layer">
                        <h1 id="title" className="title text-light">
                            Bears
                        </h1>
                        <p className="text-light">
                            <strong>
                                <small>cause why not</small>
                            </strong>
                        </p>
                    </section>
                </header>
            </div>
        </>
    )
}
