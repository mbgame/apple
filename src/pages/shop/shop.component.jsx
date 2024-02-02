import React from 'react';
import './shop.style.scss';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/productCard/productCard.component';
import { ProductView } from '../../components/productView/productView.component';

const Shop = () => {

    const products = [
        {
            id:'54asdh6567hjspo',
            title:'the best shoes',
            shortDesc:'this is a small shoes',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            img:'/images/products/shoes/shoes1.jpg',
            price:'100000',
            brand:'addidass',
            size:'42',
            color:'black',
            weight:'0.4',
            type:'cotton',
            discount:'10',
            group:'clothes',
            subGroup:'shoes',
            quantity:100,
        },
        {
            id:'92asdh6567hjsas',
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
            discount:'0',
            group:'clothes',
            subGroup:'shoes',
            quantity:100,
        },
        {
            id:'11asdh6569kjsdd',
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
            discount:'0',
            group:'clothes',
            subGroup:'shoes',
            quantity:100,
        },
        {
            id:'98asdh6567hjsgf',
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
            discount:'5',
            group:'clothes',
            subGroup:'shoes',
            quantity:100,
        },
        {
            id:'56asdh6509hjsdf',
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
            discount:'0',
            group:'clothes',
            subGroup:'shoes',
            quantity:100,
        },
        {
            id:'12asdh6567hjsdf',
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
            discount:'0',
            group:'clothes',
            subGroup:'shoes',
            quantity:100,
        },
    ];
    const {productId} = useParams();

    if(productId){
        const product = products.filter(product=>product.id === productId);
      return ( <ProductView product={product[0]} /> );
    }

    return (
        <div className='shop'>
           {
            products.map((product,index)=>(
                <ProductCard key={index}  product={product} />
            ))
           }
        </div>
    )
}

export {Shop};