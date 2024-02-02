import React from 'react';
import './cart.style.scss';
import { useBasket } from '../../provider/basketProvider/basketProvider';
import {Grid ,Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { state:{basket},dispatch } = useBasket();
    const navigate = useNavigate();

       return (
        <Grid container item xs={12} className='cart'>
            <Grid container item xs={12} className='header'>
                <Typography variant='h5'>Quantity in basket : {basket.length}</Typography>
            </Grid>
            <Grid container item xs={8} className='basket'>
                {basket.map((product,index)=>{
                    return (
                        <Grid key={product.id} container item xs={12} className="basketProductCard">
                            <img onClick={()=>navigate(`/shop/${product.id}`)} src={product.img} alt={product.title} />
                            <Typography variant="h6"><span>Product Name : </span>{product.title}</Typography>
                            <Typography variant='body1'><span>Quantity : </span>{product.purchasedQty}</Typography>
                            <Typography variant='body1'><span>Price : </span>{product.price} $</Typography>
                            <Typography variant='h5'><span>Total : </span>{ product.purchasedQty * product.price} $</Typography>
                        </Grid>
                    )
                })

                }
            </Grid>
            <Grid container item xs={4} className='total'>
                total
            </Grid>
        </Grid>
    )
}

export {Cart};