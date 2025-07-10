import React from 'react';
import AddedProducts from './AddedProducts';

const Cart = () => {
    return (
        <div >
            <h2 className='text-3xl text-center mb-6 font-semibold mt-10'>Here are the items you've added</h2>
            <div className='max-w-4xl lg:max-w-6xl mx-auto mt-14'>
                <AddedProducts></AddedProducts>
            </div>
        </div>
    );
};

export default Cart;