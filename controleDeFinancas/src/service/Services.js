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
    console.log(data)
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

    let data = ( await response.json()) ;
    let despesasUsuario = data.filter( a => a.idUser == idUsuario)

    return despesasUsuario

}

export const setReceita = async (data, token)=>{
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

export const setDespesa = async (data, token)=>{
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