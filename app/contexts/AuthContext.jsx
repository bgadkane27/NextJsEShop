'use client';

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react"
import { auth } from "../lib/firebase";

const AuthContext = new createContext();

export default function AuthContextProvider({children}) {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }else{
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, [])
    return (
        <AuthContext.Provider value={{
        user,
        isLoading: user === undefined
        }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);