import React,{useState} from 'react'

function Navbar() {
    const [mobileMenu, setmobileMenu] = useState(false);
  return (
    <div className='p-8 flex justify-between relative'>
      <div className='flex items-center gap-6 lg:gap-16'>
      <h1 className='text-3xl'>MedNepal</h1>
          <input type="text" placeholder="Search Medicine" className='p-2 m-0 sm:w-[50vw]  md:w-[60vw] border-slate-400 border-2 rounded-lg lg:w-[20vw] lg:text-md lg:p-4 focus:outline-none ' />
      </div>
        
            <ul className={`absolute inset-0 bg-slate-400 h-fit z-10 text-white p-5 text-lg ${mobileMenu?'block':'hidden'}`}>
                <li>Home</li>
                <li>Store</li>
                <li>Login</li>
                <li>Sign Up</li>
                <li>Contact Us</li>
            </ul>
            <ul className={`hidden  inset-0 bg-slate-400 h-fit z-10 text-white p-5 text-lg gap-10 rounded-lg lg:flex`}>
                <li>Home</li>
                <li>Store</li>
                <li>Login</li>
                <li>Sign Up</li>
                <li>Contact Us</li>
            </ul>
        <button className='z-20 lg:hidden' onClick={()=>setmobileMenu(!mobileMenu)}>
                <img className="w-9" src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="menu" />
            </button>
    </div>
  )
}

export default Navbar