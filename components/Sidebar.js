import React from 'react';

const images = {
  cap: ['cap.png', 'cap-blue.png', 'cap-green.png', 'cap-red.png'],
  top: ['tshirt.png', 'jacket.png', 'tie-dye.png', 'woman-clothes.png', 'dress.png' , 'shirt.png'],
  bottom: ['pants.png', 'cargo.png', 'military.png', 'shorts.png'],
  shoes: ['running-shoes.png', 'shoe.png', 'sneakers.png', 'high-heel.png'],
};

export default function Sidebar({ onDrop }) {
  const handleDragStart = (e, type, src) => {
    e.dataTransfer.setData('type', type);
    e.dataTransfer.setData('src', src);
  };

  return (
    <div className="p-4 border rounded bg-white flex flex-col items-center space-y-4">
      {Object.entries(images).map(([type, imgs]) => (
        <div key={type}>
          {imgs.map((img, idx) => (
            <img
              key={idx}
              src={`/Icons/${img}`}
              alt={`${type} ${idx}`}
              draggable
              onDragStart={e => handleDragStart(e, type, `/Icons/${img}`)}
              className="w-25 h-25 cursor-grab mb-2 p-1 hover:shadow"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
