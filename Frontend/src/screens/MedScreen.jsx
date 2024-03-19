import React,{useState} from 'react';
import Dropdown from '../components/MedScreen/DropDown';
import {Link,useNavigate,useParams} from 'react-router-dom';
import {useGetMedByIdQuery} from '../api/medsApi'
import Rating from '../components/MedScreen/Rating';
import { useAddToCartMutation } from '../api/cartApi';
import { useDispatch } from 'react-redux';
import { setCarts } from '../slices/userSlice';
import Review from '../components/MedScreen/Review';

const MedScreen = () => {
  const {id:medId}=useParams();
  const [cartQty,setCartQty]=useState(1);
  // const navigate=useNavigate();
  const dispatch=useDispatch();

  const {isError,isLoading,data:med}=useGetMedByIdQuery(medId);
  const [addToCart,{isLoading:isLoadingCart}]=useAddToCartMutation();

  const addToCartHandler=async(e)=>{
    e.preventDefault();
    try{
    const cartPrice=(Number(cartQty)*med.price);
    const user=await addToCart({
      medId,
      qty:Number(cartQty),
      price:cartPrice,
      shippingPrice:0,
      totalPrice:cartPrice+0,
      name:med.name,
      image:med.image,
      description:med.description,
      pricePerMed:med.price,
    }).unwrap();
    dispatch(setCarts(user));
    alert('Added to cart successfully');
    }
    catch(e){
      alert('Please Login');
    }
  }
  
  
  return (
    isLoading?<h1>Loading</h1>:
    isError?
    <h1>Error</h1>:
    (<div className="bg-gray-100 min-h-[70vh] py-12 px-4 sm:px-6 lg:px-8 lg:mx-[10vw] lg:mb-[4vw]">
    <Link to='/store' className='inline-block w-auto bg-slate-400 rounded-md p-3 text-white' > Back</Link>
    <div className="max-w-7xl mx-auto">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
        <br />
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{med.name}</h2>
          <p className="mt-1 text-lg text-gray-700">{med.description}</p>
          <p className="mt-4 text-2xl font-bold">Rs.{med.price}</p>
          <br />
          <Dropdown stockNo={med.inStock} setCartQty={setCartQty}/>
          <br />
          <br />
          <Rating rating={med.rating}/>
          <button onClick={addToCartHandler} disabled={med.inStock<1} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-xl">Add to Cart</button>
          
        </div>
        <div className="mt-4 md:mt-0 md:ml-4 md:flex-shrink-0">
          <img className="h-64 w-auto mx-auto rounded-md shadow-md" src={med.image} alt={med.name} />
        </div>
        
      </div>
          <Review/>
    </div>
  </div>)
  );
};

export default MedScreen;
