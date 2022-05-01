import React from "react";
import {Form, Button} from 'react-bootstrap';
import './Login.css';
import {Link} from 'react-router-dom';

function onClick()
{
  this.setState({isLoggedIn:false});
}

function LoginForm(props){
    return (
        <div className="login-form-div">
    <Form className="login-form-comp" >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
         <Link to="/users"><Button variant="primary">
          Submit
        </Button>
        </Link> 
      </Form>
      </div>
      )
}

export default LoginForm;