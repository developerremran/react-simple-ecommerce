import React, { useEffect, useState } from 'react';
import './shop.css';
// import Card from './Card/Card';
import CardDetails from './Card/CardDetails/CardDetails';
import '../Shop/Card/Card.css';
import OrderSummery from './OrderSummery/OrderSummery';

const Shop = () => {
    const [products, setProducts] = useState([]);
    
    const [cart, setCart] = useState([])

    useEffect(()=>{
         fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const cartCalculate = (product)=>{
        const newCart = [...cart, product];

        setCart(newCart);
    }
    return (
        <div className='shopLayout '>  
            <div className='border pt-12'>
                <h2 className='text-4xl text-center'>Products Item</h2>
                <div className='parentCard'>
                    
                    {
                        products.map(product => <CardDetails key={product.id} product={product} cartCalculate={cartCalculate}></CardDetails>)
                    }
                </div>
                
            </div>
        
            <div className='border layout pt-12 '>
                <div className='sticky top-0 p-5' >
                     <OrderSummery cart={cart}></OrderSummery>
                </div>
            </div>
         
            
        </div>
    );
};

export default Shop;