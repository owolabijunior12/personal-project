import React from 'react'
import profile from "../asset/profile.jpg"

const Banner = () => {
  return (
    <div className=' h-auto   md:p-0  rounded-3xl flex justify-evenly bg-primary m-4 py-2 text-textColor mb-6 bg-'>    
       <div className='flex  flex-col justify-center text-center h-full items-center'>
            <p className='text-2xl pt-10'>BEST SALES OF THE WEEK</p> 
            <p className='text-lg py-4'> Nike Air Force 1 has the highest sales for this week</p>
            <p className='text-sm py-4'>You can get it for a low price of  $50</p>
       </div>
       <div className='flex  justify-center items-center'>
            <img src={profile} className="w-225 h-175 pr-1" alt="" />  
       </div>
       <div className='flex flex-col justify-center px-1 items-center max-w-xs '>
          <div className=' bottom-0 left-0'>
                <p className='text-2xl py-2'> Nike Air Force 1</p>
                
                <p> Price: $50.99  </p>
          </div>
        <div>
           <button type='button' className=' bg-red-500 text-white m-2 p-2 rounded-xl'>Add To Cart</button>             
        </div>
           
       </div>
    </div>
  )
}

export default Banner
