import React from 'react';
import{BiLock}from 'react-icons/bi';
import {FcGoogle} from "react-icons/fc"
import {CgProfile} from 'react-icons/cg';
import {MdOutlineAlternateEmail,MdOutlineDriveFileRenameOutline} from 'react-icons/md'
import './login.css'
const Login = () => {
  return (
    <div className='login'>
        <h2>Welcome to Iboytech store</h2>  
         <div className='signup'>
            <FcGoogle/>  Sign-up with Google
            </div>
         <p>or</p>
         <form className='login-form' action="">
            <h2>Sign-up</h2>
              <div className='textbox'>
                    <input type="text" name="" placeholder='Username' id="" />
                    <span className='material-symbols-outline'>
                          <CgProfile/>
                    </span>
              </div>
              <div className='textbox'>
                    <input type="text" name="" placeholder='Full-name' id="" />
                    <span className='material-symbols-outline'>
                          <MdOutlineDriveFileRenameOutline/>
                    </span>
              </div>
              <div className='textbox'>
                    <input type="email" name="" placeholder='E-mail' id="" />
                    <span className='material-symbols-outline'>
                          <MdOutlineAlternateEmail/>
                    </span>
              </div>
              <div className='textbox'>
                   <input type="password" name="" placeholder='Password' id="" />
                    <span className='material-symbols-outline'>
                          <BiLock/>
                    </span>
              </div>
              <button type="submit">Create account</button>            
              
              <a href="http://" target="_blank" rel="noopener noreferrer">Don't have an account yet</a>
         </form>
  </div>
  )
}

export default Login
