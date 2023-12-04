import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import {Grid, Typography} from '@mui/material';

import {ProductCard} from '../productCard/productCard.component';
import './slider.style.scss';

const Slider = (props) =>{
    const {slides, title, perPage = 4, loop = false } = props;

    return(
        <Grid container item xs={12} className='sliderContainer'>
            <Grid container item xs={12} className='title'>
                <Typography className='titleBox' variant="h5">{title}</Typography>
            </Grid>
            <Splide
                className="slider"
                options={ {
                rewind: loop,
                autoplay     : true,
                perMove: 1,
                gap   : '1rem',
                speed : 300,
                arrows       : slides.length > perPage ? 'slider' : null,
                pagination : false,
                height: '330px',
                perPage    : perPage,
                breakpoints: {  
                1100:{
                    perPage: perPage -1,
                },
                640: {
                    perPage: perPage -2,
                },
                450: {
                    perPage: 1,
                },

                },
                } }
            >

            {
            slides.map((slide,index)=>(
                <SplideSlide key={index} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <ProductCard product={slide}  />
                </SplideSlide>
            ))
            }
            </Splide>
        </Grid>
    );
}

export default Slider;