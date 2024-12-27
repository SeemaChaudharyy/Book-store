const mongoose= require("mongoose");


const conn= async()=> {
    try{
        await mongoose.connect('${process.env')
    }catch(error){
        console.log(error);
    }
};
conn();