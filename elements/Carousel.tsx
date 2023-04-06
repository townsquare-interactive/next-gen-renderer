//react slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = (props: any) => {
    const { settings, children } = props

    return <Slider {...settings}>{children}</Slider>
}

export default Carousel
