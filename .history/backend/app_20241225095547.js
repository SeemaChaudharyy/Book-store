const express= require("express");
const app= express();
//to check on localhost
/*
app.get("/", (req,res)=> {
      res.send("hello form backend");
    });*/

require("dotenv").config();   
app.listen(process.env.PORT, ()=> {
    console.log('Server started $process.env.PORT)');
});
/*create port
app.listen(1000, ()=> {
    console.log("server started");
});*/