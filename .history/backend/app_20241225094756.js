const express= require("express");
const app= express();
//to check on loca
app.get("/", (req,res)=> {
      res.send("hello form backend");
    });
//create port
app.listen(1000, ()=> {
    console.log("server started");
});