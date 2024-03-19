import React from 'react';

const Dropdown = ({stockNo,setCartQty}) => {
  return (
    <div className="inline-block relative">
      <select onChange={(e)=>setCartQty(e.target.value)}
        className={"block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring "}
        disabled={stockNo<1}
      >
        {stockNo<1?<option>Out of Stock</option>:Array.from({ length: stockNo }, (_, index) => (
        <option key={index} value={index+1}>{index+1}
        </option>
      ))}
        
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" disabled={stockNo<1}>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 7l5 5 5-5z" /></svg>
      </div>
    </div>
  );
};

export default Dropdown;
