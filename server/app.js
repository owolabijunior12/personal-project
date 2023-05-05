const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    return res.json("hello iboytech to the world");
})

app.listen(4000,()=>{
    console.log("listening on port 4000");
})