import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProvideAuthContext } from '../../provideAuth/ProvideAuth';

const SignUp = () => {
const {createUserAc,updateUserProfile}=useContext(ProvideAuthContext);
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photoURL=form.photoURL.value;
        const password=form.password.value;

        createUserAc(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            form.reset()
            UserProfile(name,photoURL);
            
          })
          .catch((error) => {
            console.error('error is',error)
          });
    }

    const UserProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL,
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch((error)=>{
            console.log(error)
        })

        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full max-w-xl">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Create New Account!</h1>
                        <p className="py-6">please create your learn English Course account</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Write your Name!" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Drop Your Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="a@email.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="mt-6 text-center">
                                <button className="btn btn-primary lg:w-56">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;