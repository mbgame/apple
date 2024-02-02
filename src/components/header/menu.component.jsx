import React, { useState, useEffect } from 'react';
import './header.style.scss';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { Basket } from './basket.component';

const Menu = () => {
    const [basketView, setBasketView] = useState(false);

    const showBasket = () => {
        setBasketView(!basketView);
    }

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (basketView && !e.target.closest('.basketIcon') && !e.target.closest('.basket-container'))
             {
                setBasketView(false);
            }
        });

        return () => {
            window.removeEventListener('click', (e) => {
                if (basketView && !e.target.closest('.basketIcon') && !e.target.closest('.basket-container')) {
                    setBasketView(false);
                }
            });
        }
    }, [basketView]);

    return (
        <div className='menu'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/galley">Gallery</NavLink></li>
                <HiOutlineShoppingCart className='basketIcon' onClick={showBasket} />
                <Basket basketView={basketView} />
            </ul>
        </div>
    );
}

export { Menu };
