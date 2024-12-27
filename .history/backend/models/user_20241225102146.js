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
    address: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "",
    },
    role: {
        type: String,
        default: "user",
        email: ["user", "admin"],
    },
    favourites: [
        {
        type: mongoose.Types.ObjectId,
        ref: "books",
    },
],
    cart: [
        {
        type: mongoose.Types.ObjectId,
        ref: "books",
    },
],
cart: [
    {
    type: mongoose.Types.ObjectId,
    ref: "order",
},
],
} , { timestamps: true}
);

module.exports= mongoose.model()