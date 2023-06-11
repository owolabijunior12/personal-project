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
import { Signin, validateUser } from '../api';
import { actionType } from '../Context/reducer';
import {getAuth, GoogleAuthProvider, signInWithPopup}from 'firebase/auth'
import { useStateValue } from '../Context/StateProvider';
import { app } from '../configuration/firebase.configuration';
import { FcGoogle } from 'react-icons/fc';
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
                  if ( username  || password ) {
                        toast.error(`You need to fill up all your details`);
                    }

                          try {
                      const response = await Signin(username,password); 
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

           
                                                      
            }
            const firebaseAuth = getAuth(app)
            const provider =new GoogleAuthProvider();
            
            const [{user},  dispatch] = useStateValue();
            
            const loginWithGoogle = async ()=>{
                  await signInWithPopup(firebaseAuth, provider)
                  .then((userCred)=>{
                    if(userCred){
                      setAuth(true);
                      window.localStorage.setItem("auth", "true");
                      firebaseAuth.onAuthStateChanged((userCred)=>{
                        if(userCred){
            
                          userCred.getIdToken().then((token)=>{
                            console.log(token)
                            
                              validateUser({token}.then((data)=>{
                                  dispatch({
                                    type : actionType.SET_USER,
                                    user: data
                                  })
                              }))
            
                          })
                          console.log(userCred);
                          navigate('/',{replace:true})
                        }else{
                          setAuth(false);
                          dispatch({
                            type : actionType.SET_USER,
                            user: null
                          })
                          navigate("/")
                        }
                      })
                    }
                      
                  })
            
                  console.log("iboytech got it");
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
                        
                              
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                        Forgot Password
                        </Link >
                          <div className='flex gap-1'>
                                    <Link href="http://" target="_blank" rel="noopener noreferrer" name="newUser">Don't have an account yet</Link>
                                    <label htmlFor="newUser" className='underline font-bold text-2xl   text-white'><Link to={`/signup?redirect=${redirect}`}>SignUp</Link></label>
                        </div>    
                  </form>
                  
                  <div onClick={loginWithGoogle} className=' flex m-5 items-center justify-center gap-2 p-2 rounded-md bg-red-500 cursor-pointer hover:bg-red-600 duration-100 ease-in-out transition-all' >
                      <FcGoogle className='text-xl '/> Sigin with Google
                  </div> 
            </div>
  </div>
  )
}

export default Login
