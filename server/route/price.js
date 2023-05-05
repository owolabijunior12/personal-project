const express = require("express");
const router = express.Router();
const Price = require("../model/price")

router.post("/save",async(req,res)=>{
    try {
        const newPrice = await Price.create({
           name: req.body.name,
           product_price: req.body.product_price,
        });
        res.status(200).send({success:true,price:newPrice});
    } catch (error) {
        console.log(error);
        res.status(400).send({errror:"failure to save price"})
    }
})

router.get("/getOne/:id", async (req, res, next) => {
  try {
    const price = await Price.findById(req.params.id);
    if (!price) {
      return res.status(404).send({ error: "Price not found" });
    }
    res.status(200).json(price);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/getAll", async (req, res, next) => {
  try {
    const price = await Price.find().sort({ createdAt: 1 });
    res.status(200).json({ success: true, price});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.put("/update/:id", async (req, res, next) => {
  try {
    const { name, product_price } = req.body;
    const price = await Price.findByIdAndUpdate(req.params.id, { name, product_price });
    res.status(200).send({ success: true, price});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const price = await Price.deleteOne({ _id: req.params.id });
    if (!price.deletedCount) {
      return res.status(404).send({ success: false, error: "Price not found" });
    }
    res.status(200).send({ success: true, message: "Price deleted successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
});



module.exports= router
