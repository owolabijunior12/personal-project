import { useState, useEffect } from "react";
import { productData } from "../pages/DemoDatas";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;


 export const isActiveStyles =
  "text-lg text-headingColor font-semibold hover:text-headingColor duration-100 transition-all ease-in-out";
export const isNotActiveStyles =
  "text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out";


  export const fullName= localStorage.getItem("fullname")
  export const username= localStorage.getItem("username")
  export const email= localStorage.getItem("email")
  // export const fullName= localStorage.getItem("fullnme")

  export const filters = [
    { id: 2, name: "ELECTRONIC", value: "electronic" },
    { id: 3, name: "GLOCIER", value: "gloceir" },
    { id: 4, name: " ACCESSORIES ", value: "accessories" },
    { id: 5, name: "CLOTHES & FOOTWEAR", value: "clothes & footwear" },
    { id: 6, name: "BOOKS", value: "books" },
    // { id: 7, name: "GOSPEL", value: "GOSPEL" },
    // { id: 8, name: "", value: "R&B" },
  ];
  
  export const filterByNewOld = [
    { id: 1, name: "New", value: "New" },
    { id: 2, name: "Fairly Used", value: "Fairly Used" },
  
  ];
  // export const statusChecker = () =>{
  //   productData[product_status]
  //   if (product_status) {

      
  //   } else {
      
  //   }
  // }
  
