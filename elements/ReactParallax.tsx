//import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax'
import { Parallax, Background } from 'react-parallax'
import { useRef } from 'react'
import { domainImage } from 'functions'
import BackgroundImage from './BackgroundImage'
import Image from 'next/image'
import { useState } from 'react'
import { Media, ImageBlockProps } from '../types'

const ReactParallax = (props: any) => {
    //const [imageHeight, setHeight] = useState(100)
    // const [imageWidth, setWidth] = useState(300)
    //const [nextImage, setImage] = useState('')
    /* 
    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }
 */

    //used to get next.js image url after loading
    /*     const myLoader = ({ src, width, quality }: any) => {
        const urlEncode = 'https://jremodeling.vercel.app/_next/image?url=' + encodeURIComponent(`${src}`)
        const urlWithQuality = urlEncode + `&w=${width}` + `&q=${quality || 65}`

        setImage(urlWithQuality)
        return urlWithQuality
    }
 */
    return (
        <>
            {props.useJsLax ? (
                <>
                    <div>
                        {/*  <Image
                            src={domainImage(props.item.image, true, props.cmsUrl || '')}
                            fill
                            style={{ objectFit: 'cover', display: 'none' }}
                            quality="70"
                            sizes="100vw"
                            // width={2000}
                            //height={830}
                            alt=""
                            loader={myLoader}
                            priority={props.item.imagePriority}
                        /> */}
                        {/*  <Parallax strength={300} bgImage={nextImage}> */}
                        <Parallax
                            strength={300}
                            //bgImage={nextImage}
                        >
                            <Background className="custom-bg">
                                <>
                                    <Image
                                        src={domainImage(props.item.image, true, props.cmsUrl || '')}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        //quality="80"
                                        sizes="100vw"
                                        // width={2000}
                                        //height={830}
                                        alt=""
                                        //                                   unoptimized
                                        // width={imageWidth}
                                        //height={imageHeight}
                                        //onLoadingComplete={calcImageSize}
                                        //loader={myLoader}
                                        priority={props.item.imagePriority}
                                    />
                                </>
                            </Background>

                            <div style={{ height: '70vh' }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        width: '100%',
                                        transform: 'translate(-50%,-50%)',
                                    }}
                                >
                                    {props.children}
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </>
            ) : (
                props.children
            )}
        </>
    )
}

export default ReactParallax
