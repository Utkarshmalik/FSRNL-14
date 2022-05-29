const jwt=require("jsonwebtoken");
const UserModel = require('../models/index').user;


const verifyToken=(req,res,next)=>{

    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]=='JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1],process.env.SECRET_KEY,function (err,payload){

            console.log(payload);
            if(err){
                return res.status(403).send({message:"Access denied, Uuser not authenticated"});
            }


            UserModel.findById(payload.id)
            .then(data=>{
                req.user=data;
                next();
            })
            .catch(err=>{
                req.user=null;
            })
        })
    }else{
        res.status(404).send({message:"JWT not passed"});
    }
}

module.exports=verifyToken;