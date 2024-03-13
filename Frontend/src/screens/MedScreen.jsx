

import React from 'react';
import Dropdown from '../components/DropDown';

const MedScreen = () => {

  const med = {
    _id:1,
    name:'Paracetamol',
    image:'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price:10,
    description:'Paracetamol 500mg',
    rating :[
        'Rater',
        'rater'
    ],
    inStock:5

  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 lg:mx-[10vw] lg:mb-[4vw]">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{med.name}</h2>
            <p className="mt-1 text-lg text-gray-700">{med.description}</p>
            <p className="mt-4 text-2xl font-bold">{med.price}</p>
            <div className='mt-10'>
                <Dropdown/>
            </div>
            
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 md:flex-shrink-0">
            <img className="h-64 w-auto mx-auto rounded-md shadow-md" src={med.image} alt={med.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedScreen;
