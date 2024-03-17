import React from 'react'
import { Link } from 'react-router-dom'

function HomeScreen() {
  return (
    <>
    <div className="relative">
    <img src="https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_1280.jpg" className="w-full h-auto lg:h-[80vh] object-cover" alt="Background" />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className='p-5 absolute inset-0 top-1/3 text-4xl text-white lg:text-7xl lg:p-24'> Get Best Medicines in town <br />
    <Link to='/store'><button className='text-2xl bg-blue-500 m-2 p-3 px-4 rounded-3xl hover:bg-orange-600 '>Vist Store</button>
    </Link>
    </div>
    </div>
    <div>
        <h1 className='text-center p-10 text-3xl text-blue-500 lg:text-6xl'>Why <span className='text-black'> MedNepal</span> ?</h1>
        <div className='flex p-5 gap-10 lg:p-14 lg:gap-24 lg:text-xl'>
            <p className='flex-1 text-justify '>At MedNepal, we strive to redefine convenience and reliability in accessing essential healthcare. As an online store dedicated to providing a seamless experience for purchasing medicines, we understand the importance of accessible and reliable healthcare solutions. Here’s why users choose MedNepal for all their medication needs:</p>
            <ol className='flex-1 list-decimal'>

                <li>Wide Range of Products</li>
                <li>Quality Assurance</li>
                <li>Convenience</li>
                <li>Expert Guidance</li>
                <li>Secure Transactions</li>
                <li>Prompt Delivery</li>
                <li>Exceptional Customer Service</li>
            </ol>
        </div>
    </div>
    </>
    
  )
}

export default HomeScreen