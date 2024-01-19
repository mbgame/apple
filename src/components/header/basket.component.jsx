import React from 'react';
import './header.style.scss';
import { useBasket } from '../../provider/basketProvider/basketProvider';
import { MdDeleteForever } from "react-icons/md";
import { Grid,Typography } from '@mui/material';

const Basket = (props) => {
    const {basketView} = props;
    const {state:{basket},dispatch} = useBasket();

    const removeItem = (product) => {
        dispatch({type: 'REMOVE_FROM_BASKET',product});
    }

    return (
       <div className='basketContainer' style={basketView  ? {width:'400px'} : {}}>
        {basket.length ? (
        <>
        <Grid container item xs={12} className='basketHead'>
            <p></p>
            <Typography variant="body2">No</Typography>
            <Typography variant="body2">Title</Typography>
            <Typography variant="body2">Qty</Typography>
            <Typography variant="body2">Price</Typography>
            <Typography variant="body2">Total</Typography>
        </Grid>
            {basket.map((item,index)=>(
                <div key={index} className='basketItem'>
                    <MdDeleteForever onClick={()=>removeItem(item)} />
                    <p>{index+1}</p>
                     <p>{item?.title}</p>
                     <p>{+item?.purchasedQty}</p>
                     <p>{+item?.price}$</p>
                     <p>{+item?.price * +item?.purchasedQty}$</p>
                </div>
               
            ))}
         
         </> )
         :
            <p >there is no items in your basket</p> 
        }
       </div>
    );
}

export {Basket};