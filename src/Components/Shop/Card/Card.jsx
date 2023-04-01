import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails/CardDetails';
import '../../Shop/Card/Card.css';

const Card = () => {
    // const [products, setProducts] = useState([]);
    
    // const [cart, setCart]=useState([])

    // useEffect(()=>{
    //      fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // },[])

    // const cartCalculate = (product)=>{
    //     console.log('Item Added', product)
    //     const newCart = [...cart, newCart];
    //     setCart(newCart);
    // }
    // return (
    //     <div className='parentCard'>
    //       {
    //       products.map(product => <CardDetails key={product.id} product={product} cartCalculate={cartCalculate}></CardDetails>)
    //       }
    //     </div>
    // );
};

export default Card;