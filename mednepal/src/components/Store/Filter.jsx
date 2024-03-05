import React, { useState } from "react";

function Filter() {
  const [filterToggled,setFilterToggled]=useState(false)
  if(filterToggled)
  {
    return (
      <div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Filters <span className="cursor-pointer bg-blue-300 rounded-md px-2 py-1 text-white" onClick={()=>setFilterToggled(false)}>X</span></h2>
  
          <div className="mb-4">
            <label for="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Categories</option>
  
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
  
          <div className="mb-4">
            <label for="brand" className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <select
              id="brand"
              name="brand"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Brand's</option>
  
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price Range
            </label>
            <div className="flex">
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Min Price"
              />
              <span className="mx-2">to</span>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Max Price"
              />
            </div>
          </div>
  
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
      </div>
    );
  }
  else{
    return(
      <button onClick={()=>setFilterToggled(true)} className="bg-blue-500 px-3 py-1 rounded-md text-white">Filter</button>
    )
  }
  
}

export default Filter;
