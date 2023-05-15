import React, { useState } from 'react'
import Header from '../conponent/Header'
import Footer from '../conponent/Footer'
import Spinner from '../conponent/Spinner';
import { toast } from 'react-toastify';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const AdminPageAddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] =useState(0);
    const [imageUrl, setImageUrl] =useState(null);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(null);
    const [brand, setBrand ] = useState("");
    const [productType,setProductType] = useState("");
    const [productSize, setProductSize] = useState("");
    const [productColor, setProductColor] = useState("");
    const [productWeight, setProductWeight] = useState(0);
    const [productStatus, setProductStatue] =useState("");
    const [productModelsNumber, setProductModelsNumber] = useState("");
    const [productSerialNumber, setProductSerialNumber] = useState("");
    const [loader, setLoader] = useState(false)
    const [field,setField]  =useState(false);

    const uploadImage = (e) =>{
      const seletedFile = e.target.files[0]
      // setLoader(true)
    }

  return (
    <div className='w-full'>
        <Header/>
        <div className='flex justify-center items-center mt-32 '>
            {
              field&&(
                <p className='text-red-500 mb-5 text-xl transition-all duration-75 ease-in'> Please Fill in all details</p>
              )
            }
            <div className='flex lg:flex-row justify-center lg:p-5 m-10 w-full p-3 items-center border-8 border-textColor rounded-md border-double'>
              <div className=' p-3 flex flex-0.7 w-full'>
                  <div className='flex justify-center p-3 w-full h-420 items-center flex-col border-2 border-dotted border-textColor'>
                      {loader&&(<Spinner/>)}
                      {/* {toast.warning("missing field")} */}
                      {!imageUrl?(
                        <label >
                            <div className='flex flex-col h-full justify-center items-center'>
                              <div className='flex flex-col items-center justify-center'>
                                  <p className='font-bold text-textColor text-6xl '>
                                      <AiOutlineCloudDownload />
                                  </p>
                                  <p className='text-lg font-bold  text-textColor'>Click to Upload Product Image</p>
                              </div>
                              <p className='mt-32 text-ellipsis text-lg text-gray-500'>Upload high-quality Product image</p>
                            </div>
                            <input
                             type="file" 
                            name="Upload-image"
                             onChange={uploadImage}
                             className='w-0 h-0'
                              />
                        </label>
                      ):(
                        <div className='relative h-full'>
                            <img 
                            src={imageUrl?.url} 
                            alt="product_image"
                            className='w-full h-full' 
                            />
                            <button
                            type='button'
                            className='absolute bottom-3 right-3 p-3 rounded-full bg-textColor text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                            onClick={()=>setImageUrl(null)}
                            >
                              <MdDelete/>
                            </button>
                        </div>
                      )
                    }                  
                  </div>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AdminPageAddProduct
