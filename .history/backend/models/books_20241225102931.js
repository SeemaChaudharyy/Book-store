const mongoose= require("mongoose");

    const order= new ongoose.Schema( {
       url: {
        type: String,
        required: true,
       },
       title: {
        type: String,
        required: true,
       },
        author: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        
    }, {timestamps: true} 
);
module.exports= mongoose.model("order", order);
