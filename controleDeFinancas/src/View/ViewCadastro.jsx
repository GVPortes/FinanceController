import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CabecalhoHome from '../components/CabecalhoHome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService, saveUser } from '../service/Services';
import { useEffect } from 'react';

const ViewCadastro = () => {

    const navigate = useNavigate()
    const [token, setToken] = useState()

    useEffect(() => {
        const cadastrarAdmin = async () => {
            let resp = await loginService("admin", "123456")
            setToken(resp.access_token)
        }

        cadastrarAdmin()
        
    }, [])

    const [dados, setDados] = useState({
        "username": "",
        "password": "",
        "saldo": 0
    })

    const buttonCadastrar = async () => {
        console.log(token)
        await saveUser(dados, token)
        navigate("/login")
    }


    return (
        <div>
            <CabecalhoHome />
            <div className='flex flex-col items-center justify-center h-[40rem] bg-gray-200'>
                <Form className='w-96 flex flex-col items-center justify-center bg-gray-300 h-[30rem] rounded-4xl'>
                    <Form.Label>Cadastro</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" value={dados.username} onChange={(e)=>{setDados({...dados, "username": e.target.value})}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" value={dados.password} onChange={(e)=>{setDados({...dados, "password": e.target.value})}}/>
                    </Form.Group>
                    <Button variant="success" onClick={buttonCadastrar}>
                        Cadastrar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ViewCadastro