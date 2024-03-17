import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useRegisterMutation } from '../api/userApi'
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/userSlice';

function SignUpScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [name,setName]=useState("");
    const [register,{isLoading}]=useRegisterMutation();
    
    const dispatch=useDispatch();
    const submitHandler=async(e)=>{
        e.preventDefault();
        if(password!==cpassword || password.trim()==="")
        {
            alert("Enter Password Correctly");
        }
        else{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(emailRegex.test(email))
            {
                console.log('valid')
                const user=await register({name,email,password}).unwrap();
                dispatch(setCredentials({...user}));
            }
            else{
                alert("Enter valid Email");
            }
        }
    }
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-3xl font-semibold mb-4">Signup</h1>
        <form>
        <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 mb-1">Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required id="name" name="name" className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email"  className="block text-gray-600 mb-1">Email</label>
                <input type="email" value={email} required onChange={(e)=>setEmail(e.target.value)} id="email" name="email" className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" required  className="block text-gray-600 mb-1">Password</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}  name="password" className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="c-password" className="block text-gray-600 mb-1">Confirm Password</label>
                <input type="password" onChange={(e)=>setCpassword(e.target.value)} id="c-password" name="c-password" value={cpassword} className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <a href="" className='block py-2 text-blue-800'>Privacy Policy  </a>
            <div className='flex gap-4'>
                <button type="submit" onClick={submitHandler} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
                <Link to='/login'>
                
                <button type="button" className=" text-blue-600 px-4 py-2 rounded  ">Login</button>
                </Link>
            </div>
            
        </form>
    </div>
</div>
  )
}

export default SignUpScreen