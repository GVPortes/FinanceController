const URL="http://localhost:9000"

export const loginService = async (login, senha)=>{

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
        }

    let bodyContent = JSON.stringify({
        "username":`${login}`,
        "password":`${senha}`
    });

    let response = await fetch(`${URL}/auth/login`, { 
        method: "POST",
        body: bodyContent,
        headers: headersList
    });

    if (response.status == 401){
        return null
    }

    let data = await response.text();
    return  JSON.parse(data)
}

export const buscaUserAPI = async (login, token)=>{

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        }

    let response = await fetch(`${URL}/users`, { 
    method: "GET",
    headers: headersList
    });

    if (response.status == 401){
        return null
    }


    let usuarios = JSON.parse( await response.text() );

    return  usuarios.filter(u => u.username == login)


}

export const getReceitas = async (idUsuario, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`
    }

    let response = await fetch(`${URL}/receitas`, { 
    method: "GET",
    headers: headersList
    });

    if (response.status == 401){
        return null
    }

    let data = ( await response.json()) ;
    let receitasUsuario = data.filter( a => a.idUser == idUsuario)

    return receitasUsuario

}

export const getDespesas = async (idUsuario, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`
    }

    let response = await fetch(`${URL}/despesas`, { 
    method: "GET",
    headers: headersList
    });

    if (response.status == 401){
        return null
    }

    let data = ( await response.json()) ;
    let despesasUsuario = data.filter( a => a.idUser == idUsuario)

    return despesasUsuario

}

export const saveReceita = async (data, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
    }

    let response = await fetch(`${URL}/receitas`, { 
        method: "POST",
        body: JSON.stringify(data),
        headers: headersList
    });

    return await response.text();

}

export const saveDespesa = async (data, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
    }

    let response = await fetch(`${URL}/despesas`, { 
        method: "POST",
        body: JSON.stringify(data),
        headers: headersList
    });

    return await response.text();
}

export const saveUser = async (data, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
    }

    let response = await fetch(`${URL}/users`, { 
        method: "POST",
        body: JSON.stringify(data),
        headers: headersList
    });

    return await response.text();
}

export const getSimulacoes = async (idUsuario, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`
    }

    let response = await fetch(`${URL}/simulacoes`, { 
    method: "GET",
    headers: headersList
    });

    if (response.status == 401){
        return null
    }

    let data = ( await response.json()) ;
    let simulacoesUsuario = data.filter( a => a.idUser == idUsuario)

    return simulacoesUsuario

}

export const saveSimulacao = async (data, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
    }

    let response = await fetch(`${URL}/simulacoes`, { 
        method: "POST",
        body: JSON.stringify(data),
        headers: headersList
    });

    return await response.text();
}

export const deleteReceita = async (id, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
    }

    let response = await fetch(`${URL}/receitas/${id}`, { 
        method: "DELETE",
        headers: headersList
    });

    return await response.text();
}

export const deleteDespesa = async (id, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
    }

    let response = await fetch(`${URL}/despesas/${id}`, { 
        method: "DELETE",
        headers: headersList
    });

    return await response.text();
}

export const deleteSimulacoes = async (id, token)=>{
    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
    }

    let response = await fetch(`${URL}/simulacoes/${id}`, { 
        method: "DELETE",
        headers: headersList
    });

    return await response.text();
}
