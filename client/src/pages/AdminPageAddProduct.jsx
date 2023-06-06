/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Header from '../conponent/Header'
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { motion, progress } from "framer-motion";
import { BiCloudUpload } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { storage } from "../configuration/firebase.configuration";
import { useStateValue } from "../Context/StateProvider";
import Footer from '../conponent/Footer'
import Spinner from '../conponent/Spinner';
import profile from '../asset/profile.jpg'
import { toast } from 'react-toastify';
import { AiOutlineCloudDownload } from 'react-icons/ai';
// import { MdDelete } from 'react-icons/md';
import {filters,filterByNewOld,filterProductStatus} from '../utils/styles'
import { SaveProduct, getAllProduct } from "../api";
// import { set } from "mongoose";
import { actionType } from "../Context/reducer";



export const ImageUploader = ({
  setImageURL,
  setAlert,
  alertMsg,
  isLoading,
  isImage,
  setProgress,
}) => {
    const uploadImage = (e) => {
      isLoading(true);
      const imageFile = e.target.files[0];
      const storageRef = ref(
        storage,
        `${isImage ? "Images" : "Audio"}/${Date.now()}-${imageFile.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
    
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          isLoading(false);
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setImageURL(downloadUrl);
            setProgress(0);
            isLoading(false);
          });
        }
      );
    
    
  return (
    <label>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <p className="font-bold text-2xl">
            <BiCloudUpload />
          </p>
          <p className="text-lg">
            click to upload {isImage ? "image" : "audio"} 
          </p>
        </div>
      </div> 
      <input
        type="file"
        name="upload-image"
        accept={`${isImage ? "image/*" : "audio/*"}`}
        onChange={uploadImage}
        className="w-0 h-0"
      />
    </label>
  );
};
}
export const DisabledButton = () => {
  return (
    <button
      disabled
      type="button"
      className="text-textColor bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
    >
      <svg
        role="status"
        className="inline w-4 h-4 mr-3 text-textColor animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
      Loading...
    </button>
  );
}

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
    const [productQty, setProductQty] = useState("");
    const [productWeight, setProductWeight] = useState(0);
    const [productStatus, setProductStatus] =useState("");
    const [productModelsNumber, setProductModelsNumber] = useState("");
    const [productSerialNumber, setProductSerialNumber] = useState("");
    const [loader, setLoader] = useState(false)
    const [field,setField]  =useState(false);
    const [Progress, setProgress] = useState(0);
    const [isProduct ,setIsProduct] = useState(false);

    const [{allProduct},dispatch] =useStateValue();
    const saveProduct = () => {
      if (!name) {
        setField(true)        
        toast.warning("Required fields are missing")      
      } else {
        setIsProduct(true);
        const data = {
          name: name,
          product_price:price,
          imageURL:imageUrl,
          description:description,
          category:category,
          brand: brand,
          product_type:productType,
          product_size: productSize,
          product_color: productColor,
          product_weight: productWeight,
          product_quantity: productQty,
          product_status: productStatus,
          product_model_number:  productModelsNumber,
          product_serial_number:productSerialNumber
        };
        SaveProduct(data).then((res) => {
          getAllProduct().then((data) => {
            dispatch({
              type: actionType.SET_ALL_PRODUCT,              
              data:data.data
            });
          });
        });
        setIsProduct(false);
        setImageUrl(null);
        setName("");
        setDescription("");
        setPrice("");
        setProductQty("")
        setCategory(null)
        setProductColor("");
        setProductSize("");
        setBrand("");
        setProductModelsNumber("");
        setProductSerialNumber("");
        setProductStatus();
        setProductWeight("");
        setProductType("");
      }
    };

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
                      {isProduct&&(<ImageUploader Progress ={Progress}/>)}                      
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
                            <ImageUploader
                                setImageURL={setImageUrl}
                                // setAlert={setAlert}
                                // alertMsg={setAlertMsg}
                                isLoading={setIsProduct}
                                setProgress={setProgress}
                                 isImage={true}
                              />
                        </label>
                      ):(
                        <div className='relative h-full'>
                          <img
                               src={imageUrl}
                               alt="uploaded_image"
                                className="w-full h-full object-cover"
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
                onClick={saveProduct}
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
