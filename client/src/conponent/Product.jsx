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
          product: data,
        });
        console.log(data);
      });
    }
  }, []);

  return (
    <>
      <div className='flex pl-6 bg-black text-textColor text-4xl mb-7'>FootWears</div>
      <div className='flex'>
        {allProduct &&
          allProduct.map((data, index) => (
            <div key={data._id}>
              <Link to={`/product/${data._id}`}>
                <motion.div className='bg-black h-11'>
                  <p className='text-6xl'>{data.product_color}</p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </motion.div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Product;
