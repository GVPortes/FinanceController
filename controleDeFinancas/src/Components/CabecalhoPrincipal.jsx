import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthProvider';

const CabecalhoPrincipal = () => {

    const {logout} = useAuth();

    const navigate = useNavigate();
    const sair = () => {
        logout();
        navigate("/login");
    }

    return(
        <>
            <Navbar className="bg-[#157347]">
                <Container>
                    <Navbar.Brand className='text-white'>Controle de Finanças</Navbar.Brand>
                    <Navbar.Text className='text-white'>
                            Ajuste sua vida financeira conosco
                    </Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end gap-8 text-white">
                        <Nav.Link as={Link} to="/principal">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/receitas">Receitas</Nav.Link>
                        <Nav.Link as={Link} to="/despesas">Despesas</Nav.Link>
                        <Nav.Link>Relatorios</Nav.Link>
                        <Nav.Link>Minha Conta</Nav.Link>
                        <Nav.Link onClick={sair}>Sair</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CabecalhoPrincipal