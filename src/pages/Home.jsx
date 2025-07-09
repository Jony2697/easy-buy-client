import React, { Suspense } from 'react';
import AllProducts from './AllProducts';
import Loading from './Loading';

const Home = () => {
    const productsPromise = fetch('http://localhost:3000/products').then(res=>res.json());
    return (
        <div>           
            <Suspense fallback={<Loading></Loading>}>
                <AllProducts productsPromise={productsPromise}></AllProducts>
            </Suspense>
        </div>
    );
};

export default Home;