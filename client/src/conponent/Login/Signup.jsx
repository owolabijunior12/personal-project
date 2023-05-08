import React from 'react';
import{BiLock}from 'react-icons/bi';
import {FcGoogle} from "react-icons/fc"
import {CgProfile} from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdOutlineAlternateEmail,MdOutlineDriveFileRenameOutline} from 'react-icons/md'
import './login.css'
const SignUp = () => {
      const notify = () => toast.success(`🦄 Logged in successfully`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
  return (
    <div className='login'>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
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
              <div className='textbox'>
                   <input type="password" name="" placeholder='Comfirm Password' id="" />
                    <span className='material-symbols-outline'>
                          <BiLock/>
                    </span>
              </div>
              <button type="submit" onChange={notify}>Create account</button>            
              
              <a href="http://" target="_blank" rel="noopener noreferrer">Don't have an account yet</a>
         </form>
  </div>
  )
}

export default SignUp
