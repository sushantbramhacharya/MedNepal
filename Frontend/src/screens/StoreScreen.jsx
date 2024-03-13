import React from 'react'
import Card from '../components/Store/Card'
import Filter from '../components/Store/Filter'

function StoreScreen() {
  return (
    <>
    <Filter/>
    <h1 className='text-center text-3xl bg-blue-500 rounded-lg p-7 m-7 text-white'>Medicines in Our Store</h1>

    <div className='flex p-7 flex-col md:flex-row flex-wrap justify-center gap-12 items-center'>
      <Card product={{name:"Paracetamol",description:"Paracetamol 500mg",image:"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:10,}}/>
      <Card product={{name:"Paracetamol",description:"Paracetamol 500mg",image:"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:10,}}/>
      <Card product={{name:"Paracetamol",description:"Paracetamol 500mg",image:"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:10,}}/>
      <Card product={{name:"Paracetamol",description:"Paracetamol 500mg",image:"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:10,}}/>
      <Card product={{name:"Paracetamol",description:"Paracetamol 500mg",image:"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:10,}}/>
      <Card product={{name:"Paracetamol",description:"Paracetamol 500mg",image:"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:10,}}/>
      <Card product={{name:"Paracetamol",description:"Paracetamol 500mg",image:"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:10,}}/>
      <Card product={{name:"Paracetamol",description:"Paracetamol 500mg",image:"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:10,}}/>
      <Card product={{name:"Paracetamol",description:"Paracetamol 500mg",image:"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:10,}}/>
    </div>
    </>
  )
}

export default StoreScreen