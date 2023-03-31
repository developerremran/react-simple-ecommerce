import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="heros min-h-screen bg-white mx-auto">
                <div className=" grid md:grid-cols-2 ms:grid-reverse items-center mx-32">
                    
                    <div className='pe-10'>
                        <p>Get start 70% Discount</p>
                        <h1 className="text-5xl font-bold py-10">New Collection For Fall</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaera.Provident cupiditate voluptatem et in. Quaera.</p>

                        <button className="setB btn  text-white">Get Started</button>
                    </div>
                    <div className='mx-auto'>
                    <img src="../../../images/Group 12.jpg" className="max-w-sm rounded-lg shadow-2xl  " />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;