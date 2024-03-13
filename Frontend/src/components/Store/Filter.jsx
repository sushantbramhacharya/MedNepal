import React, { useState } from "react";

function Filter() {


    return (
        <div className="bg-white mx-auto p-4 rounded-lg shadow-md md:w-1/2 justify-center">
  
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sort By Price
            </label>
            <div className="flex">
              <button className="py-2 px-4 mr-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                Low to High
              </button>
              <button className="py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                High to Low
              </button>
            </div>
          </div>
        </div>
    );
  }
  
  


export default Filter;
