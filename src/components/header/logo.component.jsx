import React from 'react';
import './header.style.scss';
import {Grid, Typography} from '@mui/material';

const Logo = () => {
    return (
        <Grid container item xs={3} className='logo'>
            <Typography variant='h1'>Apple</Typography>
        </Grid>
    );
}

export {Logo};