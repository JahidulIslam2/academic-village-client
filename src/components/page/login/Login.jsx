import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProvideAuthContext } from '../../provideAuth/ProvideAuth';

const Login = () => {
    const {md}=useContext(ProvideAuthContext);
    const formSubmitHandler =()=>{

    }
    return (
        <div>
            <div className="hero min-h-screen min-w-full bg-blue-400">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-black">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in.</p>
                    </div>
                    <form onSubmit={formSubmitHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className='text-center my-2'>or</p>
                                <button className="btn btn-success">Google</button>
                                <p className='text-center my-2'>or</p>
                                <button className="btn btn-success">Login with github</button>
                                <p>You Are New! <Link to="/signup">Create New Account</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;