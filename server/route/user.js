const express = require("express");
const router = express.Router();
const User = require("../model/signup");

router.post("/save", async (req,res)=>{
    try {
        const newUser =await User.create({
            name:res.body.name,
            username:res.body.username,
            email:res.body.email,
            password:res.body.password,
            role:res.body.role
        });
        res.status(200).json({success:true,user:newUser});
    } catch (error) {
        console.log(error);
        res.status(400).json({error:"fail to save new user"});
    }
})
router.get("/logout", (res,req,next)=>{
    res.clearCookie("token");
    res.status(200).json({success:true, message:"logout successfully"})
})
router.get("/singleUser",async (res,req,next)=>{
     try {
        const user = await User.findById(req.params.id);
        res.status(200).json({sucess: true,  user })        
    } catch (error) {
        next(error)        
    }
})
router.post("/signin",async(res,req,next)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){       
            return  next(new ErrorResponse('E-mail and password are required', 400))
        }
        // check user e-mail
        const user = await User.findOne({email});
        if(!user){           
            return  next(new ErrorResponse('Invalid credentials', 400))
        }       
        const isMatched = await user.comparePassword(password);
        if (!isMatched){
         
          return  next(new ErrorResponse('Invalid credentials', 400))
        }    
    }
    catch(error){
        console.log(error);       
        next(new ErrorResponse('Cannot log in, check your credentials', 400))
    }
})
module.exports = router;