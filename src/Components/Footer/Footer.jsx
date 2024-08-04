import React from 'react'

export default function Footer() {
  return (
    <>
    <div className=' bottom-0 w-full left-0 right-0'>
    <div className='bg-slate-700 flex justify-around h-[250px] pt-14'>
        <div className='text-white mt-2 p-2 '>
            <h1 className='text-3xl font-bold mb-3'>LOCATION            </h1>
            <p className='mb-3'>2215 John Daniel Drive</p>
            <p className='text-xl'>Clark, MO 65243</p>
        </div>
        <div className='text-white mt-2 p-2 '>
            <h1 className='text-3xl font-bold mb-3'>AROUND THE WEB            </h1>
          <div className='flex w-full justify-center gap-5'>
          <p className='text-xl'><i class="fa-brands fa-facebook"></i></p>
          <p className='text-xl'><i class="fa-brands fa-twitter"></i></p>
          <p className='text-xl'><i class="fa-brands fa-linkedin"></i></p>
          <p className='text-xl'><i class="fa-solid fa-globe" ></i></p>

          </div>

        </div>
        <div className='text-white mt-2 p-2 '>
            <h1 className='text-3xl font-bold mb-3'>ABOUT FREELANCER            </h1>
            <p className='mb-3'>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
        </div>
    </div>
    <div className='w-full bg-slate-900 text-white text-center h-[70px] pt-5'>Copyright © Your Website 2021</div>
    </div>
    
    </>
  )
}
