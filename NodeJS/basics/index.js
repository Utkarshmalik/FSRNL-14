const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const correctUser = {
    userName:"utmalik@amazon.com",
    hashedPassword:"345211ttgvwebhtwjewb"
}


function applyHash(){
    return "345211ttgvwebhtwjewb";
}


app.use((req,res,next)=>{
    console.log('Time:', Date.now());
    next();
})


app.use(bodyParser.json());


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