import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const data = useLoaderData();
    const { email, name, phone, price, duration } = data;
    return (
        <div className='card-actions justify-center mt-10'>
            <div className="card w-2/4 bg-success text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3>Price: <span className='font-extralight'
                    >{price}</span></h3>
                    <h4>Course Duration: <span>{duration}</span></h4>
                    <p>Call: <span>{phone}</span></p>
                    <p>Email: <span>{email}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;