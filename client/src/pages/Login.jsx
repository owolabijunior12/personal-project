import React, { useEffect } from 'react';
import profile from '../asset/profile.jpg'
import{BiLock}from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import './login.css';
import axios from "axios";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({useAuth, history}) => {
      const navigate = useNavigate();
      const [email,setEmail] =useState("");
      const [password,setPassword] = useState("")
      const [values,setValues] =useState()
      const authEmail = localStorage.getItem("email")
      const authPassword = localStorage.getItem("password")       
      
      const notify = () => toast.success(`Logged in successfully`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            const  handleSubmit = async (e)=>{
             e.preventDefault();
            if ( password===authPassword){
                  navigate("/home")
            }
                                                      
            }
            
  return (
      <div className='body'>
            <div className='login'>            
                  <div className="avatar">
                  <img src={profile} alt='profile' />
                  </div>
                  
                  <h2>Login</h2>
                  <h2>Welcome back Iboytech</h2>
                  <form className='login-form' action="">
                        <div className='textbox'>
                              <input type="email" onChange={e=>setEmail(e.target.value)}
                              name="" placeholder='Username' id="" />
                              <span className='material-symbols-outline'>
                                    <CgProfile/>
                              </span>
                        </div>
                        <div className='textbox'>
                              <input type="password"onChange={e=>setPassword(e.target.value)} name="" placeholder='Password' id="" />
                              <span className='material-symbols-outline'>
                                    <BiLock/>
                              </span>
                        </div>
                       
                              <button onClick={notify}><div onClick={handleSubmit} className='w-full'> Login</div></button>
                        
                              
                        <a href="#" target="_blank" rel="noopener noreferrer">
                        Forgot Password
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Don't have an account yet</a>
                  </form>
                  
            </div>
  </div>
  )
}

export default Login
