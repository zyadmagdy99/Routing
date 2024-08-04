import React from 'react'
import imgo from '../../../public/poert1.png'
import imgo2 from '../../../public/port2.png'
import imgo3 from '../../../public/port3.png'
import {useState} from 'react'

export default function Portfolio() {

 const [image, setimage] = useState(null)

 function changepic(imgsrc){

    setimage(imgsrc)
 }

    
  return (
    
    <div   className=' relative'>
   {image && ( <div className='z-40 flex justify-center items-center  w-screen h-screen fixed top-0 left-0 bg-slate-900 bg-opacity-75 ' onClick={()=>{changepic(null)}} >
        <div onClick={()=>{changepic()}} className='flex justify-center left-[30%] fixed'>
        <img className='w-[580px] rounded-lg' src={image} alt="" />
        </div>
    </div>
   )}
      <div className=''>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-4xl font-extrabold text-slate-600'>ABOUT PORTFOLIO</div>
          <div className='mt-4 flex gap-7 justify-center items-center'>
            <div className='line w-20 h-1 bg-slate-600'></div>
            <div><i className="fa-solid fa-star"></i></div>
            <div className='line w-20 h-1 bg-slate-600'></div>
          </div>
        </div>
        <div className='imgs flex justify-center gap-10 mt-8'>
          <div className='w-1/4 relative group'>
            <img className='w-[350px] rounded-lg' src={imgo} alt="" />
            <div onClick={()=>{changepic(imgo)}} className='zz w-full h-full bg-teal-600 absolute top-0 flex justify-center  items-center opacity-90 hidden group-hover:flex transition-opacity duration-500'>
              <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
          </div>
          <div className='w-1/4 relative group'>
            <img className='w-[350px] rounded-lg' src={imgo2} alt="" />
            <div onClick={()=>{changepic(imgo2)}} className='zz w-full h-full bg-teal-600 absolute top-0 flex justify-center items-center opacity-90 hidden group-hover:flex transition-opacity duration-500'>
              <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
          </div>
          <div className='w-1/4 relative group'>
            <img className='w-[350px] rounded-lg' src={imgo3} alt=""/>
            <div  onClick={()=>{changepic(imgo3)}} className='zz w-full h-full bg-teal-600 absolute top-0 flex justify-center items-center opacity-90 hidden group-hover:flex transition-opacity duration-500'>
              <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
          </div>
        </div>
        <div className='imgs flex justify-center gap-10 mt-8 mb-10'>
          <div className='w-1/4 relative group'>
            <img className='w-[350px] rounded-lg' src={imgo} alt="" />
            <div onClick={()=>{changepic(imgo)}} className='zz w-full h-full bg-teal-600 absolute top-0 flex justify-center  items-center opacity-90 hidden group-hover:flex transition-opacity duration-500'>
              <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
          </div>
          <div className='w-1/4 relative group'>
            <img className='w-[350px] rounded-lg' src={imgo2} alt="" />
            <div onClick={()=>{changepic(imgo2)}} className='zz w-full h-full bg-teal-600 absolute top-0 flex justify-center items-center opacity-90 hidden group-hover:flex transition-opacity duration-500'>
              <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
          </div>
          <div className='w-1/4 relative group'>
            <img className='w-[350px] rounded-lg' src={imgo3} alt=""/>
            <div  onClick={()=>{changepic(imgo3)}} className='zz w-full h-full bg-teal-600 absolute top-0 flex justify-center items-center opacity-90 hidden group-hover:flex transition-opacity duration-500'>
              <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}
