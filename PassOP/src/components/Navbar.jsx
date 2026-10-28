import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-teal-900 text-white'>
      <div className="mycontainer flex justify-between items-center px-15 h-10 py-5">

        <div className='logo font-bold text-white text-2xl'>
          <span className='text-teal-600'>&lt;</span>
          <span>Pass</span>
          <span className='text-teal-600'>OP/&gt;</span>
        </div>
        {/* <ul className='flex gap-4 '>
          <li><a className='hover:font-bold' href="/">Home</a></li>
          <li><a className='hover:font-bold' href="#">about</a></li>
          <li><a className='hover:font-bold' href="#">Contact</a></li>
        </ul> */}
        
        <button className="text-white bg-black my-5 rounded-full flex gap-4 w-25 h-8 justify-center items-center font-semibold ring-teal-50 ring-1 ">
          <img className='rounded-full w-6' src="icons/github.png" alt="Github Logo" />
          {/*   <img className='invert rounded-full w-8' src="https://raw.githubusercontent.com/CodeWithHarry/Sigma-Web-Dev-Course/b0acb01fa88ae0753ef903b8fc45fadb5efe1c2b/Video%20130/passop-mongo/public/icons/github.svg" alt="Github Logo" /> */}
          GitHub
        </button>

      </div>
    </nav>
  )
}

export default Navbar
