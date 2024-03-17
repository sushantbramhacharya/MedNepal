import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginMutation } from '../api/userApi';
import { setCredentials } from '../slices/userSlice';
import { useDispatch } from 'react-redux';

function LoginScreen() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const dispatch=useDispatch();
    const [login,{isLoading}]=useLoginMutation();
    
    const submitHandler=async(e)=>{
        e.preventDefault();
        try{
            const user=await login({email,password}).unwrap();
            dispatch(setCredentials({...user}));
            console.log({...user});
        }
        catch(err)
        {
            console.log(err);
        }
    }
    return (
    <div className="bg-gray-100 flex items-center justify-center h-[80vh]">
    <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        <form>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            {/* <a href="" className='block py-2 text-blue-800'>Forgot Password</a> */}
            <div className='flex gap-4'>
                <button type="submit" onClick={submitHandler} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                <Link to='/signup'>
                <button type="button" className=" text-blue-600 px-4 py-2 rounded  ">Sign Up</button>
                </Link>
            </div>
            
        </form>
    </div>
</div>
  )
}

export default LoginScreen