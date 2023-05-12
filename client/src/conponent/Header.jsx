import React from 'react';
import {FaCrown}from 'react-icons/fa';
import profile from '../asset/profile.jpg';
import {GiShoppingCart} from "react-icons/gi"
import {FiLogOut} from "react-icons/fi"
import {useNavigate, Link, useLocation} from 'react-router-dom';
const Header = () => {
  const {search} = useLocation;
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  // const logOutHandler = ()=>{
     
  // }

  return (
    <header className="flex items-center w-full pl-2 mb-6 md:py-2 justify-between   shadow-2xl shadow-cyan-500/50   md:px-0 bg-primary">
           <div className='flex '> 
            <Link to={'/'}>
                <h1 className='py-3 px-2 text-2xl text-textColor'>IBOYTECH STORE</h1>
              </Link>
          </div>
                <div className='relative scale-75 flex '>      
                <span className='absolute -top-3 left-9 rounded-full bg-red-500 p-0.25 px-2 text-lg text-red-50'>0</span>                                   
                    <p className='mx-5 text-textColor text-4xl'> <small ><Link to={`/shoppingCart?redirect=${redirect}`}>  <GiShoppingCart /></Link></small>  </p>                                                  
                    <p className='mx-5 text-textColor text-4xl'><small><Link to={`/login?redirect=${redirect}`}><FiLogOut values="LogOut" /></Link></small>  </p>                                                  
                    
                </div>                                      
    </header>
  )
}

export default Header

