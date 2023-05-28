 // import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import Signup from './pages/Signup';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login"
import CheckOut from './pages/Checkout'
import ShoppingCart from './pages/ShoppingCart'
import ProductDetails  from './pages/ProductDetails'
import HomeScreen from './conponent/HomeScreen'
import UserProfile from './pages/UserProfile';
import AdminPage from './pages/AdminPage';
import AdminPageAddProduct from './pages/AdminPageAddProduct';
function App() {
  const nagivate = useNavigate();
  const [auth,setAuth] = useState(false || window.localStorage.getItem("auth")===true);
  useEffect(()=>{    
    const authLogin =localStorage.getItem("auth")
    if(authLogin === false){
       nagivate("./login");
    }else{
      nagivate("/");
    }
   
  },[])

  return (
    <div className='min-w-[300px] h-auto  '>       
           <ToastContainer
            position="top-right"
            autoClose={1000}
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
                  <Route path='/Login' element={<Login setAuth={setAuth}/>} />
                    <Route  path='/*'  element={<HomeScreen/>} />
                    <Route path="/shoppingCart" element={<ShoppingCart />} />
                      <Route path="/checkout"     element={<CheckOut/>} />
                      <Route path="/signup" element={<Signup />} />  
                      <Route path="/admin-page" element={<AdminPage />} />  
                      <Route path="/product-details" element={<ProductDetails  />} />  
                      <Route path="/adminpageadder" element={<AdminPageAddProduct  />} />  
                      <Route path="/user-profile" element={<UserProfile  />} />  
                  </Routes>
                  
            </div>                    
    </div>
  );
}

export default App;
