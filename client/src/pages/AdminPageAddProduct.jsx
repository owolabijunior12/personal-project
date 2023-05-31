/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Header from '../conponent/Header'
import Footer from '../conponent/Footer'
import Spinner from '../conponent/Spinner';
import profile from '../asset/profile.jpg'
import { toast } from 'react-toastify';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import {filters,filterByNewOld,filterProductStatus} from '../utils/styles'

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
    const [productStatus, setProductStatus] =useState("");
    const [productModelsNumber, setProductModelsNumber] = useState("");
    const [productSerialNumber, setProductSerialNumber] = useState("");
    const [loader, setLoader] = useState(true)
    const [field,setField]  =useState(false);

    const uploadImage = (e) =>{
      const seletedFile = e.target.files[0]
      // setLoader(true)
    }

  return (
    <div className='w-full'>
        <Header/>
        <div className="flex flex-col justify-center items-center mt-32 lg:h-4/5">
            {
              field&&(
                <p className="text-red-500 mb-5 text-xl transition-all duration-150 ease-in capitalize font-bold italic">Please add all fields.</p>
              )
            }
            <div className=" flex lg:flex-row flex-col justify-center items-center lg:p-5 p-3 lg:w-4/5  w-full">
            <div className="bg-secondaryColor p-3 flex flex-col flex-0.7 w-full">
            <div className=" flex justify-center items-center flex-col border-2 border-dotted border-textColor p-3 w-full h-420">
                      {loader&&(<Spinner/>)}                      
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
                <div className="flex text-textColor flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Product Name"
                        className="outline-none text-2xl  bg-bgColor font-bold border-b-2 border-textColor p-2"
                      />
                      {/* {user && ( */}
                        <div className="flex gap-2  mb-2 items-center bg-bgColor rounded-lg ">
                          <img
                            src={profile}
                            className="w-8 h-8 rounded-full"
                            alt="user-profile"
                          />
                          <p className="font-bold text-xl text-textColor">Iboytech</p>
                        </div>
                      {/* )} */}
                      <input
                        type="url"
                        vlaue={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Price"
                        className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
                      />

                      <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Product Description"
                        className="outline-none text-2xl font-bold  bg-bgColor border-b-2 border-textColor p-2"
                      />
                      <input
                        type="text"
                        vlaue={productColor}
                        onChange={(e) => setProductColor(e.target.value)}
                        placeholder="Product Color"
                        className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
                      />
                      <input
                        type="number"
                        vlaue={productSize}
                        onChange={(e) => setProductSize(e.target.value)}
                        placeholder="Product Size"
                        className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
                      />
                      <input
                        type="text"
                        vlaue={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="Brand"
                        className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
                      />
                      <input
                        type="text"
                        vlaue={productModelsNumber}
                        onChange={(e) => setProductModelsNumber(e.target.value)}
                        placeholder="Product Models Number"
                        className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
                      />
                      <input
                        type="text"
                        vlaue={productSerialNumber}
                        onChange={(e) => setProductSerialNumber(e.target.value)}
                        placeholder="Product Serial Number"
                        className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
                      />
                      <input
                        type="text"
                        vlaue={productWeight}
                        onChange={(e) => setProductWeight(e.target.value)}
                        placeholder="Product Weight"
                        className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
                      />
                       <div>              
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="outline-none w-full text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
              >
                {/* <option value="others" className="sm:text-bg text-textColor bg-bgColor">Select Category</option> */}
                {filters.map((item) => (
                  <option className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2 " key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          <div className="flex flex-col">
            <div>              
              <select
                onChange={(e) => {
                  setProductType(e.target.value);
                }}
                className="outline-none w-full text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
              >
                {/* <option value="others" className="sm:text-bg text-textColor bg-bgColor">Select Category</option> */}
                {filterByNewOld.map((item) => (
                  <option className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2 " key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>           
            </div>
          <div className="flex flex-col">
            <div>              
              <select
                onChange={(e) => {
                  setProductStatus(e.target.value);
                }}
                className="outline-none w-full text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2"
              >
                {/* <option value="others" className="sm:text-bg text-textColor bg-bgColor">Select Category</option> */}
                {filterProductStatus.map((item) => (
                  <option className="outline-none text-2xl font-bold  border-b-2 bg-bgColor border-textColor p-2 " key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex items-center gap-2 w-full justify-center text-xl my-2'>
            <input type="checkbox" className='h-9' name="" id="" />
            <span className='italic'>Do you agree our <a href="#" target="_blank" rel="noopener noreferrer">Term and Condition</a></span>
            </div>
            <div className="flex justify-end items-end mt-5">
              <button
                type="button"
                className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"
              >
                Save Product
              </button>
            </div>
            </div>
                  </div>    
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AdminPageAddProduct
