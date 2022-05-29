const UserModel = require('../models/index').user;
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");


exports.register=(req,res)=>{

    console.log(req.body);

    const user = new UserModel({
        name:req.body.name,
        email:req.body.email,
        hashedPassword:bcrypt.hashSync(req.body.password,8),
        role: req.body.role
    });

    user.save()
    .then(()=>{
       res.send({message:"User Registered Successfully"}); 
    })
    .catch((err)=>{
        res.status(500).send({message:err.message})
    })
}


exports.login=(req,res)=>{

    console.log(process.env.PORT);
    const {email,password}=req.body;

    UserModel.findOne({email:email})
    .then((user)=>{
        if(!user){
            return res.status(404).send({message:"User not found"});
        }

        //compare passwords

        var isPasswordValid=bcrypt.compareSync(password,user.hashedPassword);

        if(!isPasswordValid){
            res.status(401).send({accessToken:null,message:"Invalid Password!"});
        }

        //valid user
        
        const payload={
            id:user._id
        }

        var token=jwt.sign(payload,process.env.SECRET_KEY,{
            expiresIn:86400
        });


        res.send({
            user:user,
            message:"Login Successful",
            accessToken:token
        })

    })
    .catch((err)=>{
        res.status(500).send({message:err.message})
    })

}