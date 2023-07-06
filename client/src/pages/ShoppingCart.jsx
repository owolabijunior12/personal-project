import React, { useEffect } from 'react'
import  Header from "../conponent/Header"
import Footer from '../conponent/Footer';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { deleteCart, getAllCart } from '../api';
import { MdDelete } from 'react-icons/md';
import {motion} from 'framer-motion'

import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/StateProvider';

const ShoppingCart = () => {
  const [{ carts }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const GoShopping = () => {
    navigate("/home");
  };
   const cartProducts =    localStorage.getItem("cart");

  return (
    <div className='w-full'>
      <Header />
      <div className='flex mt-28 justify-between  flex-col my-5'>
        {!cartProducts? (
            <div className='flex mt-28 flex-col justify-center items-center my-5'>
               <AiOutlineShopping className='text-8xl border rounded-full p-4 bg-white text-textColor' />
                <p className='font-bold text-4xl text-textColor py-2'>Your cart is empty</p>
                <h1 className='text-textColor font-semibold py-2'>Browse our categories and discover our best deals!</h1>
                <button type='button' className='bg-primary px-12 rounded-xl  my-10 py-2 text-2xl text-textColor' onClick={GoShopping}>Start Shopping</button>
            </div>
          ) : (
             <CartCardProduct key={cartProducts} data={cartProducts} />
        )}
      </div>
      <Footer />
    </div>
  );
};

const CartCardProduct = ({ data }) => {
  const cartitems =localStorage.getItem("cart");
  const [{ carts }, dispatch] = useStateValue();
  // const navigates = useNavigate();
  
useEffect(()=>{
 if (!carts) {
    dispatch({
      type:actionType.SET_CART_PRODUCT,
        carts:cartitems
    })
    console.log(carts);
 }
},[])
  
  const addCartQty = () =>{
    const cartitemsId = cartitems.id
   let cartitemsQty = cartitems.productQty
   if(cartitemsId === data.id){
    return cartitemsQty++
   }
}
  const minusCartQty = () =>{    
    const cartitemsId = cartitems.id
   let cartitemsQty = cartitems.productQty
   if(cartitemsId === data.id){
    return cartitemsQty++
   }
}
 const deleteCartItem = () =>{
  const cartitemsId = cartitems.id
  if(cartitemsId=== data.id){
    localStorage.removeItem()
  }
 }



const navigate = useNavigate();
  return (
    <div className='flex h-auto justify-between rounded-2xl border p-2 m-2 border-textColor flex-col'>
       <div className='flex flex-col'>
      {data?.map((cart) => (
        <div onClick={() => navigate(`/product-details/${cart._id}`)}  className='flex  w-full border-textColor border p-4  my-2' key={cart._id}>
          <div className='flex justify-between w-full gap-3 items-center'>
            <div className='flex gap-3'>
               <img src={cart.imageURL} className='h-20 w-36 rounded-lg' alt="" />
              <div>
                <p className='font-bold text-2xl text-textColor '>{cart.name}</p>
              <p className='font-bold text-2xl text-textColor'>${cart.product_price}</p>
              </div> 
            </div>
                <div className='flex  justify-between text-3xl w-28 items-center gap-2'>
                  <motion.button
                   className='text-4xl text-textColor'
                   whileTap={{ scale: 0.8 }}
                   onClick={minusCartQty}
                   >
                    <AiOutlineMinus/>
                    </motion.button>
                  <span className='w-8'>0</span>
                  <motion.button
                   className='text-4xl text-textColor'
                   whileTap={{ scale: 0.8 }}                  
                  onClick={addCartQty}
                   >
                    <AiOutlinePlus/>
                    </motion.button>
                  </div>                                  
              <div>
          </div>
          <div className='flex items-center'>          
              <motion.button
              whileTap={{ scale: 0.8 }}        
              transition={{ duration: 0.3}}  
              onClick={deleteCartItem}                           
          >
            <MdDelete className="text-red-500 text-2xl"/>          
          </motion.button>              
          </div>
        
              </div>                 
        </div>
      ))}

    </div>
    <div className='flex items-center h-20 justify-between'>
     <h1 className='text-4xl text-white'>Total: <span>0</span></h1>
     <motion.button 
           whileTap={{ scale: 0.8 }}        
           transition={{ duration: 0.3}}
          type='button' 
          // onClick={cartProduct}
          className=' bg-red-500 text-white m-2 p-2 rounded-xl' 
           >
            Buy Now
          </motion.button>
    </div>
    </div>
   
  );
};


export default ShoppingCart;
