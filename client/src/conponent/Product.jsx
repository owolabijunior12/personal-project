import React from 'react'
import profile from "../asset/profile.jpg"
import { productData } from '../pages/DemoDatas'
import { useNavigate,Link, useLocation } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate

  // const {search} = useLocation();
  // const redirectInUrl = new URLSearchParams(search).get('redirect');
  // const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <div className='flex flex-col justify-center items-center'>
       <div className='text-4xl text-center w-full bg-primary text-textColor'>Accessories</div>
       {/* <Link to={`/product-details/${productData.indexOf}`}> */}
       <div  className='flex flex-wrap'>
                    
                    { productData?.map(({product_image,product_name,product_price,product_status})=>
                      <Link to={`/product-details/`}>
        
                          <div  className="relative flex w-30 min-w-160   cursor-pointer hover:shadow-xl  hover:bg-white bg-primary m-4 shadow-md rounded-lg flex-col items-center">
        
                            <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
                              <img
                                whileHover={{ scale: 1.05 }}
                                src={product_image}
                                alt="product_image"
                                className="w-full h-full rounded-lg object-cover"
                              />
                            </div>                   
                            <p className="text-base items-center text-textColor font-semibold my-2">
                                  
                                  <span className=" text-sm text-textColor my-1"> {product_name}</span>
                              </p>
                              <p className="text-base text-textColor items-center font-semibold ">
                                
                                <span className=" text-sm text-textColor my-1"> ${product_price} </span>
                              </p>            
                              <p className="text-base text-textColor items-center font-semibold ">                 
                                <span  className=" text-sm text-textColor my-1"> {product_status} </span>
                              </p>
        
                        </div> 
                         </Link>    
                          )}      
                        </div>
         
        {/* <div className='text-4xl text-center w-full bg-primary text-textColor'>Toiletries</div>
        <Link to={`/product-details/`}> */}
              <div  className='flex flex-wrap'>
                    
            { productData?.map(({product_image,product_name,product_price,product_status})=>
              <Link to={`/product-details/`}>

                  <div  className="relative flex w-30 min-w-160   cursor-pointer hover:shadow-xl  hover:bg-white bg-primary m-4 shadow-md rounded-lg flex-col items-center">

                    <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
                      <img
                        whileHover={{ scale: 1.05 }}
                        src={product_image}
                        alt="product_image"
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>                   
                    <p className="text-base items-center text-textColor font-semibold my-2">
                          
                          <span className=" text-sm text-textColor my-1"> {product_name}</span>
                      </p>
                      <p className="text-base text-textColor items-center font-semibold ">
                        
                        <span className=" text-sm text-textColor my-1"> ${product_price} </span>
                      </p>            
                      <p className="text-base text-textColor items-center font-semibold ">                 
                        <span  className=" text-sm text-textColor my-1"> {product_status} </span>
                      </p>

                </div> 
                 </Link>    
                  )}      
                </div>
      
          <div className='text-4xl text-center w-full bg-primary text-textColor' id='#electronic'>Electronic</div>
          <div  className='flex flex-wrap'>
                    
                    { productData?.map(({product_image,product_name,product_price,product_status})=>
                      <Link to={`/product-details/`}>
        
                          <div  className="relative flex w-30 min-w-160   cursor-pointer hover:shadow-xl  hover:bg-white bg-primary m-4 shadow-md rounded-lg flex-col items-center">
        
                            <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
                              <img
                                whileHover={{ scale: 1.05 }}
                                src={product_image}
                                alt="product_image"
                                className="w-full h-full rounded-lg object-cover"
                              />
                            </div>                   
                            <p className="text-base items-center text-textColor font-semibold my-2">
                                  
                                  <span className=" text-sm text-textColor my-1"> {product_name}</span>
                              </p>
                              <p className="text-base text-textColor items-center font-semibold ">
                                
                                <span className=" text-sm text-textColor my-1"> ${product_price} </span>
                              </p>            
                              <p className="text-base text-textColor items-center font-semibold ">                 
                                <span  className=" text-sm text-textColor my-1"> {product_status} </span>
                              </p>
        
                        </div> 
                         </Link>    
                          )}      
                        </div>
    </div>
   
  )
}

export default Product
