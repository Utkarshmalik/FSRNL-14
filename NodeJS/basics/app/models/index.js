const TutorialModel=require('../models/tutorial.model');
const UserModel=require('../models/user.model');

const db={
    tutorial:TutorialModel,
    user:UserModel
}

module.exports=db;