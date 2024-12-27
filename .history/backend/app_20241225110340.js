
const express= require('dotenvexpress');
const app= express();
//to check on localhost
/*
app.get("/", (req,res)=> {
      res.send("hello form backend");
    });*/
require("dotenv").config();  
require("./conn/conn");
const user= require("./routers/users");

app.use("ap1/v1",user)

app.listen(process.env.PORT, ()=> {
    console.log('Server started at port ${process.env.PORT)');
});
/*create port
app.listen(1000, ()=> {
    console.log("server started");
});*/