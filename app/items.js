import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Sliders({slideShow, margin, scroll, play}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: {slideShow},
        slideMargin: {margin},
        slidesToScroll: {scroll},
        autoplay: {play},
        autoplaySpeed: 3000,
      
      };
    return(
        settings
    )
}