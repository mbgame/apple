import React from 'react';
import './home.style.scss';
import {Grid} from '@mui/material';
import { SlideShow } from '../../components/slideShow/slideShow.components';
import Slider from '../../components/slider/slider.component';

const Home = () => {
const bestProducts = [
    {
        id:1,
        title:'',
        shortDesc:'this is a small shoes',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'/images/products/shoes/shoes1.jpg',
        price:'100000',
        brand:'addidass',
        size:'42',
        color:'black',
        weight:'0.4',
        type:'cotton',
        discount:'10'
    },
    {
        id:2,
        title:'shoes',
        shortDesc:'this is a small shoes',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'',
        price:'8000',
        brand:'nike',
        size:'36',
        color:'green',
        weight:'0.3',
        type:'cotton',
        discount:'0'
    },
    {
        id:3,
        title:'shirt',
        shortDesc:'this is a small shirt',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'/images/products/shirts/shirt1.jpg',
        price:'200',
        brand:'polo',
        size:'medium',
        color:'white',
        weight:'0.2',
        type:'cotton',
        discount:'0'
    },
    {
        id:4,
        title:'shirt',
        shortDesc:'this is a small shirt',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'/images/products/shirts/shirt2.jpg',
        price:'250',
        brand:'polo',
        size:'medium',
        color:'white',
        weight:'0.5',
        type:'cotton',
        discount:'5'
    },
    {
        id:5,
        title:'jean',
        shortDesc:'this is a small jean',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'/images/products/jeans/jean1.jpg',
        price:'150',
        brand:'h&d',
        size:'38',
        color:'blue',
        weight:'0.5',
        type:'jean',
        discount:'0'
    },
    {
        id:6,
        title:'jean',
        shortDesc:'this is a small jean',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'/images/products/jeans/jean2.jpg',
        price:'130',
        brand:'h&d',
        size:'40',
        color:'blue',
        weight:'0.2',
        type:'jean',
        discount:'0'
    },
];
const newProducts = [
    {
        id:1,
        title:'shirt',
        shortDesc:'this is a small shirt',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'/images/products/shirts/shirt2.jpg',
        price:'250',
        brand:'polo',
        size:'medium',
        color:'white',
        weight:'0.5',
        type:'cotton',
        discount:'5'
    },
    {
        id:2,
        title:'jean',
        shortDesc:'this is a small jean',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'/images/products/jeans/jean1.jpg',
        price:'150',
        brand:'h&d',
        size:'38',
        color:'blue',
        weight:'0.5',
        type:'jean',
        discount:'0'
    },
    {
        id:3,
        title:'small jean',
        shortDesc:'this is a small jean',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'/images/products/jeans/jean2.jpg',
        price:'130',
        brand:'h&d',
        size:'40',
        color:'blue',
        weight:'0.2',
        type:'jean',
        discount:'0'
    },
    {
        id:4,
        title:'shoes',
        shortDesc:'this is a small shoes',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'/images/products/shoes/shoes2.jpg',
        price:'8000',
        brand:'nike',
        size:'36',
        color:'green',
        weight:'0.3',
        type:'cotton',
        discount:'0'
    },
];

    return (
        <>
            <SlideShow />
            <Grid container item xs={12} justifyContent={'center'} alignItems={'center'}>
                <p>Wellcome to Home Page</p>
            </Grid>
            <Slider loop={true} title="جدیدترین محصولات" slides={newProducts} />
            <Slider loop={true} title="پرتکرارترین محصولات" slides={bestProducts} />
        </>
        
    )
}

export {Home};