import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const ProvideAuthContext=createContext();
const auth=getAuth(app);

const ProvideAuth = ({children}) => {

    const createUserAc=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUserEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo={createUserAc,loginUserEmail}
    return (
        <ProvideAuthContext.Provider value={authInfo}>
            {children}
        </ProvideAuthContext.Provider>
    );
};

export default ProvideAuth;