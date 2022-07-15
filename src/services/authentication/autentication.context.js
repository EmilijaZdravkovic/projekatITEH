// react imports
import React, { useState, createContext } from "react";

// firebase
import { projectAuth } from "../firebase/config";


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error , setError] = useState(null);

    projectAuth.onAuthStateChanged((usr) => {
        if (usr) {
            setUser(usr);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    });

    const onLogin = (email, password) => {
        setIsLoading(true);
        projectAuth.signInWithEmailAndPassword(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            }).catch((err => {
                setIsLoading(false);
                setError(err.toString());
            }));
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if(password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        projectAuth.createUserWithEmailAndPassword(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            }). catch((err) => {
                setIsLoading(false);
                setError(err.toString());
            });
    };

    
    const onLogout = () => {
        setUser(null);
        projectAuth.signOut();
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin, 
                onRegister,
                onLogout
            }}
        >
            { children }
        </AuthenticationContext.Provider>
    )
}