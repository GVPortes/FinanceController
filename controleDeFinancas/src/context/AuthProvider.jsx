import { createContext, useContext, useState} from "react";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ( {children} )=>{

    const login = () => {

    }



    return <AuthContext.Provider value={{login}}>
        {children}
    </AuthContext.Provider>
}