import React from  'react';
import './header.style.scss';
import { useBasket } from '../../provider/basketProvider/basketProvider';
import {Grid,Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MdRemoveShoppingCart } from "react-icons/md";

const Basket = (props) => {
    const {basketView} = props;
    const { state:{basket},dispatch } = useBasket();
    const navigate = useNavigate();

    const removeFromBasket = (product) => {
        dispatch({type: 'REMOVE_FROM_BASKET',product});
    }

    return(
        <div className='basket-container' style={basketView ? {width:'400px',height:'auto'}: {}}>
            {basket.length ?
            <Grid container item xs={12} className='basketHead' >
                <p></p>
                <Typography variant="body2" style={{color:"rgb(255, 223, 223)"}}>No</Typography>
                <Typography variant="body2" style={{color:"rgb(255, 223, 223)"}}>Name</Typography>
                <Typography variant="body2" style={{color:"rgb(255, 223, 223)"}}>Qty</Typography>
                <Typography variant="body2" style={{color:"rgb(255, 223, 223)"}}>Price</Typography>
                <Typography variant="body2" style={{color:"rgb(255, 223, 223)"}}>Total</Typography>
            </Grid> : ''
            }
            {
            basket.length ? basket.map((item,index)=>(
                <div key={index} className='basketItem' onClick={()=>navigate(`/shop/${item.id}`)}>
                    <p><MdRemoveShoppingCart className='removeItem' onClick={()=>removeFromBasket(item)} /></p>
                    <p>{index+1}</p>
                    <h4>{item.title}</h4>
                    <p>{+item?.purchasedQty}</p>
                    <p>{+item?.price}$</p>
                    <p>{+item?.price * +item.purchasedQty}$</p>
                </div>
            )) : 
            <div className='emptyBasket'> 
                <p>There is no Item in the Basket</p>
                <img src="/images/empty-basket.jpg" />
            </div>}
            <Button onClick={()=>navigate("/cart")} variant='outlined' className='button'>checkout</Button>
        </div>
    );
}

export {Basket}