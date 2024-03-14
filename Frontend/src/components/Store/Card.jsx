import React from 'react';
import {Link} from 'react-router-dom';
import Rating from '../Rating';

const Card = ({med}) => {
  
  return (
    
    <div className="bg-white w-[90%] md:w-1/4 rounded-lg shadow-md overflow-hidden">
      <Link to={`/med/${med._id}`}>
      <img className="w-full h-64 object-cover object-center" src={med.image} alt={med.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{med.name}</h2>
        <p className="text-gray-700 mb-4">{med.description}</p>
        <Rating rating={med.rating}/>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 text-xl">Nrs {med.price}</span>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
