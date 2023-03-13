'use client'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { ImageElement } from 'elements/ImageElement'
import styles from '../components/parallax.module.scss'

const ReactScroll = ({ item, imgsize, cmsUrl, children }: any) => {
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
                            </div>
                        ),
                        speed: -33,
                    },
                ]}
                //layers={[{ image: nextImg, speed: -35 }]}
                //style={{ height: '70vh' }}
                className={styles['parralax-banner']}
            >
                {children}
            </ParallaxBanner>
        </ParallaxProvider>
    )
}

export default ReactScroll
