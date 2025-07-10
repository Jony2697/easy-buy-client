import React, { useState } from 'react';
import AddedProducts from './AddedProducts';
import { useCart } from '../context/CartContext';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const singleProduct = useLoaderData();
  const { _id, image, title, description, price, stock, category } = singleProduct;

  const { addToCart } = useCart();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddToCart = () => {
    addToCart(singleProduct);

    fetch('http://localhost:3000/addedProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: _id }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Cart updated:', data);
         toast.success('Product added to cart!');
        
        setRefreshKey(prev => prev + 1);
      })
      .catch(err => console.error('Failed to add product to cart', err));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 mb-14">
      <div className="flex flex-col justify-around lg:flex-row items-start gap-8">
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <figure>
              <img
                src={image}
                alt={title}
                className="w-full h-96 object-contain bg-gray-100"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-between">
                {title}
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">NEW</span>
              </h2>
              <p className="mt-3 text-gray-600">{description}</p>
              <p className="mt-2 text-sm text-gray-700 font-medium">Category: {category}</p>

              <div className="flex items-center gap-4 mt-4">
                <span className="px-3 py-1 border rounded text-gray-700">Price: ${price}</span>
                <span className="px-3 py-1 border rounded text-gray-700">Stock: {stock}</span>
              </div>
              <button
                onClick={handleAddToCart}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Right: Cart Preview */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-xl shadow p-4 border border-emerald-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
              Added Product
            </h3>
            <AddedProducts refreshTrigger={refreshKey} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
