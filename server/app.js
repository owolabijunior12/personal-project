const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config()
const app = express();
const cors = require("cors");


app.use(cors({origin:true}));
app.use(express.json());




app.get("/", (req, res)=>{
    return res.json("hello iboytech to the world");
})
//!route for price
const priceRoute =require("./route/price");
app.use("/api/price/",priceRoute);
//! route for product
const productRoute =require("./route/product");
app.use("/api/product/",productRoute);
//!route for the signup
const userRoute = require("./route/user");
app.use("api/user/",userRoute)

//!connecting to mongodb
mongoose.connect(process.env.DB_STRINGS,{useNewurlParser : true});
mongoose.connection
.once("open", ()=>console.log("connected to MongoDB DataBase is connected........"))
.on("error",(err)=>{console.log(`Not  connecting to mongoDB DataBase it might be the network issues to try check the internet connection ${err}`)})


app.listen(1609,()=>{
    console.log("Server started and listen to port 1609");
})
