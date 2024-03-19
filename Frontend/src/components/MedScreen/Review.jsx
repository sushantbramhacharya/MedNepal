import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [review,setReview]=useState('');


  const handleMouseOver = (index) => {
    if(!clicked)
      setRating(index + 1);
  };

  const handleMouseLeave = () => {
    if(!clicked)
      setRating(0);
  };

  const handleClick = (index) => {
    setClicked(true);
    setRating(index+1);
  };

  return (<>
  <hr className='border-slate-600 mt-5' />
   <p className='text-lg py-3 underline italic font-serif'>Give Your Review</p>
  <div
      onMouseLeave={handleMouseLeave}
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <FaStar
          key={index}
          onMouseOver={() => handleMouseOver(index)}
          onClick={() => handleClick(index)}
          color={rating > index ? 'gold' : 'grey'}
          size={15}
          style={{ marginRight: 5, cursor: 'pointer' }}
          />
          );
        })}
    </div>
  <input value={review} onChange={(e)=>setReview(e.target.value)} className='p-2 my-2 outline-none h-14 w-1/2' type='text' id='review' placeholder='Write your review'/>
  <button className='mx-4 p-2 bg-green-400 text-white rounded-lg shadow-md'>Post Review</button>
  <hr className='border-slate-600 mt-5' />
  </>
  );
};



export default Review;
