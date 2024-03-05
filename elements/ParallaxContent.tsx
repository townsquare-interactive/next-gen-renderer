import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { ImageElement } from 'elements/ImageElement'
import styles from '../components/parallax.module.scss'
import { ReactScrollProps } from '../types'

const ParallaxContent = ({ item, imgsize, children, columns }: ReactScrollProps) => {
    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    {
                        children: (
                            <div className={styles['image-block']} style={item.modColor1 ? { background: item.modColor1 } : {}}>
                                <ImageElement
                                    imgSrc={item.image || ''}
                                    imgAlt={item.img_alt_tag}
                                    imagePriority={item.imagePriority}
                                    imgsize={imgsize}
                                    modType={'Parallax'}
                                    opacity={item.modOpacity || 1}
                                    nextImageSizes={item.nextImageSizes}
                                    columns={columns}
                                />
                            </div>
                        ),
                        speed: -33,
                    },
                ]}
                style={{ height: '70vh' }}
                className={styles['parallax-banner']}
            >
                {children}
            </ParallaxBanner>
        </ParallaxProvider>
    )
}

export default ParallaxContent
