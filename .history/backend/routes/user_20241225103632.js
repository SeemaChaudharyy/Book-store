const router= require("express").Router();
const user= require("../models/user");

router.post("/sign-up", async(req,res)=> {
    try{
        const { username, email, password, address}= req.body;

        if(username.length< 4){
            return res.
            status(400)
            .json({message: "Username length should be greater than 4"});
        }
        const existingUsername= await user.find({username: username});
        if(existingUsername){
            return res.status(400).json({message: "Username already exists"});
        }
        const existingemail= await user.find({username: username});
        if(existingUsername){
            return res.status(400).json({message: "Username already exists"});
        }

    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports= router;