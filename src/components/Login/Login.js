import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,user1
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';
      
      if(user || user1){
          navigate(from,{replace:true});
      }
      
      const handleEmail = (event) => {
          setEmail(event.target.value);
      }
      const handlePassword = (event) => {
          setPassword(event.target.value);
      }
      const handleSignIn = (event) => {
          event.preventDefault();
          signInWithEmailAndPassword(email,password);
      }
      const handleGoogleSignIn = (event) => {

          signInWithGoogle();
      }
    return (
        <div>
                <Form className="text-center mt-5 login-border">
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" className="w-25 d-block mx-auto" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" className="w-25 d-block mx-auto" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button onClick={handleSignIn} variant="primary" type="submit">
                    Login
                </Button>
              </Form>
              <p className="signup-link">New to Swadhin's Gym Center? <Link to='/signup'>Create an account</Link></p>
              <div className="social-login mx-auto">
                <Button onClick={handleGoogleSignIn} className="d-block mx-auto" variant="primary" size="lg">
                Sign In With Google
                </Button>
              </div>
            </div>
           
    );
};

export default Login;