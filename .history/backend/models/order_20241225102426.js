const mongoose= require("mongoose");

    const order= new ongoose.Schema( {
        user:{
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        book:{
            type: mongoose.Types.ObjectId,
            ref: "books",
        },    
        user:{
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
    })