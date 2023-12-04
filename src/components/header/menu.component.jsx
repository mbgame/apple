import React from 'react';
import './header.style.scss';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <div className='menu'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/galley">Gallery</NavLink></li>
                <HiOutlineShoppingCart className='basketIcon' />
            </ul>
        </div>
    );
}

export {Menu}