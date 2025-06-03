import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const CabecalhoPrincipal = () => {


    return(
        <>
            <Navbar className="bg-[#157347]">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='text-white'>Controle de Finanças</Navbar.Brand>
                    <Navbar.Text className='text-white'>
                            Ajuste sua vida financeira conosco
                    </Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end gap-8 text-white">
                        <Nav.Link>Inicio</Nav.Link>
                        <Nav.Link>Receitas</Nav.Link>
                        <Nav.Link>Despesas</Nav.Link>
                        <Nav.Link>Relatorios</Nav.Link>
                        <Nav.Link>Minha Conta</Nav.Link>
                        <Nav.Link >Sair</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CabecalhoPrincipal