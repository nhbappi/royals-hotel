import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
<Navbar bg="success" variant="light">
    <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mx-auto">
        <Nav.Link as = {Link} to ="/home">Home</Nav.Link>
        <Nav.Link as = {Link} to ="/hotel">Hotel</Nav.Link>
        <Nav.Link as = {Link} to ="/about">About</Nav.Link>
        <Nav.Link as = {Link} to ="/blog">Blog</Nav.Link>
        <Nav.Link as = {Link} to ="/contact">Contact</Nav.Link> 
        <Nav.Link as = {Link} to ="/login">Login</Nav.Link>
        
        
    </Nav>
    </Container>
</Navbar>
        </div>
    );
};

export default Header;