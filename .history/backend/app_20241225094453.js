const express= require("express");
const app= express();
//
app.get("/")
//create port
app.listen(1000, ()=> {
    console.log("server started");
});