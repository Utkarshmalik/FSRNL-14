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
    origin:'*'
}))

app.use(bodyParser.json());


require("./app/routes/tutorial.routes")(app);


const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
})