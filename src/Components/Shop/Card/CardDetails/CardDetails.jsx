import React, { useState } from 'react';
import './CardDetails.css';

const CardDetails = (props) => {
    const {name, img, seller, ratings,price} = props.product;
      const cartCalculate = props.cartCalculate;
  
    return (
        <div>
           <div className='cardDetails'>
            <img src={img}></img>
              <div className='textSt'>            
              <h2 className='text-xl text-bold'>{name} </h2>
              <p>Price : ${price} </p>
              <p>Manufacture: {seller}</p>
              <p>Rating : {ratings} </p>
              </div>
              <button onClick={()=>cartCalculate(props.product)}  className=" btn btn-error w-full absolute bottom-0">Add To Cart</button>
           </div>
        </div>
    );
};

export default CardDetails;