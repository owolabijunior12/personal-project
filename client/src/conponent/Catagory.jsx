import React from 'react'

const Catagory = () => {
  return (
    <div className='w-full  h-auto'>
      <div className='text-4xl px-3 w-full bg-black text-textColor'>Brands</div>
      <div className=' flex flex-wrap '>
           {
        [
            {
                brand:"Nike",
                color:"black"
            },
            {
                brand:"Nike",
                color:"black"
            },
            {
                brand:"Nike",
                color:"black"
            },
            {
                brand:"Nike",
                color:"black"
            },
            {
                brand:"Nike",
                color:"black"
            },
            {
          
            },
            {
          
            },
            {
          
            },
           
        ].map((Catagory)=>        
                <p className='m-2 w-auto rounded-xl h-auto text-center bg-textColor  p-4'>{Catagory.brand} </p>            
        )
      }
      </div>
   
    </div>
  )
}

export default Catagory
