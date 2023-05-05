const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config()
const app = express();
// const cors = require("cors");


// app.use(cors({origin:true}));
app.use(express.json());




app.get("/", (req, res)=>{
    return res.json("hello iboytech to the world");
})

const priceRoute =require("./route/price");
app.use("/api/price/",priceRoute);

mongoose.connect(process.env.DB_STRINGS,{useNewurlParser : true});



mongoose.connection
.once("open", ()=>console.log("connected to MongoDB DataBase is connected........"))
.on("error",(err)=>{console.log(`Not  connecting to mongoDB ${err}`)})
app.listen(1609,()=>{
    console.log("Server started and listen to port 1609");
})
