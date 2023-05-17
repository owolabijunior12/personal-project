import React, { useEffect } from 'react';
import profile from '../asset/profile.jpg'
import{BiLock}from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import './login.css';
// import axios from "axios";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import { Signin } from '../api';
const Login = ({useAuth, history,setAuth}) => {
      const navigate = useNavigate();
      const [username,setUsername] =useState("");
      const [password,setPassword] = useState("")
      // const [values,setValues] =useState()
      const authEmail = localStorage.getItem("email")
      // const authUsername = localStorage.getItem("username")
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
                  if ( !username  || !password ) {
                        toast.error(`You need to fill up all your details`);
                    }

                          try {
                      const response = await Signin(username,password); // Serialize `data` as JSON                      
                      console.log(response);
                      toast.success("Logged in successfully");
                      window.localStorage.setItem("auth", "true"); 
                      setTimeout(() => {
                        navigate("/home");
                      }, 5000);
                    } catch (error) {                      
                      console.error(error);
                      toast.error(`An error occurred during log in.`);
                    }

            // if ( password===authPassword && email===authEmail  ){                  
            //       navigate("/home");
            //       
            //       window.localStorage.setItem("auth", "true");
            // }else{
            //       navigate("/login");
            //       toast.error("usernme or password is incorrect")
            // }
                                                      
            }
            

            const {search} = useLocation();
            const redirectInUrl = new URLSearchParams(search).get('redirect');
            const redirect = redirectInUrl ? redirectInUrl : '/';
            
            const userInfo= localStorage.getItem("fullname")
  return (
      <div className='body'>
            <div className='login'>            
                  <div className="avatar">
                  <img src={profile} alt='profile' />
                  </div>
           
                  <h2>Login</h2>
                  <h2>Welcome back {userInfo?.length >9?userInfo.slice(0,10):userInfo}.... </h2>
                  <form className='login-form' action="">
                        <div className='textbox'>
                              <input type="email" onChange={e=>setUsername(e.target.value)}
                              name="" placeholder='Email' id="" />
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
                       
                              <button onClick={handleSubmit}> Login</button>
                        
                              
                        <a href="#" target="_blank" rel="noopener noreferrer">
                        Forgot Password
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Don't have an account yet</a>
                        <Link to={`/signup?redirect=${redirect}`}>SignUp</Link>
                  </form>
                  
            </div>
  </div>
  )
}

export default Login
