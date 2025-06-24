import { createContext, useContext, useEffect, useState} from "react";
import { buscaUserAPI, loginService } from "../service/Services";

const AuthContext = createContext()



export const useAuth = () => {
    return useContext(AuthContext)
}
export const AuthProvider = ( {children} )=>{

    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null;
    });

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user))
    },[user]);

    const login = async (nomeUser, senha) => {
        let resp = await loginService(nomeUser, senha)

        if (resp == null) {
            setUser(null)
            return false
        }
        else {

            let userBuscado = await buscaUserAPI(nomeUser, resp.access_token)
            console.log(userBuscado)
            let u = {
                id: userBuscado[0].id,
                nome: userBuscado[0].username,
                token: resp.access_token
            }
            setUser(u)
            return true
        }   
    
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{logout, login, user}}>
            {children}
        </AuthContext.Provider>
    )
}