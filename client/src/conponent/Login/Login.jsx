import React from 'react';
import profile from './profile.jpg'
import{BiLock}from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
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
      <div class="avatar">
        <img src={profile} alt='profile' />
      </div>
           
         <h2>Login</h2>
         <h2>Welcome back Iboytech</h2>
         <form className='login-form' action="">
              <div className='textbox'>
                    <input type="email" onClick={notify} name="" placeholder='Username' id="" />
                    <span className='material-symbols-outline'>
                          <CgProfile/>
                    </span>
              </div>
              <div className='textbox'>
                   <input type="password" name="" placeholder='Password' id="" />
                    <span className='material-symbols-outline'>
                          <BiLock/>
                    </span>
              </div>
              <button onClick={notify}>Login</button>
                       
              <a href="#" target="_blank" rel="noopener noreferrer">
                 Forgot Password
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">Don't have an account yet</a>
         </form>
      
  </div>
  )
}

export default Login
