const express = require("express");
const route = express.Router();
const Product = require("../model/product");

route.post("/save", async (req, res) => {
    try {
      const newProduct = await Product.create({
        name: req.body.name,
        product_price: req.body.product_price,
        imageURL: req.body.imageURL,
        description: req.body.description,
        category: req.body.category,
        brand: req.body.brand,
        product_type: req.body.product_type,
        product_size: req.body.product_size,
        product_color: req.body.product_color,
        product_weight: req.body.product_weight,
        product_quantity: req.body.product_quantity,
        product_status: req.body.product_status,
        product_model_number: req.body. product_model_number,
        product_serial_number:req.body.product_serial_number
      });
      res.status(200).send({ success: true, product: newProduct });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "failure to save product" });
    }
  });
  

route.get("/getOne/:id", async (req, res, next) => {
  try {
    const product = await Product .findById(req.params.id);
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
route.put("/update/id",async(req,res,next)=>{
    try {
        const {name,product_price,imageURL,description,quantity,catagorty}=res.body;
        const product =await product.findByIdAndUpdate(res.params.id);
        res.status(200).send({success:true,product});
    } catch (error) {
        console.log(error);
        next(error);
    }
})

route.delete("/delete/:id",async(res,req)=>{
    try {
        const product =await Product.deleteOne({id:req.params.id});
        if(!product.deletedCount){
            return res.status(404).send({success:false,errror:"product not found"});            
        }
        res.status(200).send({success:true,message:"Product is deleted successfilly" });
    } catch (error) {
        console.log(error);
        next(error)
    }
})

route.get("/getAll", async (req, res, next) => {
  try {
    const product = await Product.find().sort({ createdAt: 1 });
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log(error);
    next(error);
  }
});





module.exports= route
