//import Slider from 'react-slick'
import Slider from 'react-slick'
import styles from './carousel.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselProps } from './types'

function Carousel(sliderData: CarouselProps) {
    const settingsImage = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: sliderData.slideCount,
        slidesToScroll: 1,
        nextArrow: <NextArrowImage />,
        prevArrow: <PrevArrowImage />,
    }

    const settingsText = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: sliderData.slideCount,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                                            <Image src={item.imageUrl} layout="fill" objectFit="cover" alt="" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
                {sliderData.modLayout === 'text' && (
                    <div className={styles.slideItems}>
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

function NextArrow(props: any) {
    const { className, style, onClick } = props
    return (
        <div className={cn(className, styles.nextBtn)} style={{ ...style }} onClick={onClick}>
            next &gt;
        </div>
    )
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props
    return <div className={cn(className, styles.prevBtn)} style={{ ...style }} onClick={onClick}></div>
}

function NextArrowImage(props: any) {
    const { className, style, onClick } = props
    return <div className={cn(className, styles.nextImageBtn)} style={{ ...style }} onClick={onClick}></div>
}

function PrevArrowImage(props: any) {
    const { className, style, onClick } = props
    return <div className={cn(className, styles.prevImageBtn)} style={{ ...style }} onClick={onClick}></div>
}

export default Carousel
