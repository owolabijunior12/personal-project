import React from 'react'
import Footer from './Footer'
import {Route, Routes, useNavigate } from 'react-router-dom'
import axios from "axios"
import Header from './Header'
import profile from "../asset/profile.jpg"
import Login from "../pages/Login"
import Signup from '../pages/Signup';
import Banner from "./Banner"
import CheckOut from '../pages/Checkout'
import ShoppingCart from '../pages/ShoppingCart'
import Product from "./Product"
const HomeScreen = (product) => {
  return (
    <div className='flex flex-col h-full'>        
       <Header/>
       <Banner/>
       <div className='text-4xl text-center bg-black text-textColor'>Accessories</div>  
        <Product  key={product.id}/>
        <Footer/>     
     </div>
  )
}

export default HomeScreen
