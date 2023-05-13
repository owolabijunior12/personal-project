import React, { useState } from 'react';
import{BiLock}from 'react-icons/bi';
import { Signup, baseURL } from '../api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"
import {CgProfile} from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdOutlineAlternateEmail,MdOutlineDriveFileRenameOutline} from 'react-icons/md'
import './login.css'
const SignUp = () => {
      const {search} =useLocation();
      const navigate =useNavigate();
      const redirectInUrl = new URLSearchParams(search).get('redirect');
      const redirect = redirectInUrl ? redirectInUrl : '/';
      const [username,setUsername] = useState("");
      const [fullname, setFullname] =useState("");
      const [email, setEmail] =useState("");
      const [password, setPassword] = useState("");

     
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
          
           
      const handleSubmit = (e) => {
            // console.log("hello");
            // setTimeout(() => {
            //       console.log("World");
            // }, 5000);
            e.preventDefault();
            if (!fullname || !username || !email || !password) {
                  toast.error(`You need to fill up all your details`);                  
            }else{
                const data = {
                  name: fullname,
                  username:username,
                  email : email,
                  password:password,
                  role:"member"
            }   
            localStorage.setItem("userData",data)
            // localStorage.setItem("comfirmPassword",comfirmPassword);
            toast.success("successfully ")
            Signup(data);
            setTimeout(() => {
                        navigate("/home")
                  }, 5000);
            
            }
            console.log(e);
           
            

          
      }
             
                
  return (
      <div className='login text-white'>
      <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"/>
  <h2>Welcome to Iboytech store</h2>  
   <div className='signup'>
      <FcGoogle/>  Sign-up with Google
      </div>
   <p>or</p>
   <form className='login-form' action="">
      <h2>Sign-up</h2>
        <div className='textbox'>
              <input type="text" onChange={e=>setUsername(e.target.value)} name="" placeholder='Username' id="" />
              <span className='material-symbols-outline'>
                    <CgProfile/>
              </span>
        </div>
        <div className='textbox'>
              <input type="text" name="" onChange={e=>setFullname(e.target.value)} placeholder='Full-name' id="" />
              <span className='material-symbols-outline'>
                    <MdOutlineDriveFileRenameOutline/>
              </span>
        </div>
        <div className='textbox'>
              <input type="email" onChange={e=>setEmail(e.target.value)} name="" placeholder='E-mail' id="" />
              <span className='material-symbols-outline'>
                    <MdOutlineAlternateEmail/>
              </span>
        </div>
        <div className='textbox'>
             <input type="password" onChange={e=>setPassword(e.target.value)} name="" placeholder='Password' id="" />
              <span className='material-symbols-outline'>
                    <BiLock/>
              </span>
        </div>
        {/* <div className='textbox'>
             <input type="password" name="" onChange={e=>setComfirmPassword(e.target.value)} placeholder='Comfirm Password' id="" />
              <span className='material-symbols-outline'>
                    <BiLock/>
              </span>
        </div> */}
        <button type="submit" onClick={handleSubmit}> Create account</button>            
        
        <a href="http://" target="_blank" rel="noopener noreferrer">Don't have an account yet</a>
        <Link to={`/login?redirect=${redirect}`}>Sign-In</Link>
   </form>
</div>
  )
}

export default SignUp
