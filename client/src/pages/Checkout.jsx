import React from 'react'
import Footer from '../conponent/Footer'
import { useState } from 'react'
import { useStateValue } from '../Context/StateProvider'

const Checkout = () => {
  const [{carts},dispatch] =useStateValue()
  // const [check, setCheck] =  useState();

  return (
    <div className='h-full w-full'>
        {carts&&(
          <div>
            {carts.map(({id,name,imageURL,productPrice,productSize, productQty})=>{
              return(
                <div key={id}>
                  <h4>Comfirm before purchase</h4>
                  <ol>
                      <li>
                        <p> {name} </p>
                        <p>{productPrice}</p>
                        <p>{productQty}</p>
                        
                      </li>
                  </ol>                   
              </div>
              )
              
            })}
            <h1>hello im in here</h1>
          </div>
        )
      }
      <Footer/>
    </div>
  )
}
export default Checkout
