import React, { useEffect, useState } from 'react';

const Card = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
          <h2>check</h2>
        </div>
    );
};

export default Card;