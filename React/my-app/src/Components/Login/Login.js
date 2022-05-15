import React,{useState} from "react";
import {Form, Button} from 'react-bootstrap';
import './Login.css';
import {Link,useNavigate} from 'react-router-dom';



function LoginForm(){

  const navigate=useNavigate();

  const [email,onEmailChange]=useState("");
  const [password,onPasswordChange]= useState("");


  function emailChange(e){
    onEmailChange(e.target.value);
  }

  function passwordChange(e){
    onPasswordChange(e.target.value);
  }


  function onSubmit(){
    navigate('/users');

    const users = JSON.parse(localStorage.getItem("users")).users;

    // users.forEach((user)=>{
    //   if(user.userName === email && user.password === password){
    //     //valid user
    //     localStorage.setItem("loggedInUser",JSON.stringify(user));
    //     console.log(user);
    //     navigate('/users');
    //     return;
    //   }
    // })
  }


  return (
    <div className="login-form-div">
<Form className="login-form-comp" >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control onChange={emailChange} value={email} type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label> Password</Form.Label>
      <Form.Control onChange={passwordChange} value={password}  type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
     <Button onClick={onSubmit} variant="primary">
      Submit
    </Button>
  </Form>
  </div>
  )
}



export default LoginForm;