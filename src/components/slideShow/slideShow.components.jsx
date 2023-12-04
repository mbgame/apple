import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideShow.style.scss';

const SlideShow = () => {
    return (
<Slide 
    slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={true} 
    responsive={[{
    breakpoint: 800,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }, {
  breakpoint: 500,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}]}>
        <div className='slideContainer'>
            <img src="/images/slide1.jpg" alt="slide1" /> 
        </div>
        <div className='slideContainer'>
            <img src="/images/slide2.jpg" alt="slide2" /> 
        </div>
        <div className='slideContainer'>
            <img src="/images/slide3.jpg" alt="slide3" /> 
        </div>
    </Slide>
    );
};

export  {SlideShow};