const mongoose= require("mongoose");


const conn= async()=> {
    try{
        await mongoose.connect('${process.env.mongodb+srv://seemachaudharyy01:<db_password>@cluster0.ekqfl.mongodb.net/}');
        console.log("connected to database");
    }catch(error){
        console.log(error);
    }
};
conn();