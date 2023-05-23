const express =require("express");
const route =express.Router();
const AddToCart =require("../model/addToCart");
const router = require("./product");

router.post("/save", async (res,req) =>{
    try {
        const  newAddToCart = await  AddToCart.create({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_Image:req.body.product_Image,
            product_size: req.body.product_size,
            product_qty: req.body.product_qty

        });
        res.status(200).send({success:true, AddToCart:newAddToCart})
    } catch (error) {
        console.log(error);
        res.status(400).send({error:"failed to save to cart"})
    }
})
router.get("/getOne/:id", async (req, res, next) => {
    try {
      const addToCart = await AddToCart.findById(req.params.id);
      if (!addToCart) {
        return res.status(404).send({ error: "Product not found" });
      }
      res.status(200).json(addToCart);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  router.put("/update/id",async(req,res,next)=>{
      try {
          const {product_name,product_price,product_Image,product_size,product_qty}=res.body;
          const addToCart  =await addToCart.findByIdAndUpdate(res.params.id);
          res.status(200).send({success:true,addToCart});
      } catch (error) {
          console.log(error);
          next(error);
      }
  })
router.delete("/delete/:id",async(res,req)=>{
    try {
        const addToCart =await AddToCart.deleteOne({id:req.params.id});
        if(!addToCart.deletedCount){
            return res.status(404).send({success:false,errror:"add to cart not found"});            
        }
        res.status(200).send({success:true,message:"add to cart is deleted successfilly" });
    } catch (error) {
        console.log(error);
        next(error)
    }
})
router.get("/getAll",async (res,req)=>{
    try {
        const addToCart = await AddToCart.find().sort({createdAt:1});
        res.status(200).json({success:true, addToCart});
    } catch (error) {
        console.log(error);
        next(error)
    }
})