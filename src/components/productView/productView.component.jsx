import React from 'react';
import './productView.style.scss';
import { Grid,Typography } from '@mui/material';

const ProductView = ({product}) => {
    console.log(product);
    return (
        <Grid container item xs={12} justifyContent={'center'}>
          <img src={product.img} alt={product.title} />
          <Typography variant='body1' >{product.desc}</Typography>
        </Grid>
    )
}

export {ProductView};