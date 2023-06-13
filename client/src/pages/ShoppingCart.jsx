import React, { useEffect } from 'react'
import  Header from "../conponent/Header"
import Footer from '../conponent/Footer';
import profile from "../asset/profile.jpg"
import { AiOutlineShopping } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { getAllCart } from '../api';
import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/StateProvider';

const ShoppingCart = () => {
  const [{ carts }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const GoShopping = () => {
    navigate("/home");
  };

  useEffect(() => {
    if (!carts) {
      getAllCart().then((data) => {
        dispatch({
          type: actionType.SET_CARTS,
          carts: data.addToCart,
        });
        console.log(data.addToCart);
      });
    }
  }, []);

  console.log(carts);

  return (
    <div className='w-full'>
      <Header />
      <div className='flex mt-28 flex-col justify-center items-center my-5'>
        {carts ? (
          <CartCardProduct data={carts} />
        ) : (
          <div className='flex mt-28 flex-col justify-center items-center my-5'>
            <AiOutlineShopping className='text-8xl border rounded-full p-4 bg-white text-textColor' />
            <p className='font-bold text-4xl text-textColor py-2'>Your cart is empty</p>
            <h1 className='text-textColor font-semibold py-2'>Browse our categories and discover our best deals!</h1>
            <button type='button' className='bg-primary px-12 rounded-xl  my-10 py-2 text-2xl text-textColor' onClick={GoShopping}>Start Shopping</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const CartCardProduct = ({ data }) => {
  return (
    <div className='flex mt-28 flex-col justify-center items-center my-5'>
      <AiOutlineShopping className='text-8xl border rounded-full p-4 bg-white text-textColor' />
      <p className='font-bold text-4xl text-textColor py-2'>Your cart is empty</p>
      <h1 className='text-textColor font-semibold py-2'>Browse our categories and discover our best deals!</h1>
    </div>
  );
};

export default ShoppingCart;
