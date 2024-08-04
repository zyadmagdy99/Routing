import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';

function App() {

 let router = createBrowserRouter([{
    path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"Contact",element:<Contact/>},
      {path:"PORTFOLI",element:<Portfolio/>},
      {path:"*",element:<NotFound/>},
      

    ]
  }])
  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
