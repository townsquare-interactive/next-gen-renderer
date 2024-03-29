//react slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState, useRef } from 'react'
import { ImageBlock } from './ImageBlock'
import { CarouselProps } from 'types'
import styles from './carousel.module.scss'
import cn from 'classnames'
import DescBlock from './DescBlock'

const Carousel = (props: CarouselProps) => {
    const { settings, children, modItems, cmsUrl, imgsize = 'landscape_4_3', useThumbnail, modType } = props

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
                        <div
                            style={{
                                width: `${(100 * modItems.length) / 7}%`,
                            }}
                            className={styles.wrapper}
                        >
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
                                        <ImageBlock item={item} imgsize={imgsize} modType={'thumbnail'} columns={1} />

                                        <div
                                            className={cn(styles['caption'], 'caption', {
                                                [styles['cap-bckg']]: item.modSwitch1 != 1 && item.image && (item.desc || item.headline || item.visibleButton),
                                            })}
                                            style={!item.image ? item.itemStyle : {}}
                                        >
                                            <DescBlock desc={item.headline || ''} type="carousel" descSize="sm" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </>
            ) : modType === 'review_carousel' ? (
                <Slider
                    {...settings}
                    centerMode={true}
                    centerPadding="0"
                    //adaptiveHeight={true}
                >
                    {children}
                </Slider>
            ) : (
                <Slider {...settings}>{children}</Slider>
            )}
        </>
    )
}

export default Carousel
