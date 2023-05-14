import React from 'react'
import { FiKey } from 'react-icons/fi'

const Catagory = () => {
  return (
    <div className='w-full  h-auto'>
      <div className='text-4xl px-3 w-full bg-black text-textColor'>Brands</div>
      <div className=' flex flex-wrap '>
           {
        [
            {
                id:1,
                brand:"Nike",
                color:"black"
            },
            {
                id:2,
                brand:"Nike",
                color:"black"
            },
            {
                id:3,
                brand:"Nike",
                color:"black"
            },
            {
               id:4,
                brand:"Nike",
                color:"black"
            },
            {
                id:5,
                brand:"Nike",
                color:"black"
            },
       
           
        ]?.map((Catagory)=> 
            
                <p className='m-2 w-auto rounded-xl h-auto text-center bg-textColor  p-4'>{Catagory.brand}{FiKey} </p>            
        )
      }
      </div>
   
    </div>
  )
}

export default Catagory
