import React from 'react';
import './header.style.scss';
import { useBasket } from '../../provider/basketProvider/basketProvider';

const Basket = (props) => {
    const {basketView} = props;
    const {state:{basket},dispatch} = useBasket();
    console.log("basket2 : ",basket);
    return (
       <div className='basketContainer' style={basketView  ? {width:'400px'} : {}}>
            {basket.map(item=>(
                <p>{item.title}</p>
            ))}
            {/* <p >there is no items in your basket</p> */}
       </div>
    );
}

export {Basket};