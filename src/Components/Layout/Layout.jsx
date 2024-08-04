import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='flex flex-col'>
      <div className='mb-16'>
      <Nav/>

      </div>
      <div>
      <Outlet/>

      </div>
      <div>
      <Footer/>

      </div>

    </div>
   
    </>
  )
}
