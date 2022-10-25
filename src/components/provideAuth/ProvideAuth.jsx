import React from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const ProvideAuthContext=createContext();
const auth=getAuth(app);

const ProvideAuth = ({children}) => {

    

    const authInfo={md:'hello'}
    return (
        <ProvideAuthContext.Provider value={authInfo}>
            {children}
        </ProvideAuthContext.Provider>
    );
};

export default ProvideAuth;