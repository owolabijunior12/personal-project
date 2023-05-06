// import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import HomeScreen from './conponent/HomeScreen/HomeScreen'
import Signup from './conponent/Login/Signup'
import Login from './conponent/Login/Login'
function App() {
 

  return (
    <div className='h-screen bg-primary flex justify-center items-center'>       
      <Login/>
      {/* <HomeScreen/>  */}
      {/* <Signup/> */}
    
</div>
  );
}

export default App;
