import React from 'react'

function LoginScreen() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        <form>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600 mb-1">Email</label>
                <input type="text" id="username" name="username" className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
                <input type="password" id="password" name="password" className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <a href="" className='block py-2 text-blue-800'>Forgot Password</a>
            <div className='flex gap-4'>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                <button type="submit" className=" text-blue-600 px-4 py-2 rounded  ">Sign Up</button>
            </div>
            
        </form>
    </div>
</div>
  )
}

export default LoginScreen