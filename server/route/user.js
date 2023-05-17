const express = require("express");
const router = express.Router();
 // const jwt = require("jsonwebtoken");
 const User = require("../model/signup")

router.post("/save", async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json({success: true, user: newUser});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: "Failed to save new user"});
    }
});

router.get("/logout", (req, res, next) => {cdcdcd 
    res.clearCookie("token");
    res.status(200).json({success: true, message: "Logout successful"});
});

router.get('/getUser', async (req, res) => {
    try {
        const options = {
            sort: { createdAt: 1 }
        };
        const users = await User.find({}, null, options);
        if (users.length > 0) {
            res.status(200).send({ success: true, users });
        } else {
            res.status(200).send({ success: true, msg: 'No Data Found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: 'Internal Server Error' });
    }
});

router.get("/singleUser/:id", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({success: true, user});
    } catch (error) {
        next(error);
    }
});

router.post("/signin", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Email and password are required");
      }
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Invalid credentials");
      }
      const isMatched = await user.comparePassword(password);
      if (!isMatched) {
        throw new Error("Invalid credentials");
      }
      const token = await createToken(user);
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ success: true, user: user._id });
    } catch (error) {
      console.error(error); 
      next(new Error("Cannot log in, check your credentials"));
    }
  });
  

module.exports = router;

// async function createToken(user) {
//     const payload = {userId: user._id};
//     const secret = process.env.JWT_SECRET || "mysecret";
//     const options = {expiresIn: "1d"};
//     return jwt.sign(payload, secret, options);
// }
