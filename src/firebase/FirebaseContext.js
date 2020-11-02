import React, {useContext, useEffect, useState} from 'react';
import firebaseApp from "./Firebase";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        firebaseApp.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return(
        <AuthContext.Provider value= {currentUser}>
            {children}
        </AuthContext.Provider>
    )
}