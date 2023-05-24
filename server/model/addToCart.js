const mongoose= require("mongoose");
const addToCartSchema = mongoose.Schema(
    {
        product_name:{
            type:String,
            require:true
        },
        product_price:{
            type:Number,
            require:true
        },
        product_image:{
            type:String,
            require:true
        },
        product_size:{
            type:String,
            require:true
        },
        product_qty:{
            type:Number,
            require:true
        }        
    },
    {timestamps:true}
);
module.exports = mongoose.model("addToCart", addToCartSchema);