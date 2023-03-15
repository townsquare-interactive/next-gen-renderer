'use client'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { ImageElement } from 'elements/ImageElement'
import styles from '../components/parallax.module.scss'
import Image from 'next/image'

import { useParallaxController } from 'react-scroll-parallax'
import { domainImage } from 'functions'

//const Image = () => {

/* return <img src="image.jpg" onLoad={() => parallaxController.update()} />; */

const ReactScroll = ({ item, imgsize, cmsUrl, children }: any) => {
    const TheImg = () => {
        const parallaxController: any = useParallaxController()
        return (
            <Image
                src={domainImage(item.image, true, cmsUrl || '')}
                fill
                alt={item.img_alt_tag || ''}
                quality="80"
                priority={item.imagePriority}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                    opacity: item.modOpacity || 1,
                }}
                sizes={'100vh'}
                onLoadingComplete={() => parallaxController.update()}
            />
        )
    }

    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    {
                        children: (
                            <div style={{ position: 'relative', height: '100%', willChange: 'transform' }}>
                                <ImageElement
                                    imgSrc={item.image}
                                    imgAlt={item.img_alt_tag}
                                    imagePriority={item.imagePriority}
                                    imgsize={imgsize}
                                    cmsUrl={cmsUrl}
                                    modType={'Parallax'}
                                    opacity={item.modOpacity}
                                />
                                {/*   <TheImg /> */}
                            </div>
                        ),
                        speed: -33,
                        //easing: 'easeOutQuad',
                    },
                ]}
                //layers={[{ image: nextImg, speed: -35 }]}
                style={{ height: '70vh' }}
                className={styles['parralax-banner']}
            >
                {children}
            </ParallaxBanner>
        </ParallaxProvider>
    )
}

export default ReactScroll
