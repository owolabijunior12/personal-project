const  mongoose = require('mongoose');
const priceSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
       product_price: {
            type: Number,
            require: true,
        },
        
    },
    {timestamps:true}
);

module.exports =mongoose.model("price", priceSchema);
