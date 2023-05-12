 // import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import Signup from './pages/Signup';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login"
import CheckOut from './pages/Checkout'
import ShoppingCart from './pages/ShoppingCart'
import HomeScreen from './conponent/HomeScreen'
function App() {
  const nagivate = useNavigate();
  const [auth,setAuth] = useState(false || window.localStorage.getItem("auth")===true);
  useEffect(()=>{    
    window.localStorage.setItem("auth", false);
    nagivate("./login");
  },[])

  return (
    <div className='min-w-[300px] h-auto  '>       
           <ToastContainer
            position="top-right"
            autoClose={9000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
        <div className='min-w-[300px] h-auto  flex justify-center items-center'>       
                  <Routes>          
                    <Route path='/login' element={<Login setAuth={auth}/>} />
                    <Route  path='/*'  element={<HomeScreen/>} />
                    <Route path="/shoppingCart" element={<ShoppingCart />} />
                      <Route path="/checkout"     element={<CheckOut/>} />
                      <Route path="/signup" element={<Signup />} />  
                  </Routes>
                  
            </div>                    
    </div>
  );
}

export default App;
