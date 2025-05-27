import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const ViewHome = () => {

    return (
        <div>
            <Navbar className="bg-[#157347]">
                <Container>
                    <Navbar.Brand className='text-white'>Controle de Finanças</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='text-white'>
                        Ajuste sua vida financeira conosco
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="flex flex-col items-center justify-center h-[40rem] bg-gray-200">
                <div className='flex flex-col items-center justify-center bg-gray-300 p-8 gap-4 rounded-4xl'>
                    <p className='text-4xl'>Bem vindo ao controle de finanças</p>
                    <p className='text-2xl'>Faça seu login!</p>
                    <Link to="/login" className='bg-[#157347] p-2.5 text-white'>Logar</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewHome