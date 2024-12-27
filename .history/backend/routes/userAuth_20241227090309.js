const jwt= require("jsonwebtoken");
const authentication= (req,res,next)=> {
    const authHeader= req.headers("authorization");
    const token= authHeader && authHeader.split(" "){1};

    if(token== null){
        return res.status(401).json()
    }
}