
const UserModel = require('../models/index').user;


exports.create = (req,res)=>{

    const data=req.body;
    const User= new UserModel(data);

    User.save()
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Something went wrong"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}


exports.getAll=(req,res)=>{
    UserModel.find({})
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Something went wrong"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}

exports.findById=(req,res)=>{

    UserModel.findById(req.params.id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Something went wrong"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })
}


exports.postsById= async (req,res)=>{

    const id= req.params.id;

    const user= await UserModel.findById(id).populate('tutorials');

    res.send(user.tutorials);
}



