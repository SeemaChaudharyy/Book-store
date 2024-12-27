const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
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
            default: "https://www.example.com/default-avatar.png",
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin"],
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
                ref: "order",
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);