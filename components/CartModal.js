'use client';
import React from 'react';

const CartModal = ({ cart, onClose, removeItem }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {cart.map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded flex flex-col gap-2 bg-gray-50 relative"
              >
                <div className="grid grid-cols-4 gap-3">
                  {item.cap && <img src={item.cap} alt="cap" className="w-18 h-18 object-contain" />}
                  {item.top && <img src={item.top} alt="top" className="w-18 h-18 object-contain" />}
                  {item.bottom && <img src={item.bottom} alt="bottom" className="w-18 h-18 object-contain" />}
                  {item.shoes && <img src={item.shoes} alt="shoes" className="w-18 h-18 object-contain" />}
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="text-sm text-red-600 hover:text-red-800 mt-2 self-end"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
