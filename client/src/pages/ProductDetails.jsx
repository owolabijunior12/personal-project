import React from 'react'
import Header from '../conponent/Header'
import Footer from '../conponent/Footer'
import { image, productData } from './DemoDatas'
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
const ProductDetails = () => {
 
  return (
    <div className='w-full'>
      <Header/>
    <div  className='flex flex-col mt-28 w-full justify-center items-center'>
        <div className=' w-350 pb-2'>              
                <img src={image} alt="" className=' w-full rounded-lg ' />              
        </div>
        <div className='flex mb-4'>
              <div className='round rounded-full m-2 p-2 bg-textColor'></div>
              <div className='round rounded-full m-2 p-2 bg-white'></div>
              <div className='round rounded-full m-2 p-2 bg-white'></div>
              <div className='round rounded-full m-2 p-2 bg-white'></div>
        </div>
      
        <div  className='relative flex  min-w-160 p-6   cursor-pointer text-textColor   bg-primary m-4  shadow-md rounded-lg flex-col'>
            <div className='bg-red-500 w-24 rounded-sm text-center text-white   m-1'>Free Delivery</div>
            <h1 className='flex justify-start text-4xl mr-52 text-textColor font-extrabold mb-4'>Nike Air Force 1</h1>
            <p className='text-2xl mb-2'>$99.43 <span className=' text-red-500 text-xs'>save up 20%</span></p>
            <div className='flex text-center' >
              <AiFillStar  className='text-sm'/>
              <AiFillStar  className='text-sm'/>
              <AiFillStar  className='text-sm'/>
              <AiFillStar  className='text-sm'/>
              <AiOutlineStar className='text-sm'/>                
            </div>
            <progress max={100} className='rounded-lg bg-red-500'>20</progress>
            <p className='flex mr-5'> <div className='bg-green-600 rounded-full mt-1 w-0 h-0 p-2 m-2 '></div> <p>Status: Available</p></p>
            <div className=' mb-4'>
           <button type='button' className=' bg-red-500 text-white m-2 p-2 rounded-xl'>Buy Now</button>             
           <button type='button' className=' bg-red-500 text-white m-2 p-2 rounded-xl'>Add To Cart</button>             
        </div>
        <div className='mb-4'>
          <hr />
            <h1 className='pl-4'>Descriptions</h1>
           
            <hr />
            <p>
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione dolorem facilis
               eius nostrum doloribus. Non corrupti ducimus sed nostrum sint sapiente porro eligendi
                maiores molestiae aspernatur sit voluptate dolore laboriosam, aut est perspiciatis veritatis 
                officia distinctio minima omnis nobis? Porro odio nostrum iure accusamus aliquid facere 
                consequuntur sequi nobis, reprehenderit ea. Explicabo, quisquam consectetur ipsam aut esse
                quam quasi aliquam maxime ipsum distinctio vero reiciendis voluptates consequatur nisi
                 voluptatem necessitatibus nam obcaecati consequuntur praesentium dolores similique molestiae
                  aspernatur, hic alias. At praesentium atque mollitia aliquid, ea dolorum voluptatem ut non quia
                   provident exercitationem sit voluptates, et dolore vitae nesciunt molestiae voluptate libero id? 
                   Necessitatibus corrupti exercitationem eius consectetur natus praesentium
              , corporis ex officiis cupiditate. Debitis eligendi delectus dolorum rerum.
            </p>
        </div>
        <div className='mb-4'>
             <hr />
            <h1 className='pl-4'>Product Conditon</h1>
            <hr />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae consequatur et quo
                magnam asperiores possimus 
                beatae, officiis quisquam velit eos accusantium corporis laborum! Impedit hic iure ea dicta ex.
            </p>
        </div>
        <div className='mb-4'>
             <hr />
            <h1 className='pl-4'>Product Specification</h1>
            <hr  className='mb-3'/>        
          <tbody className=' my-4 '>
            <th className='border p-4' >Name:</th>
            <td className='border p-4'>Nike Air Force</td>       
            <tr>
               <th className='border p-4' >Serial-Number:</th>
               <td className='border p-4'>M93468V3983232</td> 
              </tr>   
            <tr>
               <th className='border p-4' >Model-Number:</th>
               <td className='border p-4'>0942022me32</td> 
              </tr>   
            <tr>
               <th className='border p-4' >Size:</th>
               <td className='border p-4'>41-45</td> 
              </tr>   
            <tr>
               <th className='border p-4' >New / Used:</th>
               <td className='border p-4'>New</td> 
              </tr>   
                    
          </tbody>         
            <p>
            </p>
        </div>
        <div className='mb-4'>
             <hr />
            <h1 className='pl-4'>Delivery Details</h1>
            <hr />
            <p>
              <p className='text-2xl font-bold'> Fast Delivery:</p>
                <span className='text font-semibold text-lg'>New product </span> will take 4-5 working days to be delievered Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Nobis quibusdam et, quia, eius atque, dolorum voluptas repellendus quod necessitatibus
                  cumque nisi iure provident mollitia rerum impedit magnam maiores. Eveniet, pariatur corrupti,
                   sapiente sequi repellendus quia impedit minus debitis veritatis ad earum deleniti ex quidem dicta in
                    magni fuga cumque tenetur maxime possimus repellat error officiis? Blanditiis atque consequuntur
                     ipsa vel quisquam consectetur laborum possimus. Ipsam cupiditate quam perspiciatis, adipisci vel
                      rem beatae cum enim modi incidunt magnam fugiat porro alias iste quas soluta corrupti ducimus 
                      delectus! Iusto culpa ab blanditiis natus impedit eveniet nesciunt pariatur. Libero odio cumque 
                      assumenda reiciendis iste, cum non aut veniam doloremque exercitationem quo nobis itaque eligendi
                       veritatis iusto consequuntur illum, voluptatum hic dolore natus dignissimos vero repudiandae amet! 
                       Non labore minus at beatae dolore temporibus ratione harum expedita quidem, cum assumenda,
                        molestiae necessitatibus! Sed, velit? <br /><br />
                <span className='text font-semibold text-lg'>Used product </span> will take {Date()} working days to be delievered Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Nobis quibusdam et, quia, eius atque, dolorum voluptas repellendus quod necessitatibus
                  cumque nisi iure provident mollitia rerum impedit magnam maiores. Eveniet, pariatur corrupti,
                   sapiente sequi repellendus quia impedit minus debitis veritatis ad earum deleniti ex quidem dicta in
                    magni fuga cumque tenetur maxime possimus repellat error officiis? Blanditiis atque consequuntur
                     ipsa vel quisquam consectetur laborum possimus. Ipsam cupiditate quam perspiciatis, adipisci vel
                      rem beatae cum enim modi incidunt magnam fugiat porro alias iste quas soluta corrupti ducimus 
                      delectus! Iusto culpa ab blanditiis natus impedit eveniet nesciunt pariatur. Libero odio cumque 
                      assumenda reiciendis iste, cum non aut veniam doloremque exercitationem quo nobis itaque eligendi
                       veritatis iusto consequuntur illum, voluptatum hic dolore natus dignissimos vero repudiandae amet! 
                       Non labore minus at beatae dolore temporibus ratione harum expedita quidem, cum assumenda,
                        molestiae necessitatibus! Sed, velit?
            </p>
        </div>
        </div>
        
       
    </div>
    
    
    <div className='relative flex  min-w-160   cursor-pointer    bg-primary m-4  shadow-md rounded-lg flex-col'>
          <div className='flex flex-row   px-4 justify-between'>
              <p className='text-textColor text-2xl font-extrabold '>Saved Items ( 2 )</p>
              <p className='text-2xl text-white underline font-extrabold'>See All</p>
          </div>
          <div className='flex flex-wrap'>
            
            {[
                   
                     {
                        id:5,
                       product_name: "Nike Air Force4",
                       product_price: 300.54,
                       product_image: image,
                       product_status:"Availaible"
                     },
                     {
                        id:6,
                       product_name: "Nike Air Force4",
                       product_price: 300.54,
                       product_image: image,
                       product_status:"Availaible"
                     }
        
                   ].map((product)=>
               
                   <div className="relative flex w-30 min-w-160   cursor-pointer hover:shadow-xl  hover:bg-white bg-primary m-4 shadow-md rounded-lg flex-col items-center">
                     <div className=" min-w-[120px] w-32 h-30 min-h-[120px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
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
                 </div>
             
                   )}      
                 </div>
        </div>
        <div className='relative flex  min-w-160   cursor-pointer    bg-primary m-4   rounded-lg flex-col'>
          <div className='flex flex-row   px-1 justify-between'>
              <p className='text-textColor text-2xl font-extrabold '>Top Sales</p>              
          </div>
          <div className='flex flex-wrap'>
            
            {[
                   
                     {
                        id:5,
                       product_name: "Nike Air Force4",
                       product_price: 300.54,
                       product_image: image,
                       product_status:"Availaible"
                     },
                     {
                        id:6,
                       product_name: "Nike Air Force4",
                       product_price: 300.54,
                       product_image: image,
                       product_status:"Availaible"
                     }
        
                   ].map((product)=>
               
                   <div className="relative flex w-30 min-w-160   cursor-pointer   hover:bg-white bg-primary m-4 shadow-md rounded-lg flex-col items-center">
                     <div className=" min-w-[120px] w-32 h-30 min-h-[120px] rounded-lg drop-shadow-lg relative overflow-hidden items-center">
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
                 </div>
             
                   )}      
                 </div>
             </div>
      <Footer/>        
    </div>
  )
}

export default ProductDetails
