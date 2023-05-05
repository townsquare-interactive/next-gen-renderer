//react slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState, useRef, ReactElement } from 'react'
import { ImageBlock } from './ImageBlock'
import { CarouselProps } from 'types'
import styles from './carousel.module.scss'
import cn from 'classnames'
import DescBlock from './DescBlock'

const Carousel = (props: CarouselProps) => {
    const { settings, children, modItems, cmsUrl, imgsize = 'landscape_4_3', useThumbnail } = props

    const slider1 = useRef(null)
    const slider2 = useRef(null)
    const [nav1, setNav1] = useState<any>(null)
    const [nav2, setNav2] = useState<any>(null)

    useEffect(() => {
        setNav1(slider1), setNav2(slider2)
    }, [])

    return (
        <>
            {useThumbnail && modItems ? (
                <>
                    <Slider {...settings} ref={(slider) => setNav1(slider)} asNavFor={nav2}>
                        {children}
                    </Slider>
                    <div className={styles['thumb-gallery']}>
                        <div style={{ maxWidth: `${1400 / modItems.length}px` }} className={styles.wrapper}>
                            <Slider
                                asNavFor={nav1}
                                slidesToShow={modItems.length}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                ref={(slider) => setNav2(slider)}
                                className={'thumb-slider'}
                            >
                                {modItems.map((item, index: number) => (
                                    <div className={cn('thumb-nav', styles['thumb-nav'])} key={index}>
                                        <ImageBlock item={item} imgsize={imgsize} well={0} cmsUrl={cmsUrl} modType={'PhotoGallery'} columns={1} />

                                        <div
                                            className={cn(styles['caption'], 'caption', {
                                                [styles['cap-bckg']]: item.modSwitch1 != 1 && item.image && (item.desc || item.headline || item.visibleButton),
                                            })}
                                            style={item.modOne ? { height: item.modOne } : {}}
                                        >
                                            <DescBlock desc={item.headline} type="carousel" descSize="sm" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </>
            ) : (
                <Slider {...settings}>{children}</Slider>
            )}
        </>
    )
}

export default Carousel
