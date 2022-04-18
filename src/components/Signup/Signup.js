import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // const SendEmailVerification = () => {
    // const [email, setEmail] = useState('');
    // const [sendEmailVerification] = useSendEmailVerification(
    //   auth
    // );
    const [
        createUserWithEmailAndPassword,
        user,
        error
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
      const [signInWithGoogle, user1] = useSignInWithGoogle(auth);

      const handleEmail = (event) => {
          setEmail(event.target.value);
      }
      const handlePassword = (event) => {
          setPassword(event.target.value);
      }
      const handleGoogleSignIn = (event) => {

        signInWithGoogle();
    }
      const handleCreateUser = (event) => {
        //   event.preventDefault();
          createUserWithEmailAndPassword(email, password);
      }
      const navigate = useNavigate();
      if(user || user1){
          navigate('/');
      }
    return (
        <div>
            <Form className="text-center mt-5 login-border">
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" className="w-25 d-block mx-auto" />
                </Form.Group>
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
                <Button onClick={handleCreateUser} variant="primary" type="submit">
                    Create Account
                </Button>
              </Form>
              <div className="social-login mx-auto">
                <Button onClick={handleGoogleSignIn} className="d-block mx-auto" variant="primary" size="lg">
                Sign In With Google
                </Button>
              </div>
        </div>
    );
};

export default Signup;