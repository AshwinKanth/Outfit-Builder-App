'use client';
import React from 'react';

const Canvas = ({ items, onDrop }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const src = e.dataTransfer.getData('src');
    onDrop(type, src);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="w-170 h-[500px] flex flex-col justify-center items-center border rounded bg-white p-4"
    >
      <p className="text-sm text-gray-500 mb-2">CANVAS AREA</p>
      {['cap', 'top', 'bottom', 'shoes'].map((slot) =>
        items[slot] ? (
          <img
            key={slot}
            src={items[slot]}
            alt={slot}
            className="w-25 h-25 my-1"
          />
        ) : (
          <div key={slot} className="w-25 h-25 my-1 border border-dashed border-gray-300"></div>
        )
      )}
    </div>
  );
};

export default Canvas;
