import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const AllProducts = ({ productsPromise }) => {
    const products = use(productsPromise);



    return (
        <div>
            <div className='text-center mt-16 space-y-4'>
                <h1 className='font-semibold text-3xl text-blue-950' >Welcome to Our Shop!</h1>
                <p>Browse our latest products below and add them to your cart.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-14 '>
                {
                    products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;