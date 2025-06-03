import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const CabecalhoHome = () => {


    return(
        <>
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
        </>
    )
}

export default CabecalhoHome