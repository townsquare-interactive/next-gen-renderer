//import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax'
import { useEffect, useRef, useState } from 'react'
import { Parallax, Background } from 'react-parallax'

import { ImageElement } from './ImageElement'

import { domainImage } from 'functions'
import Image from 'next/image'

const ReactParallax = ({ item, imgsize, cmsUrl, children }: any) => {
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
    /*     const useScrollHandler = (handler: any) => {
        useEffect(() => {
            window.addEventListener('scroll', handler)
            return () => {
                window.removeEventListener('scroll', handler)
            }
        }, [])
    } */

    /*     const FixedDiv = (props: any) => {
        const ref = useRef()

        const handler = () => {
            let currentOffset = window.pageYOffset
            //const stuff = window.scrollY
            const stuff = currentOffset * 0.5

            ref.current.style.transform = `translate3d(-50%, ${stuff}px, 0px)`
        }
        useScrollHandler(handler)
        return (
            <div
                className="fixer"
                ref={ref}
                {...props}
                style={{ height: '830px', width: '100%', transform: 'will-change', left: '50%', position: 'absolute', marginTop: '-130px' }}
            />
        )
    } */

    return (
        <>
            <div
                style={{
                    overflow: 'hidden',
                    //position: 'relative'
                }}
            >
                <Parallax
                    strength={280}
                    blur={10}
                    //bgImage={nextImage}
                >
                    <Background className="custom-bg">
                        <>
                            <ImageElement
                                imgSrc={item.image}
                                imgAlt={item.img_alt_tag}
                                imagePriority={item.imagePriority}
                                imgsize={imgsize}
                                modType={'Parallax'}
                                opacity={item.modOpacity}
                                columns={item.columns}
                            />
                        </>
                    </Background>

                    <div style={{ height: item.modOne || '70vh' }}>
                        <div
                            style={{
                                position: 'absolute',
                                left: '50%',
                                width: '100%',
                                transform: 'translate(-50%,-50%)',
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </Parallax>
                {/*                  <FixedDiv>
                    <div style={{ position: 'relative', height: '100%' }}>
                        <ImageElement
                            imgSrc={item.image}
                            imgAlt={item.img_alt_tag}
                            imagePriority={item.imagePriority}
                            imgsize={imgsize}
                            cmsUrl={cmsUrl}
                            modType={'Parallax'}
                            opacity={item.modOpacity}
                        />
                    </div>
                </FixedDiv>
                <div style={{ height: item.modOne || '70vh' }}>
                    <div
                        style={{
                            position: 'absolute',
                            left: '50%',
                            width: '100%',
                            transform: 'translate(-50%,-50%)',
                            top: '0',
                        }}
                    >
                        {children}
                    </div>
                </div> */}
            </div>
        </>
    )
    /*     return (
        <>
            <div
                style={{
                    overflow: 'hidden',
                    //position: 'relative'
                }}
            >
                
                <Image
                    src={domainImage(item.image, true, cmsUrl || '')}
                    fill
                    alt={item.img_alt_tag || ''}
                    quality="50"
                    priority={item.imagePriority}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'top',
                        opacity: item.modOpacity || 1,
                    }}
                    sizes={'100vh'}
                    //ref={ref}
                    //className={modType === 'Parallax' ? 'jarallax-img' : ''}
                />

                <div style={{ height: item.modOne || '70vh' }}>
                    <div
                        style={{
                            position: 'absolute',
                            left: '50%',
                            width: '100%',
                            transform: 'translate(-50%,-50%)',
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    ) */
}

export default ReactParallax
