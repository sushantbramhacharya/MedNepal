import React, { useState } from 'react'
import Card from '../components/Store/Card'

import { useGetMedsQuery } from '../api/medsApi'

function StoreScreen() {
  const [sort,setSort]=useState(0);
  const {isError,isLoading,data:meds}=useGetMedsQuery(sort);
  
  
  return (
    <>
    <h1 className='text-center text-3xl bg-blue-500 rounded-lg p-7 m-7 text-white'>Medicines in Our Store</h1>
    <div className="bg-white mx-auto p-4 rounded-lg shadow-md md:w-1/2 justify-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sort By Price
            </label>
            <div className="flex">
              <button onClick={()=>setSort(1)} className="py-2 px-4 mr-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                Low to High
              </button>
              <button onClick={()=>setSort(-1)} className="py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                High to Low
              </button>
            </div>
          </div>
        </div>

    <div className='flex p-7 flex-col md:flex-row flex-wrap justify-center gap-12 items-center'>
      {isLoading?
      <h1>Loading</h1>:
      isError?
      <h1>Error Occured</h1>:
      meds.map((med)=>(<Card key={med._id} med={med}/>))
      }
      
    </div>
    </>
  )
}

export default StoreScreen