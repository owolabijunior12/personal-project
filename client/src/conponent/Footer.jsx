import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Footer = () => {
  const {search} =useLocation();  
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <i className='bg-black h-auto py-6 px-2  text-textColor flex flex-col justify-center items-center text-sm'>
        <div className='  text-center text-2xl'>
               
                <p>Welcome to our Iboytech store that specializes in selling used products! Our platform is designed to provide a convenient and affordable way for customers to buy and sell pre-owned items.</p>
        </div>
        <div className='flex flex-wrap my-8 justify-evenly w-full'>
              <ul >
                  <li  className=' py-3 text-xl'><Link to={`/policy?redirect=${redirect}`}>Our Policy</Link></li>
                    <li  className=' py-3 text-xl'><Link to={`/about-us?redirect=${redirect}`}>About Us</Link></li>
                  <li   className=' py-3 text-xl'><Link to={`/Help?redirect=${redirect}`}>Help</Link></li>
                   <li  className=' py-3 text-xl'><Link to={`/contact-us?redirect=${redirect}`}>Contact-us</Link></li>
              </ul>
              <ul>
                  <li className=' py-3 text-xl'><Link to={`/policy?redirect=${redirect}`}>Our Policy</Link></li>
                    <li  className=' py-3 text-xl'><Link to={`/about-us?redirect=${redirect}`}>About Us</Link></li>
                  <li  className=' py-3 text-xl'><Link to={`/Help?redirect=${redirect}`}>Help</Link></li>
                   <li  className=' py-3 text-xl'><Link to={`/contact-us?redirect=${redirect}`}>Contact-us</Link></li>
              </ul>
        </div>
        <i> © 2023 Copyright: <a href="#" target="_blank" rel="noopener noreferrer">Iboytech Store</a></i>
        <i>All Right Reserved </i>               
    </i>
  )
}

export default Footer
