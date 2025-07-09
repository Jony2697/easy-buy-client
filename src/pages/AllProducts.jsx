import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const AllProducts = ({productsPromise}) => {
    const products=use(productsPromise);
    console.log(products);
    


    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-14'>
                {
                    products.map(product=><ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;