const router= require("express").Router();

router.post("/sign-up", async(req,res)=> {
    try{
        const { username, email, password, address}= req.body;

        if(username.length< 4){
            return res.status(400).json({message: "Username length should be greater than 4"});
        }
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports= router;