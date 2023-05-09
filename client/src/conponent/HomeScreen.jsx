import React from 'react'
import Footer from './Footer'
import {Route, Routes, useNavigate } from 'react-router-dom'
import axios from "axios"
import Header from './Header'
import profile from "../asset/profile.jpg"
import Login from "../pages/Login"
import Signup from '../pages/Signup';
import CheckOut from '../pages/Checkout'
import ShoppingCart from '../pages/ShoppingCart'
const HomeScreen = () => {
  return (
    <div className='flex flex-col h-full'>        
       <Header/>        
        <div>
            <div className='text-4xl text-center bg-black text-textColor'>Accessories</div>
            <div className="relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:shadow-xl  hover:bg-green-400 bg-black m-4 shadow-md rounded-lg flex flex-col items-center">
              <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
                <img
                  whileHover={{ scale: 1.05 }}
                  src={profile}
                  alt=""
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
      
              <p className="text-base items-center text-textColor font-semibold my-2">
                Product Name:
                <span className=" text-sm text-textColor my-1"> Nike Air Force 1</span>
              </p>
              <p className="text-base text-textColor items-center font-semibold ">
                Price: 
                <span className=" text-sm text-textColor my-1"> $400.32</span>
              </p>
              <p className="text-base text-textColor items-center font-semibold ">
                Status: 
                <span className=" text-sm text-textColor my-1"> Available</span>
              </p>
            </div>
        </div>
          <Footer/>
        <Routes>
              <Route path="/signup" element={<Signup />} />          
              <Route path="/shoppingCart" element={<ShoppingCart />} />
              <Route path="/Home" element={<HomeScreen />} />
              <Route path="/checkout"     element={<CheckOut/>} />
        </Routes>
     </div>
  )
}

export default HomeScreen
