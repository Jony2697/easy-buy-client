import React, { Suspense } from 'react';
import AllProducts from './AllProducts';
import Loading from './Loading';

const Home = () => {
    const productsPromise = fetch('https://easy-buy-server-omega.vercel.app/products').then(res=>res.json());
    return (
        <div>           
            <Suspense fallback={<Loading></Loading>}>
                <AllProducts productsPromise={productsPromise}></AllProducts>
            </Suspense>
        </div>
    );
};

export default Home;