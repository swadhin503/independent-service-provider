import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-2">Swadhin's Gym Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features"  className="fs-5">Home</Nav.Link>
                    <Nav.Link href="#pricing" className="fs-5">Services</Nav.Link>
                    <Nav.Link href="#pricing" className="fs-5">Blogs</Nav.Link>
                    <Nav.Link href="#pricing" className="fs-5">About Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets" className="fs-5">Login</Nav.Link>
                    <Nav.Link href="#memes" className="fs-5">
                    Signup
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
    
    );
};

export default Header;