import axios from "axios";

const baseURL = "http://localhost:1609/";
    console.log(`${baseURL}api/artist/getAll`);


export const Signin = async () => {
  try {
    const res = await axios.get(`${baseURL}api/user/signin`);
    return res.data;

  } catch (error) {
    return null;
  }
};
export const Signup = async () => {
  try {
    const res = await axios.post(`${baseURL}api/user/save`);
    return res.data;

  } catch (error) {
    return null;
  }
};
export const logOut = async () => {
  try {
    const res = await axios.get(`${baseURL}api/user/logout`);
    return res.data;

  } catch (error) {
    return null;
  }
};
export const SaveProduct = async () => {
    try {
      const res = await axios.post(`${baseURL}api/product/save`);
      return res.data;
  
    } catch (error) {
      return null;
    }
  };
export const updateProduct = async () => {
    try {
      const res = await axios.put(`${baseURL}api/product/getOne/:id`);
      return res.data;
  
    } catch (error) {
      return null;
    }
  };
export const getAllProduct = async () => {
    try {
      const res = await axios.get(`${baseURL}api/product/getAll`);
      return res.data;
  
    } catch (error) {
      return null;
    }
  };
export const deleteProduct = async () => {
    try {
      const res = await axios.get(`${baseURL}api/product/delete/:idx`);
      return res.data;
  
    } catch (error) {
      return null;
    }
  };