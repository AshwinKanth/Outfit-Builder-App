'use client';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Canvas from '../components/Canvas';
import CartModal from '../components/CartModal';

export default function Page() {
  const [canvasItems, setCanvasItems] = useState({
    cap: null,
    top: null,
    bottom: null,
    shoes: null,
  });
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleDrop = (type, src) => {
    setCanvasItems(prev => ({ ...prev, [type]: src }));
  };

  const resetCanvas = () => {
    setCanvasItems({ cap: null, top: null, bottom: null, shoes: null });
  };

  const saveOutfit = () => {
    alert('Outfit Saved!');
  };

  const addToCart = () => {
    setCart([...cart, { ...canvasItems }]);
    alert('Outfit Added to Cart');
  };

  const removeCartItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-white">
      <h1 className="text-3xl font-bold mb-4">Outfit Builder</h1>
      <div className="flex flex-row w-full max-w-6xl space-x-4  bg-gray-100 p-3">
        <div className="w-2/5 max-h-[500px] overflow-y-auto">
          <Sidebar onDrop={handleDrop} />
        </div>
        <div className="w-3/5">
          <Canvas items={canvasItems} onDrop={handleDrop} />
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <button onClick={resetCanvas} className="px-4 py-2 border rounded bg-cyan-600 hover:bg-cyan-500  text-white transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Reset</button>
        <button onClick={saveOutfit} className="px-4 py-2 border rounded bg-cyan-600  hover:bg-cyan-500 text-white transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Save Outfit</button>
        <button onClick={addToCart} className="px-4 py-2 border rounded bg-cyan-600  hover:bg-cyan-500 text-white transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Add to Cart 🛒</button>
        <button onClick={() => setShowCart(true)} className="px-4 py-2 border rounded  hover:bg-cyan-500 bg-cyan-600 text-white transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">View Cart Items ({cart.length})</button>
      </div>
      {showCart && <CartModal cart={cart} onClose={() => setShowCart(false)} removeItem={removeCartItem} />}
    </div>
  );
}

