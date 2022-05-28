const AuthController = require('../controllers/auth.controllers');


module.exports=app=>{

    app.post("/api/register",AuthController.register);

    app.post("/api/login",AuthController.login);
}