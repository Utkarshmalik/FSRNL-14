const TutorialModel=require("../models/index").tutorial;
const UserModel=require("../models/index").user;


exports.findAll= (req,res)=>{

    if(req.user.role!=="admin"){
        return res.status(403).send({message:"Unauthorised access"});
     }


    const titleData=req.query.title;

    var condition = titleData ? {title:{$regex: new RegExp(titleData)}}: {};

    console.log(new RegExp(titleData));

    TutorialModel.find(condition)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}

exports.findOne= (req,res)=>{

    const id= req.params.id;

    TutorialModel.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"No tutorial found with id "+id});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}

exports.create= async (req,res)=>{


    if(req.user.role!=="admin"){
        return res.status(403).send({message:"Unauthorised access"});
     }

    const userId=req.params.id;
    const userById = await UserModel.findById(userId);

    if(!userById){
        res.status(404).send({message:"Invalid owner id"});
    }

    const tutorial = new TutorialModel({
        title:req.body.title,
        description:req.body.description,
        published: req.body.published ? req.body.published : false,
        owner:userId
    })

    const data = await tutorial.save();
    userById.tutorials.push(tutorial);
    await userById.save();

    return res.send(userById);
}


exports.update = (req,res)=>{


    if(req.user.role!=="admin"){
        return res.status(403).send({message:"Unauthorised access"});
     }

    const id=req.params.id;

    TutorialModel.findByIdAndUpdate(id,req.body)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not able to update"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}



exports.delete = (req,res)=>{


    if(req.user.role!=="admin"){
        return res.status(403).send({message:"Unauthorised access"});
     }
     
    const id=req.params.id;

    TutorialModel.findByIdAndRemove(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not able to delete"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}


exports.deleteAll=(req,res)=>{
    TutorialModel.deleteMany({})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}

exports.findAllPublished=(req,res)=>{

    TutorialModel.find({published:true})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}