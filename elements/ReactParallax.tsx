//import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax'
import { Parallax, Background } from 'react-parallax'
import { useRef } from 'react'
import { domainImage } from 'functions'
import BackgroundImage from './BackgroundImage'
import Image from 'next/image'
import { useState } from 'react'
import { Media, ImageBlockProps } from '../types'

const ReactParallax = (props: any) => {
    /* const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)
    const [hideImage, setHideImage] = useState(false) 

    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }*/

    return (
        <>
            {props.useJsLax ? (
                <>
                    <div>
                        <Parallax strength={700}>
                            <Background className="custom-bg">
                                <Image
                                    src={domainImage(props.img, true, props.cmsUrl || '')}
                                    //fill
                                    quality="80"
                                    sizes="100vw"
                                    // width={imageWidth}
                                    //height={imageHeight}
                                    width={2000}
                                    height={1080}
                                    alt=""
                                />
                                {/* <img src={domainImage(props.img, true, props.cmsUrl || '')} /> */}
                            </Background>
                            {props.children}
                        </Parallax>
                    </div>
                </>
            ) : (
                props.children
            )}
        </>
    )
}

/*                     <Parallax strength={700} style={{ height: '70vh', width: '100%' }}>
                        <Background className="custom-bg">
                            <Image
                                src={domainImage(props.img, true, props.cmsUrl || '')}
                                //fill
                                quality="80"
                                //style={{ objectFit: 'cover', objectPosition: 'top' }}
                                sizes="100vw"
                                // width={imageWidth}
                                //height={imageHeight}
                                width={2000}
                                height={830}
                                onError={() => {
                                    setHideImage(true)
                                }}
                                alt=""
                                onLoadingComplete={calcImageSize}
                            />
                        </Background>
                        {props.children}
                    </Parallax> */

export default ReactParallax
