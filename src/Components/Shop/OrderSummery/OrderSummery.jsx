import React from 'react';

const OrderSummery = ({cart}) => {
    console.log(cart)
   
    let total = 0;
    let shipping = 0;
    let grandTotal = 0;
   for(const product of cart){
      total = total + product.price;
      shipping = shipping + product.shipping;
   }
    const tax = total*10/100;
    grandTotal = total + shipping + tax;



    return (
        <div>

            <h3 className='text-center text-4xl'>Order Summary</h3>

            <br />
            <p>Selected Item : {cart.length} </p>
            <br />
            <p>Total Price : ${total} </p>
            <br />
            <p>Total Shipping Cost : ${shipping}</p>
            <br />
            <p>Tax :${tax} </p>
            <br />
            <p>Grand Total : ${grandTotal}</p>
            <br />
            <button className="btn btn-secondary w-full">Clear Cart</button>

            <button className="btn btn-secondary mt-5 w-full">Review Order</button>
        </div>
    );
};

export default OrderSummery;