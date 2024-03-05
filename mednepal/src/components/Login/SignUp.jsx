import React from 'react'

function SignUp() {
  return (
    <div class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded shadow-md w-80">
        <h1 class="text-3xl font-semibold mb-4">Signup</h1>
        <form>
            <div class="mb-4">
                <label for="username" class="block text-gray-600 mb-1">Email</label>
                <input type="text" id="username" name="username" class="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-600 mb-1">Password</label>
                <input type="password" id="password" name="password" class="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <a href="" className='block py-2 text-blue-800'>Privacy Policy  </a>
            <div className='flex gap-4'>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
                <button type="submit" class=" text-blue-600 px-4 py-2 rounded  ">Login</button>
            </div>
            
        </form>
    </div>
</div>
  )
}

export default SignUp