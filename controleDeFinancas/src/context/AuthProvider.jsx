import { createContext, useContext, useState} from "react";

const AuthContext = createContext()



export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ( {children} )=>{


    const [logado, setlogado] = useState(false)
    const [user, setUser] = useState(null)
    const login = (user, senha) => {
        if (senha === "123456" && user === "admin") {
            setUser({nome: "admin", id: "1"})
            return true
        }
        else {
            setUser(null)
            return false
        }
            
    
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, logado, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}