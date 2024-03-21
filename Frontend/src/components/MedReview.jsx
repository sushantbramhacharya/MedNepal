import React from 'react'
import { FaStar,FaStarHalfAlt,FaRegStar   } from "react-icons/fa";

const MedReview = () => {
  const rating={
    review:"asdasdd",
    rater:"asdasd",
    rate:3,
    raterId:"asdas",
    date:"213"
}
  return (
    <div>
        <p className='font-bold'>{rating.rater}</p>
        <div className='flex my-2'>
    <span>
        {rating.rate>=1?<FaStar/> :rating.rate>=0.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span>
        {rating.rate>=2?<FaStar/> :rating.rate>=1.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span>
        {rating.rate>=3?<FaStar/> :rating.rate>=2.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span>
        {rating.rate>=4?<FaStar/> :rating.rate>=3.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span>
        {rating.rate>=5?<FaStar/> :rating.rate>4.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span className='ml-1 text-[0.9rem]'>
        {rating.rate} 
    </span>
    </div>
        {/* <Rating rating={med.rating}/> */}
        <p>{rating.review}</p>
        <hr className='border-black' />
    </div>
  )
}

export default MedReview