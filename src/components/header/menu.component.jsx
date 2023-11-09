import React from 'react';
import './menu.style.scss';

const Menu = () => {
    return(
        <div className='menu'>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#shop'>Shop</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#gallery'>Gallery</a></li>
            </ul>
        </div>
    );
}

export {Menu}