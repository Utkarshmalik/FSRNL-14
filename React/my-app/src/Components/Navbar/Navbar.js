import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header()
{
    return (<Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand>JOB FINDER</Navbar.Brand>
    <Nav className="me-auto">
        <Link style={{margin:"5px"}}  to="/users" ><Nav>Home</Nav></Link>
        <Link style={{margin:"5px"}} to="/features" > <Nav> Features </Nav>  </Link>
        <Link style={{margin:"5px"}} to="/pricing" ><Nav>Pricing</Nav></Link>
    </Nav>
    </Container>
  </Navbar>);

}

export default Header;
