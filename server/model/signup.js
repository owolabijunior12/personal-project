const mongoose = require("mongoose");
const signupSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
        },
        username:{
            type: String,
            require: true,
        },
        email:{
            type: String,
            require: true,
        },
        password:{
            type: String,
            require: true,
        },
        role: {
            type: String,
            default:"member"
        },
        
    },
    {timestamps: true}
)
module.exports = mongoose.model("signup",signupSchema)