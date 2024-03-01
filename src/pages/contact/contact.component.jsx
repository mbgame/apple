import React from 'react';
import './contact.style.scss';
import {Grid, Typography} from '@mui/material';

const Contact = () => {

    return (
        <Grid container item xs={12} className='contact'>
            <Typography variant='h3'>Contact us</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sit cum ex reprehenderit mollitia doloribus iusto voluptatem enim exercitationem sed asperiores distinctio modi accusantium, eaque, quos fugit magnam voluptatum iure!</Typography>
            <hr/>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2209.752787188665!2d51.38700671814643!3d35.72047831824714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00d61482d9fd%3A0x1a4e69af4e90f77!2sTehran%20Heart%20Center!5e0!3m2!1sen!2s!4v1709307736510!5m2!1sen!2s"
                width="600" height="450" 
                style={{border:0}} title='company map' className='map'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
        
    )
}

export {Contact};