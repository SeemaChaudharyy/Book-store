const mongoose= require('mongoose');

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
        default: "https://www.flaticon.com/free-icon/blogger-draw-logo_72104?term=javascript+logo&page=1&position=82&origin=tag&related_id=72104",
    },
    role: {
        type: String,
        default: "user",
        email: ["user", "admin"],
    },
    favorites: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
    },
  ],
    cart: [
        {
        type: mongoose.Schema.Types.ObjectId,
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

module.exports= mongoose.model("user", user);