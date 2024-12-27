const mongoose= require("mongoose");

const user= new mongoose.Schema({
    username: {
        type: String,
        required
    }
})