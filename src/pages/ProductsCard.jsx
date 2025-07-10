import React from 'react';
import { Link } from 'react-router';

const ProductsCard = ({ product }) => {
    const {_id,price,image,title}=product;

    return (
        <Link to={`/productDetails/${_id}`} className='max-w-7xl mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm border border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
                <figure className="h-64">
                    <img
                        src={image}
                        className="w-[200px] h-auto object-contain rounded-xl"
                        alt="product picture" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-semibold'>Price : {price}</p>
                    <div className="card-actions w-full">
                        <button className="btn btn-primary w-full">Add to cart</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductsCard;