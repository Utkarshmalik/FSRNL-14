const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://utmalik:qwerty123@cluster0.rrgpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db= mongoose.connection;

db.on("open",()=>{
    console.log("Connected successfully");
})

db.on("error", ()=>{
    console.log("not able to connect to DB");
})

app.use(cors({
    origin:'http://localhost:3001'
}))


const UserSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        enum: ['ms','mr','mrs','miss']
    },
    firstName:{
        type:String,
        minlength:4,
        maxlength:20,
        required:true
    }, 
    lastName:{
        type:String,
        minlength:4,
        maxlength:20,
        required:true
    },
    picture:{
        type:String,
        required:true,
        validate:{
            validator:(pic)=>{
                const format=pic.split('.').pop();
                return true || format==="jpg" || format==="png" || format==="jpeg";
            }
        }
    }
})

const User = mongoose.model("User",UserSchema);




app.use((req,res,next)=>{
    console.log('Time:', Date.now());
    next();
})


app.use(bodyParser.json());


app.post("/addUser",(req,res)=>{
    const user= new User(req.body);

    user.save()
    .then((user)=>{
        res.send(user)
    })
    .catch( (error)=>{
        res.status(500).send(error);
    })
})

app.get("/users/:id",(req,res)=>{
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).send("Invalid Object Id");
    }

    User.findById(mongoose.Types.ObjectId(id))
    .then((user)=>{
        if(!user){
            res.status(404).send("Invalid ID passed");
        }
        res.send(user);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })

})

app.get("/users",((req,res)=>{

    User.find({})
    .then((users)=>{
        res.send({data:users})
    })
    .catch((error)=>{
        res.status(500).send(error);
    })
}))

app.post("/addAllUsers",(req,res)=>{

    const data=req.body.allUsers;

    console.log(data);

    data.forEach((user)=>{
        console.log("insdie")
        const {title,firstName,lastName,picture}=user;
        const newUser= new User({title,firstName,lastName,picture});
        newUser.save();
    })

    res.send("All users added");
})


app.get('/',(req,res)=>{
    res.send("Hello");
})

app.get('/users',(req,res)=>{
    res.json(users);
})

app.post('/login',(req,res)=>{
    
    const {userName,password}= req.body;


    if(!userName || !password){
        res.status(404).send("Either username or password is empty");
    }

    //validate credentials

    //generate the hash

    const hashedPassword= applyHash(password);

    if(correctUser.userName===userName && correctUser.hashedPassword===hashedPassword){
        res.status(200).send("Logged in");
    }
    else{
        res.status(401).send("Invalid credentials");
    }
})


app.listen(3000,()=>{
    console.log("running app on port 3000");
})


const correctUser = {
    userName:"utmalik@amazon.com",
    hashedPassword:"345211ttgvwebhtwjewb"
}


function applyHash(){
    return "345211ttgvwebhtwjewb";
}