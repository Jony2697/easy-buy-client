import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import CheckoutModal from './CheckoutModal';
import { toast } from 'react-toastify';
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";


const AddedProducts = ({ refreshTrigger }) => {
  const [dbCartItems, setDbCartItems] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchCartItems = () => {
    fetch('http://localhost:3000/addedProducts')
      .then(res => res.json())
      .then(data => setDbCartItems(data))
      .catch(err => console.error('Failed to fetch cart items:', err));
  };

  useEffect(() => {
    fetchCartItems();
  }, [refreshTrigger]);

  
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) {
     
      handleDelete(id);
      return;
    }

    
    fetch(`http://localhost:3000/addedProducts/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQty }),
    })
      .then(res => res.json())
      .then(() => {
        setDbCartItems(prev =>
          prev.map(item =>
            item._id === id ? { ...item, quantity: newQty } : item
          )
        );
      })
      .catch(err => console.error('Failed to update quantity:', err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/addedProducts/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        
        if (data.deletedCount >= 0) {
          toast.info('Product removed from cart.');
          setDbCartItems(prev => prev.filter(item => item._id !== id));
        }
      })
      .catch(err => console.error('Failed to delete item:', err));
  };

  const totalAmount = dbCartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="space-y-4">
      {dbCartItems.length === 0 ? (
        <p className="text-gray-600">No products added yet.</p>
      ) : (
        <>
          {dbCartItems.map((item,index) => (
            <div key={index} className="flex items-center gap-4 border p-3 rounded bg-gray-50 shadow-sm">
              <img src={item.image} alt={item.title} className="w-14 h-14 object-cover rounded border" />
              <div className="flex-1">
                <h4 className="font-medium text-sm">{item.title}</h4>
                <p className="text-xs text-gray-700">Price: ${item.price}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => updateQuantity(item._id, (item.quantity || 1) - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    aria-label="Decrease quantity"
                  >
                   <FiMinus />
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    aria-label="Increase quantity"
                  >
                   <LuPlus />
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-500 hover:text-red-700"
                title="Remove item"
              >
                <FaTrash />
                
              </button>
            </div>
          ))}

          <div className="pt-4 mt-4 border-t text-right">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Total: ${totalAmount.toFixed(2)}
            </h3>
            <button onClick={() => setModalOpen(true)} className="btn btn-success">
              Checkout
            </button>
          </div>

          <CheckoutModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
      )}
    </div>
  );
};

export default AddedProducts;
