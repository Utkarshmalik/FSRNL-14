const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{

    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]=='JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1],process.env.SECRET_KEY,function (err,payload){

            if(err){
                return res.status(403).send({message:"Access denied, Uuser not authenticated"});
            }
            next();
            return;
        })
    }else{
        res.status(404).send({message:"JWT not passed"});
    }
}

module.exports=verifyToken;