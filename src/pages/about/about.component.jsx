import React from 'react';
import './about.style.scss';
import {Grid, Typography} from '@mui/material';

const About = () => {


    return (
        <Grid container item xs={12}>
            <Typography variant='h3'>About us</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sit cum ex reprehenderit mollitia doloribus iusto voluptatem enim exercitationem sed asperiores distinctio modi accusantium, eaque, quos fugit magnam voluptatum iure!</Typography>
        </Grid>
        
    )
}

export {About};