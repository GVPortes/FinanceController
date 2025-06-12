import { createContext, useContext, useState} from "react";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ( {children} )=>{

    const [receitas, setReceitas] = useState({})
    const [despesas, setDespesas] = useState({})

    const login = () => {

    }

    const addReceita = () => {

    }


    return <AuthContext.Provider value={{login}}>
        {children}
    </AuthContext.Provider>
}