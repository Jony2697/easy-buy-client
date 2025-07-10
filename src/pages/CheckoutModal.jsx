import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const CheckoutModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order Placed Successfully!');
    onClose();
  };

  return (
    <>
      
      <input type="checkbox" id="checkout-modal" className="modal-toggle" checked={isOpen} readOnly />

      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="checkout-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={onClose}
          >
            <RxCross2 />
          </label>
          <h3 className="text-lg font-bold mb-4">Checkout</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              className="textarea textarea-bordered w-full"
              value={form.address}
              onChange={handleChange}
              required
            />
            <div className="modal-action">
              <button type="submit" className="btn btn-primary w-full">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
