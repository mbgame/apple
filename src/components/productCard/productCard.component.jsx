import React from 'react';
import './productCard.style.scss';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const navigate = useNavigate();
    const {product} = props;
    const realPrice = +product.price - ((+product.price * +product.discount)/ 100);

    return (
        <div className='productCard' onClick={()=>navigate(`/shop/${product.id}`)}>
            {+product?.discount ? <div className='discount'>{product?.discount} %</div> : ''}
           {!product.img ? <img src="/images/products/default-product-image.png" alt="default product" />
           :  <img src={product.img} alt={product.title} />}
            {!product.title ? <h4>untitled</h4> : <h4>{product.title}</h4>}
            <p>{product.shortDesc}</p>
            <div className='features'>
                <span>{realPrice} $</span>
                <span style={{color:'red'}}>{product.brand}</span>
            </div>

        </div>
    )
}

export {ProductCard};