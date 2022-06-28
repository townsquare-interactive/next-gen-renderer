//import Slider from 'react-slick'
import Slider from 'react-slick'
import styles from './carousel.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselProps } from './types'
import { domainImage } from '../functions'

function Carousel(props: CarouselProps) {
    const { items, modLayout, slideCount, autoPlay, themeStyles } = props
    const themeStylesObj = {
        color: `${themeStyles['textColor']}`,
        borderColor: `${themeStyles['textColor']}`,
        borderStyle: 'solid',
        borderWidth: '4px 0 4px 0',
    }
    const imageStyles = {
        borderColor: `${themeStyles['mainColor']}`,
        borderStyle: 'solid',
        borderWidth: '0 2px 0 2px',
    }

    const arrowBackground = `.arrowNext{background: ${themeStyles['mainColor']}} .arrowNext:hover{background: ${themeStyles['accentColor2']}}`

    //Sets slide count to 1 if there are more slides than items to show, or if text shows
    function setSlide() {
        if (modLayout === 'images' && items.length >= slideCount) {
            return slideCount
        } else {
            return 1
        }
    }

    const settingsImage = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: setSlide(),
        slidesToScroll: 1,
        nextArrow: <NextArrowImage />,
        prevArrow: <PrevArrowImage />,
        autoplay: autoPlay || false,
        autoplaySpeed: 2600,
    }

    const settingsText = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: setSlide(),
        slidesToScroll: 1,
        nextArrow: <NextArrow themeStyles={themeStyles} />,
        /* prevArrow: <PrevArrow themeStyles={themeStyles} />, */
    }

    return (
        <div className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.hasImage]: modLayout === 'images',
                    [styles.hasText]: modLayout === 'text',
                })}
                /* style={modLayout === 'images' ? imageStyles : themeStyles} */
                style={modLayout === 'images' ? imageStyles : themeStylesObj}
            >
                {modLayout === 'images' && (
                    <div className={styles.slideItems}>
                        <style>{arrowBackground}</style>
                        <Slider {...settingsImage}>
                            {items.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    {item.imageUrl && (
                                        <div className={styles.imageTile}>
                                            <Image src={domainImage(item.imageUrl)} layout="fill" objectFit="cover" alt={item.altText || ''} quality="50" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
                {modLayout === 'text' && (
                    <div className={styles.slideItems}>
                        <Slider {...settingsText}>
                            {items.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    <div className={styles.text}>
                                        <p>{item.text}</p>
                                        <h3>{item.byline}</h3>
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
    const { className, style, onClick, themeStyles } = props

    const themeStylesObj = {
        color: `${themeStyles['textColor']}`,
    }
    const themeStyles2 = {
        color: `${themeStyles['textColorAccent']}`,
    }

    return (
        <div className={cn(className, styles.nextBtn)} style={{ color: `${themeStyles['textColor']}`, ...style, themeStyles2 }} onClick={onClick}>
            next &gt;
        </div>
    )
}

/* function PrevArrow(props: any) {
    const { className, style, onClick } = props
    return <div className={cn(className, styles.prevBtn)} style={{ ...style }} onClick={onClick}></div>
} */

function NextArrowImage(props: any) {
    const { className, style, onClick } = props

    return <div className={cn(className, styles.imageBtns, styles.nextImageBtn, 'arrowNext')} style={{ ...style }} onClick={onClick}></div>
}

function PrevArrowImage(props: any) {
    const { className, style, onClick } = props
    return <div className={cn(className, styles.imageBtns, styles.prevImageBtn, 'arrowNext')} style={{ ...style }} onClick={onClick}></div>
}

export default Carousel
