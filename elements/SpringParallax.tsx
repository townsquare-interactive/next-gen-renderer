import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import { ImageElement } from './ImageElement'

const SpringParallax = ({ item, imgsize, cmsUrl, children }: any) => {
    const ref = useRef(null)
    return (
        <>
            {/* <Parallax pages={1} ref={ref}>
            <ParallaxLayer offset={0} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img
                    src={'http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/08/EiffelWater1.jpg?w=1080&h=810'}
                    style={{ width: '100%' }}
                />
                {props.children}
            </ParallaxLayer>

          
        </Parallax> */}

            {/* <Parallax pages={1} ref={ref}>
                

                <ParallaxLayer offset={0} speed={2}>
                    <div style={{ background: 'blue', padding: '4rem', width: '30%' }}>Hello this is the content</div>
                </ParallaxLayer>
            </Parallax> */}

            <Parallax pages={2} ref={ref}>
                {/*        <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer> */}
                <ParallaxLayer offset={0} speed={0.5}>
                    <h2>Web development is fun!</h2>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    factor={2}
                    style={{
                        backgroundImage: `url(${'http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/08/EiffelWater1.jpg'})`,
                        backgroundSize: 'cover',
                    }}
                />
            </Parallax>
            {/*       <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                <ImageElement
                    imgSrc={item.image}
                    imgAlt={item.img_alt_tag}
                    imagePriority={item.imagePriority}
                    imgsize={imgsize}
                    cmsUrl={cmsUrl}
                    modType={'Parallax'}
                    opacity={item.modOpacity}
                />
            </div> */}
        </>
    )
}

export default SpringParallax
