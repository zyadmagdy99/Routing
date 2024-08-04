import React from 'react'
import pic from '../../../public/avataaars.svg'

export default function Home() {
  return (
    <>
    
    <div className='flex flex-col justify-center items-center  bg-teal-700 gap-8 py-7 '>

        <div className='w-[300px] h-[300px]'>        <img className='w-full' src={pic} alt="" />        </div>
        <div className='text-4xl font-extrabold text-white'>START FRAMEWORK        </div>
    <div className='mt-4 flex gap-7 justify-center items-center'>
        <div className='line w-20 h-1 bg-white'></div>
        <div className='text-white'><i class="fa-solid fa-star"></i></div>
        <div className='line w-20 h-1 bg-white'></div>
    </div>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator
        </p>

    </div>
    </>
  )
}
