//import Slider from 'react-slick'
import Slider from 'react-slick'

import styles from './carousel.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { SliderProps } from './types'

/* const sliderData: {
    modLayout: 'image'
    items: [
        {
            text: 'helo'
            imageUrl: 'https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg'
        },
        {
            text: 'helo'
            imageUrl: 'https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg'
        },
        {
            text: 'helo'
            imageUrl: 'https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg'
        },
        {
            text: 'helo'
            imageUrl: 'https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg'
        }
    ]
} */

function Carousel(sliderData: SliderProps) {
    /*     function calcSlides() {
        let slidesShown
        if (sliderData.items.length === 1) {
            return 1
        } else if (sliderData.items.length === 2) {
            return 2
        } else {
            return 3
        }
    } */

    // let imageUrl = true
    console.log('slidecount', sliderData.slideCount)
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        //slidesToShow: sliderData.modLayout === 'images' ? sliderData.slideCount : 1,
        slidesToShow: sliderData.slideCount,
        slidesToScroll: 1,
    }

    return (
        <div className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.hasImage]: sliderData.modLayout === 'images',
                })}
            >
                {sliderData.modLayout === 'images' && (
                    <div className={styles.slideItems}>
                        <Slider {...settings}>
                            {sliderData.items.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    {item.imageUrl && (
                                        <div className={styles.imageTile}>
                                            <Image
                                                // Route of the image file
                                                src={item.imageUrl}
                                                height={400}
                                                width={600}
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

                        <Slider {...settings}>
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

                {/* <Slider {...settings}>
                    <div className={styles.item}>
                        {!imageUrl && (
                            <div className={styles.text}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        )}
                        {imageUrl && (
                            <div className={styles.imageTile}>
                                <Image
                                    // Route of the image file
                                    src="https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg"
                                    height={400}
                                    width={600}
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.item}>
                        {!imageUrl && (
                            <div className={styles.text}>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui{' '}
                                </p>
                            </div>
                        )}
                        {imageUrl && (
                            <div className={styles.imageTile}>
                                <Image
                                    // Route of the image file
                                    src="https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg"
                                    height={400}
                                    width={600}
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.item}>
                        {!imageUrl && (
                            <div className={styles.text}>
                                <p>
                                    usantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                    vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui{' '}
                                </p>
                            </div>
                        )}
                        {imageUrl && (
                            <div className={styles.imageTile}>
                                <Image
                                    // Route of the image file
                                    src="https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg"
                                    height={400}
                                    width={600}
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                </Slider> */}
            </div>
        </div>
    )
}

export default Carousel
