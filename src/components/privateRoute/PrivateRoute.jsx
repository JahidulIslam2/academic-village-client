import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ProvideAuthContext } from '../provideAuth/ProvideAuth';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(ProvideAuthContext);
    const location =useLocation();

    if(loader){
       return <progress className="progress w-full color bg-white"></progress>
    }

    if(user && user.uid){

        return children
    }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
  
};

export default PrivateRoute;