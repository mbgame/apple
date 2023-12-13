import React from 'react';
import './header.style.scss';
import {Grid} from '@mui/material';
import { Menu } from './menu.component';
import { Logo } from './logo.component';

const Header = () => {
    return (
        <Grid container item xs={12} className='header' alignItems={'center'}>
            <Logo />
            <Menu />
        </Grid>
    );
}

export {Header};