import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import profile from '../asset/profile.jpg';
import { productData } from '../pages/DemoDatas';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { getAllProduct } from '../api';
import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/StateProvider';

const Product = () => {
  const navigate = useNavigate();
  const [{ allProduct }, dispatch] = useStateValue();

 useEffect(() => {
  if (!allProduct) {
    getAllProduct().then((data) => {
      dispatch({
        type: actionType.SET_PRODUCT,
        allProduct: data.product,
      });
      console.log(data.product);
    });
  }
}, []);

  return (
   <div className='mb-8 py-10'>
      <div className='flex pl-6 bg-black text-textColor text-4xl mb-7'>FootWears</div>
      <div className='h-6 mb-3 w-20'>
        <ProductContainer  data={allProduct}/>
      </div>
   </div>
  );
};

export default Product;

export const ProductContainer =( {data})=>{
  return (
    <div className=" w-full  flex flex-wrap gap-3  items-center justify-evenly">
      {data&&
        data.map((product,i)=>{
            <productCard key={product.id}  data={product} index={i}/>
        })
      }
    </div>
  )
}
