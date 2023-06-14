const express =require("express");
const route =express.Router();
const AddToCart =require("../model/addToCart");
// const router = require("./product");
route.post("/save", async (req, res) => {
    try {
      const newAddToCart = await AddToCart.create({
        name: req.body.name,
        product_price: req.body.product_price,
        imageURL: req.body.imageURL,
        product_size: req.body.product_size,
        product_qty: req.body.product_qty
      });
      res.status(200).send({ success: true, AddToCart: newAddToCart });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "Failed to save to cart" });
    }
  });
  
route.get("/getOne/:id", async (req, res, next) => {
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
  route.put("/update/:id", async (req, res, next) => {
    try {
      const { name, product_price, imageURL, product_size, product_qty } = req.body;
      const addToCart = await AddToCart.findByIdAndUpdate(req.params.id, {
        name,
        product_price,
        imageURL,
        product_size,
        product_qty
      }, { new: true });
      res.status(200).json({ success: true, addToCart });
    } catch (error) {
      console.log(error);
      next(error);
    } 
  });
  
  route.delete("/delete/:id", async (req, res, next) => {
    try {
      const addToCart = await AddToCart.deleteOne({ _id: req.params.id });
      if (addToCart.deletedCount === 0) {
        return res.status(404).json({ success: false, error: "Add to cart not found" });
      }
      res.status(200).json({ success: true, message: "Add to cart is deleted successfully" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }); 
  
route.get("/getAll", async (req, res, next) => {
  try {
    const addToCart = await AddToCart.find().sort({ createdAt: 1 });
    res.status(200).json({ success: true, addToCart });
  } catch (error) {
    console.log(error);
    next(error);
  }
});


module.exports= route;