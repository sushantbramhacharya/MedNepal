import React from 'react'
import Card from '../components/Store/Card'
import Filter from '../components/Store/Filter'
import { useGetMedsQuery } from '../api/medsApi'

function StoreScreen() {

  const {isError,isLoading,data:meds}=useGetMedsQuery();
  return (
    <>
    <h1 className='text-center text-3xl bg-blue-500 rounded-lg p-7 m-7 text-white'>Medicines in Our Store</h1>
    <Filter/>

    <div className='flex p-7 flex-col md:flex-row flex-wrap justify-center gap-12 items-center'>
      {isLoading?
      <h1>Loading</h1>:
      isError?
      <h1>Error Occured</h1>:
      meds.map((med)=>(<Card product={med}/>))
      }
      
    </div>
    </>
  )
}

export default StoreScreen