import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from 'react';
import { useState } from 'react';


export const ProvideAuthContext=createContext();
const auth=getAuth(app);

const ProvideAuth = ({children}) => {

    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

    const createUserAc=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUserEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const logInWithgitHub=()=>{
        return signInWithPopup(auth,githubProvider);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('current user:',currentUser)
            setUser(currentUser);
            setLoader(false)
        })

        return ()=>{
         unsubscribe();
        }    
    },[])

    const authInfo={
        createUserAc,
        user,
        loader,
        loginUserEmail,
        logInWithGoogle,
        logInWithgitHub,
        }
    return (
        <ProvideAuthContext.Provider value={authInfo}>
            {children}
        </ProvideAuthContext.Provider>
    );
};

export default ProvideAuth;