import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="bg-white w-[90%] md:w-1/4 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-64 object-cover object-center" src={product.image} alt={product.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 text-xl">Nrs {product.price}</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-xl">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
