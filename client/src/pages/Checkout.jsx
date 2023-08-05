import React from 'react'
import Footer from '../conponent/Footer'
import { useState } from 'react'
import { motion } from 'framer-motion';
import { useStateValue } from '../Context/StateProvider'
import Header from '../conponent/Header'

const Checkout = () => {
  const [{carts},dispatch] =useStateValue()
  // const [check, setCheck] =  useState();
  let price =carts.reduce((total, cart) => total + cart.productPrice * cart.productQty, 0).toFixed(2)
  let quality =carts.reduce((total, cart) => total + cart.productQty, 0)
  console.log(price);
  console.log(quality);
  return (
    <div className='h-full w-full'>
      <Header />
        {carts&&(
          <div className='text-textColor mx-7 mt-28 items-center flex flex-col' >
            <h4 className='fon font-light m-3 text-white text-4xl'>Comfirm before purchase</h4>
            <div className='border p-4 w-full m-4 rounded-lg border-textColor'>
               {carts.map(({id,name,imageURL,productPrice,productSize, productQty})=>{
              return(
                <div key={id}  >
                  <ul className='gap-3'>                      
                      <li className='gap-3'>{name}   {productPrice} X{productQty}</li>                      
                  </ul>                   
              </div>
              )
              
            })}
            </div> 
            <div>
         <form action=""  className="flex flex-col w-full   gap-4 " >
             <div>    
        <input
          type="text"
          placeholder="Full Name"
          className="w-full my-3  p-3 rounded-md  text-base font-semibold text-textColor outline-none shadow-sm border border-textColor bg-transparent"
       
        />      
         <input
          type="text"
          placeholder="Address"
          className="w-full my-3  p-3 rounded-md  text-base font-semibold text-textColor outline-none shadow-sm border border-textColor bg-transparent"
       
        />              
        
         <input
          type="number"
          placeholder="Phone number"
          className="w-full my-3  p-3 rounded-md  text-base font-semibold text-textColor outline-none shadow-sm border border-textColor bg-transparent"
       
        />
         <input
          type="text"
          placeholder="Product Status"
          className="w-full my-3  p-3 rounded-md  text-base font-semibold text-textColor outline-none shadow-sm border border-textColor bg-transparent"
       
        />
         <input
          type="text"
          placeholder="Product Model Number"
          className="w-full my-3  p-3 rounded-md  text-base font-semibold text-textColor outline-none shadow-sm border border-textColor bg-transparent"
       
        />
         <input
          type="text"
          placeholder="Product Serial Number"
          className="w-full  p-3 rounded-md  text-base font-semibold text-textColor outline-none shadow-sm border border-textColor bg-transparent"
       
        />        
      </div>
                  </form>
              <div className='border p-4 w-full my-4 rounded-lg border-textColor'>
                  <h2 className='flex text-2xl font-bold'>Order Summary</h2>
                  <div className='flex justify-between px-2 mt-2'> 
                      <h3>TOTAL QUANTITY:</h3>
                      <h3 className='flex text-2xl font-bold'> x{quality}</h3>
                  </div>
                  <div className='flex justify-between px-2 mt-2'> 
                      <h3>SHIPPING FEE:</h3>
                      <h3 className='flex text-2xl font-bold'> ₦ 0.00</h3>
                  </div>
                  <div className='flex justify-between px-2 mt-2'> 
                      <h3>DELIEVEING FEE:</h3>
                      <h3 className='flex text-2xl font-bold'> ₦ 0.00</h3>
                  </div>
                  <div className='flex justify-between px-2 mt-2'> 
                      <h3>TOTAL PRICE:</h3>
                      <h3 className='flex text-2xl font-bold'> ₦ {price}</h3>
                  </div>
                  <div className='flex justify-between px-2 mt-2'> 
                      <h3></h3>
                      <motion.button
                          whileTap={{ scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          type='button'          
                          className=' bg-red-500 w-[130px] text-white m-2 p-3 rounded-xl'
                        >
                          Buy now           
                        </motion.button>
                  </div>
            </div> 
            </div>                      
          </div>
        )
      }
      <Footer/>
    </div>
  )
}
export default Checkout
