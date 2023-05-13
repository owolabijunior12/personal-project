const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const app = express();
const cors = require("cors");

app.use(cors({origin:true}));
app.use(express.json());

app.get("/", (req, res)=>{
    return res.json("hello iboytech to the world");
})

const priceRoute = require("./route/price");
app.use("/api/price/",priceRoute);

const productRoute = require("./route/product");
app.use("/api/product/",productRoute);

const userRoute = require("./route/user");
app.use("/api/user/",userRoute);

try {
    mongoose.connect(process.env.DB_STRINGS, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB database...");
} catch (error) {
    console.error(error);
}

app.listen(1609,()=>{
    console.log("Server started and listening on port 1609");
})
