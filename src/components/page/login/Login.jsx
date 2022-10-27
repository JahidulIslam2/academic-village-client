import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ProvideAuthContext } from '../../provideAuth/ProvideAuth';

const Login = () => {
    const { loginUserEmail,logInWithGoogle,logInWithgitHub } = useContext(ProvideAuthContext);
    const location=useLocation();
    const Navigate=useNavigate();
    const [error,setError]=useState();
    const from=location.state?.from?.pathname || '/';
    const formSubmitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUserEmail(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                form.reset()
                Navigate(from,{replace:true})
            })
            .catch((error) => {
                console.error('error is', error)
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const GoogleLoginHandler = () => {
        logInWithGoogle()
        .then((result)=>{
            const user=result.user;
            console.log(user)
            Navigate(from,{replace:true})
            
        })
        .catch((error)=>{
            console.error('error :',error)
        })
    }

    const githubLoginHandler=()=>{
        logInWithgitHub()
        .then((result)=>{
            const user=result.user;
            console.log(user)
        })
        .catch((error)=>{
            console.error('error :',error)
        })
    }


    return (
        <div>
            <div className="hero min-h-screen min-w-full bg-blue-400">
                <div className="hero-content flex-col w-full max-w-xl">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-black">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-300">
                        <form onSubmit={formSubmitHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <Link to="#" className="label-text-alt text-red-500">{error}</Link>
                                </label>
                            </div>
                            <span className='text-center'>
                                <button className="btn btn-primary lg:w-56 ">Login</button>
                            </span>
                        </form>
                        <div className="form-control label">
                            <p className='text-center mb-2'>or</p>
                            <button onClick={GoogleLoginHandler} className="btn btn-success lg:w-56">Google</button>
                            <p className='text-center'>or</p>
                            <button onClick={githubLoginHandler} className="btn btn-success lg:w-56 mb-2">Login with github</button>
                            <p>You Are New! <Link to="/signup"><span className='text-blue-400'>Create New Account</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;