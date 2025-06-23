import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CabecalhoHome from '../components/CabecalhoHome';
import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router';

const ViewLogin = () => {
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [mensagem, setMensagem] = useState("");
    const {login} = useAuth();

    const navigate = useNavigate();

    const logar = async () => {
        const result = await login(nome, senha)
        if (result) {
            setNome("")
            setSenha("")
            navigate("/principal")
        }
        else {
            setMensagem("Usuario ou senha invalidos!")
        }
    }
    return (
        <div>
            <CabecalhoHome />
            <div className='flex flex-col items-center justify-center h-[40rem] bg-gray-200'>
                <Form className='w-96 flex flex-col items-center justify-center bg-gray-300 h-[20rem] rounded-4xl'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </Form.Group>
                    <Form.Text className="text-muted">
                        {mensagem}
                    </Form.Text>
                    <Button variant="success" onClick={logar}>
                        Logar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ViewLogin