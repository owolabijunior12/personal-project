
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Catagory from './Catagory'
import Banner from "./Banner"
// import { productData } from '../pages/DemoDatas'


import Product from "./Product"
const HomeScreen = () => {
  return (
    <div className='flex flex-col w-full transition-all duration-500 h-full'>        
       <Header/>
       <marquee behavior="move" direction="left"  className="text-xl mt-24 font-extrabold text-yellow-500"><i>Welcome to Iboytech Store... Where you can get all fairly used product that 100% secure </i></marquee>
       <Banner/>   
       <Catagory />      
        <Product   />
        <Footer/>     
     </div>
  )
}

export default HomeScreen
