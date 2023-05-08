 // import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import HomeScreen from './conponent/HomeScreen/HomeScreen'
import Signup from './conponent/Login/Signup'
import Login from './conponent/Login/Login';
import Header from './conponent/Header'
function App() {


  return (
    <div className='min-w-[680px] h-auto bg-primary flex justify-center items-center'>
      <Signup/>
    </div>
  );
}

export default App;
