const router= require("express").Router();

router.post("/sign-up", async(req,res)=> {
    try{
        const { username, email, password, address}= req.body;

        if(username.length)
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports= router;