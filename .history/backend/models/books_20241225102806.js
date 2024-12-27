const mongoose= require("mongoose");

    const order= new ongoose.Schema( {
       url: {
        
       }
        },
    }, {timestamps: true} 
);
module.exports= mongoose.model("order", order);

