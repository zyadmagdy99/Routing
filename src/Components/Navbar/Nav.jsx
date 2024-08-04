import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Nav() {

  const [scroll, setscroll] = useState(false)
  useEffect(()=>{
    function scrolled(){
      if(window.scrollY>50){
        setscroll(true)
      }else{
        setscroll(false)
      }
    }
    window.addEventListener('scroll', scrolled);

  },[])


  return (
    <div className={`flex z-50 fixed justify-around bg-slate-700 w-full left-0 top-0 right-0 transition-all duration-500 ${scroll ? 'h-[80px]' : 'h-[100px]'}`}>
        <div className='text-3xl font-extrabold mt-6 text-white'><Link to="">START FRAMEWORK</Link></div>
        <div> <ul className='flex gap-4 text-xl font-bold mt-6 text-white' >
            <li><NavLink to="about">ABOUT</NavLink></li>
            <li><NavLink to="PORTFOLI">PORTFOLI</NavLink></li>
            <li><NavLink to="CONTACT">CONTACT</NavLink></li>
            </ul></div>
    </div>
  )
}
