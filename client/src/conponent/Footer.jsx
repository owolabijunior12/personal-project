import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black h-auto py-3 text-textColor flex flex-col justify-center items-center text-sm'>
        <div className='  text-center text-2xl'>
                © 2023 Copyright: <a href="#" target="_blank" rel="noopener noreferrer">Iboytech Store</a>                
                <p>Welcome to our Iboytech store that specializes in selling used products! Our platform is designed to provide a convenient and affordable way for customers to buy and sell pre-owned items.</p>
        </div>
        <ul>
             <li>About us</li>
             <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Footer
