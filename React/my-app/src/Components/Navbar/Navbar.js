import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link ,useNavigate } from 'react-router-dom';


function onLogout(navigate){
  localStorage.removeItem("loggedInUser");
  navigate("/login");
}

function Header(props)
{
  let navigate= useNavigate();



    return (<Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand>JOB FINDER</Navbar.Brand>
    <Nav className="me-auto">
        <Link style={{margin:"5px"}}  to="/users" ><Nav>Home</Nav></Link>
        <Link style={{margin:"5px"}} to="/features" > <Nav> Features </Nav>  </Link>
        <Link style={{margin:"5px"}} to="/pricing" ><Nav>Pricing</Nav></Link>
    </Nav>
    </Container>
    <button onClick={()=>onLogout(navigate)} >Logout</button>
  </Navbar>);

}

export default Header;
