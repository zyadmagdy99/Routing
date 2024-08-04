import React from 'react'

export default function Contact() {
  return (
    <>
    
    <div className=' h-screen flex flex-col justify-center items-center gap-7'>

    <div className='text-4xl font-extrabold'>ABOUT COMPONENT </div>
    <div className='mt-4 flex gap-7 justify-center items-center'>
        <div className='line w-20 h-1 bg-teal-800'></div>
        <div><i class="fa-solid fa-star"></i></div>
        <div className='line w-20 h-1 bg-teal-800'></div>
    </div>


        <input type="text" placeholder='userName' className='w-1/2 border-b-2 ' />
        <input type="text" placeholder='userAge' className='w-1/2 border-b-2' />
        <input type="text" placeholder='userEmail' className='w-1/2 border-b-2' />
        <input type="text" placeholder='userPassword' className='w-1/2 border-b-2' />
        <button className='p-3 rounded-lg bg-teal-500 text-white me-[550px]'>send message</button>

    </div>
    </>
  )
}
