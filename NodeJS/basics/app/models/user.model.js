const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({

    name:{
        type: String,
        required:`{PATH} is required!`
    },
    bio:{
        type:String
    },
    website:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    hashedPassword:{
        type:String
    },
    tutorials:[
        {type: mongoose.Schema.Types.ObjectId, ref:'Tutorial'}
    ] 
},{
    timestamps:true
})

module.exports =  mongoose.model("User",UserSchema);

