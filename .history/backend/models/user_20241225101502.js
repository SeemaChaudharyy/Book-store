const mongoose= require("mongoose");

const user= new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: email,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
    
})