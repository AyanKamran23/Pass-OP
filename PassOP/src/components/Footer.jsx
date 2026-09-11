import React from 'react'

const Footer = () => {
  return (
    <div className='bg-teal-950 text-white flex flex-col justify-center items-center  bottom-0 w-full'>
        <div className='logo font-bold text-white text-xl'>
          <span className='text-teal-600'>&lt;</span>
          <span>Pass</span>
          <span className='text-teal-600'>OP/&gt;</span>
        </div>
      <div className='flex justify-center items-center text-sm'> Created With <img className='w-6 mx-1' src="heart.gif" alt="" />  by AyanKamran </div>
    </div>
  )
}

export default Footer
