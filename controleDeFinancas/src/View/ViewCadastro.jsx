import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const ViewCadastro = () => {


    return (
        <div>
            <Navbar className="bg-[#157347]">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='text-white'>Controle de Finanças</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='text-white'>
                        Ajuste sua vida financeira conosco
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='flex flex-col items-center justify-center h-[40rem] bg-gray-200'>
                <Form className='w-96 flex flex-col items-center justify-center bg-gray-300 h-[30rem] rounded-4xl'>
                    <Form.Label>Cadastro</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group><Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Digite a Senha Novamente</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ViewCadastro