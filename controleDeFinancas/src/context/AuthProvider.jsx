import { createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext()



export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ( {children} )=>{
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null
    })

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user) )
    },[user])

    const login = (nomeUser, senha) => {
        if (senha === "123456" && nomeUser === "admin") {
            let u = {nome: "admin", id: "1"}
            setUser(u)
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

    const verificaLogin = () => {
        if (JSON.parse(localStorage.getItem("user")) == null) {
            return true
        } else {
            return false
        }
    }

    return (
        <AuthContext.Provider value={{verificaLogin, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}