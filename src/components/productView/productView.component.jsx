import React,{useState} from 'react';
import './productView.style.scss';
import { Grid,Typography, Button } from '@mui/material';
import { FaCartPlus } from "react-icons/fa";
import { useBasket } from '../../provider/basketProvider/basketProvider';

const ProductView = ({product}) => {

  const {state:{basket},dispatch} = useBasket();

  console.log("basket : ",basket);

    const addProduct = (e,product) => {
      dispatch({type:'ADD_TO_BASKET',product});
    }

    const increase = (e,product) => {
      dispatch({type:'INCREASE_QUANTITY',product});
    }

    const decrease = (e,product) => {
      dispatch({type:'DECREASE_QUANTITY',product});
    }

    const realPrice  = product.price - ((product.price * product.discount )/100);
    return (
        <Grid container item xs={12} justifyContent={'center'} className='productView'>
          <Grid container item xs={12} md={6} className='imageContainer'>
            {!product?.img ? 
            <img src="/images/products/default-product-image.png" alt="default product" />
            : 
            <img src={product?.img} alt={product?.title} />}
          </Grid>
          <Grid container item xs={12} md={6} className='desc'>
            <Typography variant='h3' >{product?.title}</Typography>
            <Typography variant='body1' >{product?.desc}</Typography>
            <Typography variant='body1' >Brand : <span>{product?.brand}</span></Typography>
            <Typography variant='body1' >Type : <span>{product?.type}</span></Typography>
            <Typography variant='body1' >Size : <span>{product?.size}</span></Typography>
            <Typography variant='body1' >Weight : <span>{product?.weight} Kg</span></Typography>
            <Grid container item xs={12} justifyContent={'space-between'} style={{position:'relative'}}>
              <Typography variant='h4' style={{padding : '30px',color:'red',fontSize:'28px'}} >Price : {realPrice} $</Typography>
             {+product?.discount ? <Typography variant='h4' style={{padding : '30px',color:'red',fontSize:'28px'}}>{product.discount}% Off</Typography> : ''}
             {+product?.discount ? <Typography variant='body1' style={{position:'absolute',bottom:'20px',left:'100px'}} ><del>{product?.price} $</del></Typography> : ''}
            </Grid>
            
           
            <Grid container item xs={12} >
              <Button  variant="outlined" className='btn'>
                {
                  basket.find((item)=>item.id === product.id) ? 
                  <>
                   <span onClick={(e)=>decrease(e,product)}>-</span>
                   { basket?.filter(item=> item.id === product.id)[0]?.purchasedQty }
                   <span onClick={(e)=>increase(e,product)}>+</span>
                   </>
                   : 
                   <div onClick={(e)=>addProduct(e,product)}>
                   Add to Cart
                   <FaCartPlus size={30}  />
                   </div>
                   
                }
              </Button>
          </Grid>
          </Grid>

          
          
          
        </Grid>
    )
}

export {ProductView};

//js2022 