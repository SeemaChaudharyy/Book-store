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
        const existingEmail= await email.find({email: email});
        if(existingEmail){
            return res.status(400).json({message: "This email already exists"});
        }
        if(password.length<=5){
            return res.status(400)
            .json({message: "Username length should be greater than 4"});
        }
        const newUser= new user({username:username,
            email: email,
            password: password,
            
        })

    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports= router;