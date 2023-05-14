
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Catagory from './Catagory'
import Banner from "./Banner"
// import { productData } from '../pages/DemoDatas'
import Product from "./Product"
import Sidebar from './Sidebar'
import useMediaQuery from '../utils/styles'
const HomeScreen = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className='flex flex-col w-full h-full'>
        <Header/>  
    {isDesktop?(
          <div className='flex flex-1 overflow-scroll'>
                    <div className=''> <Sidebar/></div>
                    <div className='scrol overflow-visible'>
                      <marquee behavior="move" direction="left"  className="text-xl  shadow-2xl shadow-cyan-500/50 mt-28 font-extrabold text-yellow-500"><i>Welcome to Iboytech Store... Where you can get all fairly used product that 100% secure </i></marquee>
                      <Banner/>   
                      <Catagory />      
                      <Product   />
                        
                    </div>
                    
                </div>
    ):(
      <div className='flex flex-col w-full h-full'>        
      {/* <Header/> */}
      <marquee behavior="move" direction="left"  className="text-xl mt-28 font-extrabold text-yellow-500"><i>Welcome to Iboytech Store... Where you can get all fairly used product that 100% secure </i></marquee>
      <Banner/>   
      <Catagory />      
       <Product   />
       {/* <Footer/>      */}
    </div>
    )

    }      
     
       
       <Footer/> 
          
     </div>
  )
}

export default HomeScreen
