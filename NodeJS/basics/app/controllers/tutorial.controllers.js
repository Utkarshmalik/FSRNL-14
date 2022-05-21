const TutorialModel=require("../models/tutorial.model");


exports.findAll= (req,res)=>{
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

exports.create=(req,res)=>{
    
    const tutorial = new TutorialModel({
        title:req.body.title,
        description:req.body.description,
        published: req.body.published ? req.body.published : false
    })

    tutorial.save()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}


exports.update = (req,res)=>{
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