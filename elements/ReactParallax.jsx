//import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax'
import { Parallax, Background } from 'react-parallax'
import { useRef } from 'react'
import { domainImage } from 'functions'
import BackgroundImage from './BackgroundImage'
import Image from 'next/image'
import { useState } from 'react'

const ReactParallax = (props) => {
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)

    //const target = useRef(null)

    /*    const train = useParallax({
        speed: 500,
        targetElement: target.current,

        
    }) */

    const calcImageSize = (loadedMedia) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    return (
        <>
            {props.useJsLax ? (
                <Parallax strength={800} style={{ height: '70vh', width: '100%', height: '100%' }}>
                    <Background className="custom-bg" style={{ height: '70vh' }}>
                        {/* <img src="http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/10/screen-8.jpg" alt="fill murray" style={{}} />*/}
                        <div>
                            <Image
                                src={domainImage(props.img, true, props.cmsUrl || '')}
                                //fill
                                quality="80"
                                //style={{ objectFit: 'cover', objectPosition: 'top' }}
                                sizes="100vw"
                                width={2000}
                                height={830}
                                //width={imageWidth}
                                //height={imageHeight}
                                onError={() => {
                                    setHideImage(true)
                                }}
                                alt=""
                                onLoadingComplete={calcImageSize}
                            />
                        </div>

                        {/*  <img src={domainImage(props.img, true, props.cmsUrl || '')} style={{}} /> */}
                    </Background>
                    {props.children}
                </Parallax>
            ) : (
                props.children
            )}
        </>
    )
}

export default ReactParallax
