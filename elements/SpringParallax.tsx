import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import { ImageElement } from './ImageElement'

const SpringParallax = ({ item, imgsize, cmsUrl, children }: any) => {
    const ref = useRef(null)

    const center = { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }

    /*     const scrollTo = (index) => {
        ref.current.scrollTo(index)
    } */

    return (
        <>
            <div className="spring" style={{ height: '70vh', display: 'block' }}>
                {/* <Parallax pages={1} ref={ref}>
                                       <img
                        src={'http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/08/EiffelWater1.jpg?w=1080&h=810'}
                        style={{ width: '100%' }}
                    /> 
                    <ParallaxLayer
                        offset={0}
                        speed={-2}
                        style={{
                            backgroundImage:
                                'url(http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/08/EiffelWater1.jpg?w=1080&h=810)',
                        }}
                    >
                        <div style={{ padding: '3rem', backgroundColor: 'red', color: '#fff' }}>First block</div>
                    </ParallaxLayer>

               <ParallaxLayer offset={1} speed={-1} style={{ pointerEvents: 'none' }}>
                        <div style={{ padding: '3rem', backgroundColor: 'blue', color: '#fff' }}>Second block</div>
                    </ParallaxLayer> 
                </Parallax> */}
                <Parallax pages={1} ref={ref} style={{ height: '70vh', display: 'block', position: 'relative' }}>
                    {/* speed is the speed of scrolling */}
                    <ParallaxLayer offset={0} speed={-1.5}>
                        <div
                            style={{
                                backgroundImage: `url(http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/08/EiffelWater1.jpg?w=1080&h=810)`,
                                backgroundSize: 'cover',
                                height: '70vh',
                            }}
                            className="layer"
                        ></div>
                    </ParallaxLayer>
                    {/* offset means that this layer starts at second page*/}
                    {/* factor means how many pages the layer spans across */}
                    <ParallaxLayer offset={0} speed={2}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <h1>IT USES THE PARALLAX EFFECT!</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={-0.2} style={{ opacity: 0.6 }}>
                        <img alt="cloud" src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png" style={{ width: '50%', marginLeft: '20%' }} />
                    </ParallaxLayer>
                </Parallax>
                {/* <Parallax pages={1} ref={ref}>
                

                <ParallaxLayer offset={0} speed={2}>
                    <div style={{ background: 'blue', padding: '4rem', width: '30%' }}>Hello this is the content</div>
                </ParallaxLayer>
            </Parallax> */}

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
            </div>
        </>
    )
}

export default SpringParallax
