const mongoose = require("mongoose");


const TutorialSchema = mongoose.Schema({
    title:String,
    description: String,
    published: Boolean
});

const TutorialModel = mongoose.model("tutorial",TutorialSchema);

module.exports=TutorialModel;