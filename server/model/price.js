const mongoose = require("mongoose");
const priceSchema = mongoose.Schema(
    {
        Product:true,
        price:Number
    }
)
module.exports= mongoose.model("price",priceSchema);