
const express= require("express");
const app= express();
//to check on localhost
/*
app.get("/", (req,res)=> {
      res.send("hello form backend");
    });*/
require("dotenv").config();  
require("./conn/conn");
const user= require()

app.use("ap1/v1",)

app.listen(process.env.PORT, ()=> {
    console.log('Server started at port ${process.env.PORT)');
});
/*create port
app.listen(1000, ()=> {
    console.log("server started");
});*/