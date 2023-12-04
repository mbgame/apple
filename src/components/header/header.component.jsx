import React from 'react';
import './header.style.scss';
import {Grid} from '@mui/material';
import { Menu } from './menu.component';

const Header = () => {
    return (
        <Grid container item xs={12} className='header'>
            <Menu />
        </Grid>
    );
}

export {Header};