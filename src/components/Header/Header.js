import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-2">Swadhin's Gym Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home"  className="fs-5">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services" className="fs-5">Services</Nav.Link>
                    <Nav.Link as={Link} to="/blogs" className="fs-5">Blogs</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="fs-5">About Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/login" className="fs-5">Login</Nav.Link>
                    <Nav.Link as={Link} to="/signup" className="fs-5">
                    Signup
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
    
    );
};

export default Header;