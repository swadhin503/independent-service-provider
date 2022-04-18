import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
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
                    <Nav.Link as={Link} to="/about" className="fs-5">About Me</Nav.Link>
                </Nav>
                <Nav>
                    {
                        user ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <Nav.Link as={Link} to="/login" className="fs-5">Login</Nav.Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
    
    );
};

export default Header;