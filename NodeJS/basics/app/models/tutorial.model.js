const mongoose = require("mongoose");

const TutorialSchema = mongoose.Schema({
    title:String,
    description: String,
    published: Boolean,
    owner:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
});

const TutorialModel = mongoose.model("Tutorial",TutorialSchema);

module.exports=TutorialModel;