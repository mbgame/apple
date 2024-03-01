import React from 'react';
import './cart.style.scss';
import { useBasket } from '../../provider/basketProvider/basketProvider';
import {Grid ,Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { state:{basket},dispatch } = useBasket();
    const navigate = useNavigate();


    const totalPrice = basket.reduce((acc,item)=>
    (acc + (item.price * item.purchasedQty)),0);
    const totalDiscount = basket.reduce((acc,item)=>
    (acc + ((item.price * item.purchasedQty * item.discount)/100)),0);

    const totalWeight = basket.reduce((acc,item)=>
    (acc + (item.weight * item.purchasedQty)),0);

    const totalQuantity = basket.reduce((acc,item)=>
    (acc + (item.purchasedQty)),0);

    const totalShipment = Math.floor(totalWeight * 100);

    const totalPackaging = (qty) => {
        switch(qty){
            case 1 :
                return 10;
            case 2 :
                return 12;
            case 3 :
                return 14;
            case 4 :
            case 5 :
                return 15;
            case 6 :
                return 20;
            default :
                return 0;
        }
    }

    const total = totalPrice + totalShipment + totalPackaging(totalQuantity);

    const handleBank = () => {
        console.log("you are relocating to bank");
        navigate('https://www.shaparak.ir')
    }

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
                <Typography variant="h6" >Total price : {totalPrice} $</Typography>
                <Typography variant="h6" >Total discount : {totalDiscount} $</Typography>
                <Typography variant="h6" >Total Shipment : {totalShipment} $</Typography>
                <Typography variant="h6" >Total Packaging : {totalPackaging(totalQuantity)} $</Typography>
                <hr />
                <Typography variant="h5" >Total Payment : {total} $</Typography>
                <Button style={{minWidth : '250px',marginTop:'10px'}} variant='contained' onClick={handleBank}>go to bank</Button>
            </Grid>
        </Grid>
    )
}

export {Cart};