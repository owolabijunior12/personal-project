const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config()
const app = express();

app.get("/", (req, res)=>{
    return res.json("hello iboytech to the world");
})

mongoose.connect(process.env.DB_STRINGS,{useNewurlParser : true});



mongoose.connection
.once("open", ()=>console.log("connected to MongoDB DataBase is connected........"))
.on("error",(err)=>{console.log(`Not  connecting to mongoDB ${err}`)})
app.listen(4000,()=>{
    console.log("Server started and listen to port 4000");
})
