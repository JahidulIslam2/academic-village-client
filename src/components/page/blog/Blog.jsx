import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl text-blue-400'>what is cors?</h1>
                <p className='text-white'>
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources
                </p>
            </div>
            <div>
                <h1 className='text-3xl text-blue-400'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p  className='text-white'>
                    The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                    <span className='text-blue'>Best firebase alternative</span>
                    1/Backendless. ...
                    2/Kuzzle. ...
                    3/Pubnub. ...
                    4/Kumulos. ...
                    5/Appwrite. ...
                    6/Deployd. ...
                    7/NHost.
                </p>
            </div>
            <div>
                <h1 className='text-3xl text-blue-400'>How does the private route work?</h1>
                <p  className='text-white'>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
                </p>
            </div>
            <div>
                <h1 className='text-3xl text-blue-400'> What is Node? How does Node work?</h1>
                <p  className='text-white'>
                Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. 
                <span>How does Node work?</span>
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.
                </p>
            </div>
        </div>
    );
};

export default Blog;