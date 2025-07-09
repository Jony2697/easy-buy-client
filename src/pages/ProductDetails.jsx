import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const singleProducts = useLoaderData();
    const {image,title,description,price,stock,category}= singleProducts;
    console.log(singleProducts);

    return (
        <div className='max-w-7xl mx-auto mt-20 mb-14'>
            <div className="card bg-base-100 w-96 shadow-sm mx-auto">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title ">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <p className='font-semibold'>Category : {category}</p>
                    <div className="card-actions ">
                        <div className="badge badge-outline">Price:{price}</div>
                        <div className="badge badge-outline">Stock:{stock}</div>
                    </div>
                    <div className="card-actions w-full">
                        <button className="btn btn-primary w-full">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;