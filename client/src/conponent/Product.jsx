import React from 'react'
import profile from "../asset/profile.jpg"

const Product = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
       <div className='text-4xl text-center w-full bg-black text-textColor'>Accessories</div>
         <div className='flex flex-wrap'>
            
    {[
             {
                id: 1,
               product_name: "Nike Air Force1",
               product_price: 99.43,
               product_image: profile,
               product_status:"Availaible"
             },
             {
                id: 2,
               product_name: "Nike Air Force 2",
               product_price: 29.65,
               product_image: profile,
               product_status:"out of stock"
             },
             {
                id:3,
               product_name: "Nike Air Force 7",
               product_price: 929.99,
               product_image: profile,
               product_status:"out of stock"
             },
             {id:4,
               product_name: "Nike Air Force4",
               product_price: 300.54,
               product_image: profile,
               product_status:"Availaible"
             },
             {
                id:5,
               product_name: "Nike Air Force4",
               product_price: 300.54,
               product_image: profile,
               product_status:"Availaible"
             },
             {
                id:6,
               product_name: "Nike Air Force4",
               product_price: 300.54,
               product_image: profile,
               product_status:"Availaible"
             }

           ].map((product)=>
       
           <div className="relative flex w-30 min-w-160   cursor-pointer hover:shadow-xl  hover:bg-white bg-black m-4 shadow-md rounded-lg flex-col items-center">
             <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
               <img
                 whileHover={{ scale: 1.05 }}
                 src={product.product_image}
                 alt="product_image"
                 className="w-full h-full rounded-lg object-cover"
               />
             </div>                   
             <p className="text-base items-center text-textColor font-semibold my-2">
                   
                   <span className=" text-sm text-textColor my-1"> {product.product_name}</span>
               </p>
               <p className="text-base text-textColor items-center font-semibold ">
                 
                 <span className=" text-sm text-textColor my-1"> ${product.product_price} </span>
               </p>            
               <p className="text-base text-textColor items-center font-semibold ">                 
                 <span className=" text-sm text-textColor my-1"> {product.product_status} </span>
               </p>

         </div>
     
           )}      
         </div>
        <div className='text-4xl text-center w-full bg-black text-textColor'>Toiletries</div>
        <div className='flex flex-wrap'>
                
                {[
                        {
                            id: 1,
                          product_name: "Nike Air Force1",
                          product_price: 99.43,
                          product_image: profile,
                          product_status:"Availaible"
                        },
                        {
                            id: 2,
                          product_name: "Nike Air Force 2",
                          product_price: 29.65,
                          product_image: profile,
                          product_status:"out of stock"
                        },
                        {
                            id:3,
                          product_name: "Nike Air Force 7",
                          product_price: 929.99,
                          product_image: profile,
                          product_status:"out of stock"
                        },
                        {id:4,
                          product_name: "Nike Air Force4",
                          product_price: 300.54,
                          product_image: profile,
                          product_status:"Availaible"
                        },
                        {
                            id:5,
                          product_name: "Nike Air Force4",
                          product_price: 300.54,
                          product_image: profile,
                          product_status:"Availaible"
                        },
                        {
                            id:6,
                          product_name: "Nike Air Force4",
                          product_price: 300.54,
                          product_image: profile,
                          product_status:"Availaible"
                        }
            
                      ].map((product)=>
                  
                    <div className="relative flex w-30 min-w-160 md:justify-center md:items-center  cursor-pointer hover:shadow-xl  hover:bg-green-400 bg-black m-4 shadow-md rounded-lg flex-col items-center">
                        <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
                          <img
                            whileHover={{ scale: 1.05 }}
                            src={product.product_image}
                            alt="product_image"
                            className="w-full h-full rounded-lg object-cover"
                          />
                        </div>                   
                        <p className="text-base items-center text-textColor font-semibold my-2">
                              
                              <span className=" text-sm text-textColor my-1"> {product.product_name}</span>
                          </p>
                          <p className="text-base text-textColor items-center font-semibold ">
                             
                            <span className=" text-sm text-textColor my-1"> ${product.product_price} </span>
                          </p>            
                          <p className="text-base text-textColor items-center font-semibold ">
                            
                            <span className=" text-sm text-textColor my-1"> {product.product_status} </span>
                          </p>
            
                    </div>
                
                      )}      
          </div>
          <div className='text-4xl text-center w-full bg-black text-textColor' id='#electronic'>Electronic</div>
          <div className='flex flex-wrap'>
                
                {[
                        {
                            id: 1,
                          product_name: "Nike Air Force1",
                          product_price: 99.43,
                          product_image: profile,
                          product_status:"Availaible"
                        },
                        {
                            id: 2,
                          product_name: "Nike Air Force 2",
                          product_price: 29.65,
                          product_image: profile,
                          product_status:"out of stock"
                        },
                        {
                            id:3,
                          product_name: "Nike Air Force 7",
                          product_price: 929.99,
                          product_image: profile,
                          product_status:"out of stock"
                        },
                        {id:4,
                          product_name: "Nike Air Force4",
                          product_price: 300.54,
                          product_image: profile,
                          product_status:"Availaible"
                        },
                        {
                            id:5,
                          product_name: "Nike Air Force4",
                          product_price: 300.54,
                          product_image: profile,
                          product_status:"Availaible"
                        },
                        {
                            id:6,
                          product_name: "Nike Air Force4",
                          product_price: 300.54,
                          product_image: profile,
                          product_status:"Availaible"
                        },
                        {
                            id:6,
                          product_name: "Nike Air Force4",
                          product_price: 300.54,
                          product_image: profile,
                          product_status:"Availaible"
                        },                                                          
                      ].map((product)=>
                  
                    <div className="relative flex w-30 min-w-160   cursor-pointer hover:shadow-xl  hover:bg-green-400 bg-black m-4 shadow-md rounded-lg flex-col items-center">
                        <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
                          <img
                            whileHover={{ scale: 1.05 }}
                            src={product.product_image}
                            alt="product_image"
                            className="w-full h-full rounded-lg object-cover"
                          />
                        </div>                   
                        <p className="text-base items-center text-textColor font-semibold my-2">
                              
                              <span className=" text-sm text-textColor my-1"> {product.product_name}</span>
                          </p>
                          <p className="text-base text-textColor items-center font-semibold ">
                          
                            <span className=" text-sm text-textColor my-1"> ${product.product_price} </span>
                          </p>            
                          <p className="text-base text-textColor items-center font-semibold ">
                           
                            <span className=" text-sm text-textColor my-1"> {product.product_status} </span>
                          </p>
            
                    </div>
                
                      )}      
          </div>
    </div>
   
  )
}

export default Product
