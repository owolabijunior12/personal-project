import React from 'react'
import  Header from "../conponent/Header"
import Footer from '../conponent/Footer';
import profile from "../asset/profile.jpg"
import { AiOutlineShopping } from 'react-icons/ai';
// import
import { useNavigate } from 'react-router-dom';
const ShoppingCart = () => {
  const navigate = useNavigate()
  const GoShopping=()=>{
      navigate("/home")
  }
  return (
    <div className='w-full'>
      <Header />
        <div className='flex flex-col justify-center items-center my-5'>
            <AiOutlineShopping  className='text-8xl border rounded-full p-4 bg-white text-textColor'/>
              <p className='font-bold text-4xl text-textColor py-2'>Your cart is empty </p>
              <h1 className='text-textColor font-semibold py-2'>Browser our catagories and discover our best deals!</h1>
              <button type='button' className='bg-black px-12 rounded-xl  my-10 py-2 text-2xl text-textColor' onClick={GoShopping}>Start Shopping</button>
        </div>
        <div className='relative flex  min-w-160   cursor-pointer    bg-black m-4  shadow-md rounded-lg flex-col'>
          <div className='flex flex-row   px-4 justify-between'>
              <p className='text-textColor text-2xl font-extrabold '>Saved Items ( 2 )</p>
              <p className='text-2xl text-white underline font-extrabold'>See All</p>
          </div>
          <div className='flex flex-wrap'>
            
            {[
                   
                     {
                        id:5,
                       product_name: "Nike Air Force4",
                       product_price: 300.54,
                       product_image: profile,
                       product_status:"Availaible"
                     },
                     {
                        id:6,
                       product_name: "Nike Air Force4",
                       product_price: 300.54,
                       product_image: profile,
                       product_status:"Availaible"
                     }
        
                   ].map((product)=>
               
                   <div className="relative flex w-30 min-w-160   cursor-pointer hover:shadow-xl  hover:bg-white bg-black m-4 shadow-md rounded-lg flex-col items-center">
                     <div className=" min-w-[120px] w-32 h-30 min-h-[120px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
                       <img
                         whileHover={{ scale: 1.05 }}
                         src={product.product_image}
                         alt="product_image"
                         className="w-full h-full rounded-lg object-cover"
                       />
                     </div>                   
                     <p className="text-base items-center text-textColor font-semibold my-2">
                           
                           <span className=" text-sm text-textColor my-1"> {product.product_name}</span>
                       </p>
                       <p className="text-base text-textColor items-center font-semibold ">
                         
                         <span className=" text-sm text-textColor my-1"> ${product.product_price} </span>
                       </p>                                           
                 </div>
             
                   )}      
                 </div>
        </div>
        <div className='relative flex  min-w-160   cursor-pointer    bg-black m-4   rounded-lg flex-col'>
          <div className='flex flex-row   px-1 justify-between'>
              <p className='text-textColor text-2xl font-extrabold '>Top Sales</p>              
          </div>
          <div className='flex flex-wrap'>
            
            {[
                   
                     {
                        id:5,
                       product_name: "Nike Air Force4",
                       product_price: 300.54,
                       product_image: profile,
                       product_status:"Availaible"
                     },
                     {
                        id:6,
                       product_name: "Nike Air Force4",
                       product_price: 300.54,
                       product_image: profile,
                       product_status:"Availaible"
                     }
        
                   ].map((product)=>
               
                   <div className="relative flex w-30 min-w-160   cursor-pointer   hover:bg-white bg-black m-4 shadow-md rounded-lg flex-col items-center">
                     <div className=" min-w-[120px] w-32 h-30 min-h-[120px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
                       <img
                         whileHover={{ scale: 1.05 }}
                         src={product.product_image}
                         alt="product_image"
                         className="w-full h-full rounded-lg object-cover"
                       />
                     </div>                   
                     <p className="text-base items-center text-textColor font-semibold my-2">
                           
                           <span className=" text-sm text-textColor my-1"> {product.product_name}</span>
                       </p>
                       <p className="text-base text-textColor items-center font-semibold ">
                         
                         <span className=" text-sm text-textColor my-1"> ${product.product_price} </span>
                       </p>                                           
                 </div>
             
                   )}      
                 </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ShoppingCart
