import React from 'react';
import {FaCrown}from 'react-icons/fa';
import profile from './Login/profile.jpg'
import {useNavigate, NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <header className="flex items-center w-full mb-6 md:py-2 justify-between   shadow-2xl shadow-cyan-500/50   md:px-0 bg-primary">
      
          <div className='flex  mx-3'>
                  <img src={profile} className=' w-12 h-12 min-w[44px] object-cover mt-4  shadow-lg' alt="user-pic" />  
              <h1 className='py-3 text-textColor'>IBOYTECH STORE</h1>
          </div>
            <div className='flex flex-col'>
               
                         <ul className='flex items-center justify-center ml-7' >
                                                      
                            <li className='mx-5 text-textColor  text-lg' ><small >Orders</small> </li>
                            <li className='mx-5 text-textColor  text-lg' ><small >Contact us</small> </li> 
                            <li className='mx-5 text-textColor text-lg'> <small >Logout</small>  </li>                              
                             <img src={profile} className=' w-12 h-12 min-w[44px] object-cover rounded-full shadow-lg' alt="user-pic" />             
                        </ul> 
                        
                  </div>            
    </header>
  )
}

export default Header
