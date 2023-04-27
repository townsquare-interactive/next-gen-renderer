//react slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState, useRef } from 'react'
import { ImageBlock } from './ImageBlock'

const Carousel = (props: any) => {
    const { settings, children, modItems, cmsUrl, imgsize = 'landscape_4_3', useThumbnail } = props

    const slider1 = useRef<any>(null)
    const slider2 = useRef(null)

    const [nav1, setNav1] = useState<any>(null)
    const [nav2, setNav2] = useState<any>(null)

    useEffect(() => {
        setNav1(slider1), setNav2(slider2)
    }, [])

    return (
        <>
            {!useThumbnail ? (
                <Slider {...settings}>{children}</Slider>
            ) : (
                <>
                    <Slider {...settings} ref={(slider) => setNav1(slider)} asNavFor={nav2}>
                        {children}
                    </Slider>

                    <Slider
                        asNavFor={nav1}
                        slidesToShow={modItems.length}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        ref={(slider) => setNav2(slider)}
                        className={'thumb-slider'}
                    >
                        {modItems.map((item: any, index: number) => (
                            <div className={'thumb-nav'} key={index} style={{ width: '138px' }}>
                                <ImageBlock item={item} imgsize={imgsize} well={0} cmsUrl={cmsUrl} modType={'PhotoGallery'} columns={1} />
                            </div>
                        ))}
                    </Slider>
                </>
            )}
        </>
    )
}

export default Carousel
