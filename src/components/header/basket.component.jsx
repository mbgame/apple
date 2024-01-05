import React from 'react';
import './header.style.scss';

const Basket = (props) => {
    const {basketView} = props;
    return (
       <div className='basketContainer' style={basketView ? {width:'400px'} : {}}>
            <p>there is no items in your basket</p>
       </div>
    );
}

export {Basket};