//import Slider from 'react-slick'
import Slider from 'react-slick'
import styles from './carousel.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderProps } from './types'

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props
    return (
        <div className={cn(className, styles.nextBtn)} style={{ ...style }} onClick={onClick}>
            next &gt;
        </div>
    )
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props
    return <div className={cn(className, styles.prevBtn)} style={{ ...style }} onClick={onClick}></div>
}

function Carousel(sliderData: SliderProps) {
    const settingsImage = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: sliderData.slideCount,
        slidesToScroll: 1,
    }

    const settingsText = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: sliderData.slideCount,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <div className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.hasImage]: sliderData.modLayout === 'images',
                    [styles.hasText]: sliderData.modLayout === 'text',
                })}
            >
                {sliderData.modLayout === 'images' && (
                    <div className={styles.slideItems}>
                        <Slider {...settingsImage}>
                            {sliderData.items.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    {item.imageUrl && (
                                        <div className={styles.imageTile}>
                                            <Image
                                                // Route of the image file
                                                src={item.imageUrl}
                                                layout="fill"
                                                objectFit="cover"
                                                alt=""
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
                {sliderData.modLayout === 'text' && (
                    <div className={styles.slideItems}>
                        {/*-------------------Text layout*/}

                        <Slider {...settingsText}>
                            {sliderData.items.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.text}>
                                        <p>{item.text}</p>
                                        <h3>{item.headline}</h3>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Carousel
