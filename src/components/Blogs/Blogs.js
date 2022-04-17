import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className="container mt-5">
            <div className="row gap-3">
                <div className="col-lg-6 blog-border">
                    <div className="p-3">
                        <h3>Difference between authorization and authentication</h3>
                        <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board</p>
                    </div>
                </div>
                <div className="col-lg-6 blog-border">
                    <div className="p-3">
                        <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter,Github and more.</p>
                    </div>
                </div>
                <div className="col-lg-6 blog-border">
                    <div className="p-3">
                        <h3>What other services does firebase provide other than authentication</h3>
                        <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;