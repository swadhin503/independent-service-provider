import React, { useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import auth from '../../firebase.init';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email1, setEmail1] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,user1,error1
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';
      const [email, setEmail] = useState('');
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

      if(sending){
          return (<Toast>
             <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Swadhin's Gym Center</strong>
            </Toast.Header>
            <Toast.Body>Email Sent...</Toast.Body>
          </Toast>)
      }
      let errorElement;
      console.log(error);
      if (error || error1) {
        errorElement=  <p className="text-center text-warning">Error: {error?.message}{error1?.message}</p>
   }

      if(user || user1){
          navigate(from,{replace:true});
      }
      
      const handleEmail = (event) => {
          setEmail1(event.target.value);
      }
      const handlePassword = (event) => {
          setPassword(event.target.value);
      }
      const handleSignIn = (event) => {
          event.preventDefault();
          signInWithEmailAndPassword(email,password);
      }
      const handleGoogleSignIn = () => {

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
                <Button className="me-2" onClick={handleSignIn} variant="info" type="submit">
                    Login
                </Button>
                <Button onClick={async () => {
                 await sendPasswordResetEmail(email);}} variant="info" type="submit">
                    Reset Password
                </Button>
                {errorElement}
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