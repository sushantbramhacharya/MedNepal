import React from 'react'
import { FaStar,FaStarHalfAlt,FaRegStar   } from "react-icons/fa";

const Rating = ({rating}) => {
    const ratingCounter=()=>{
        const totalRating=rating.reduce((acc,val)=>(
          acc+val.rate
        ),0);
        return (totalRating/rating.length).toFixed(1);
      }
  return (
    <div className='flex m-2'>
    <span>
        {ratingCounter()>=1?<FaStar/> :ratingCounter()>=0.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span>
        {ratingCounter()>=2?<FaStar/> :ratingCounter()>=1.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span>
        {ratingCounter()>=3?<FaStar/> :ratingCounter()>=2.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span>
        {ratingCounter()>=4?<FaStar/> :ratingCounter()>=3.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span>
        {ratingCounter()>=5?<FaStar/> :ratingCounter()>4.5 ? <FaStarHalfAlt/>:<FaRegStar/>}
    </span>
    <span className='ml-1 text-[0.9rem]'>
        {ratingCounter()} 
    </span>

        <span className="ml-1 text-[0.9rem]">
            ({rating.length?rating.length:null})
        </span>
    </div>
  )
}

export default Rating