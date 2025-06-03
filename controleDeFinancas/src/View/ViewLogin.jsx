import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CabecalhoHome from '../components/CabecalhoHome';

const ViewLogin = () => {


    return (
        <div>
            <CabecalhoHome />
            <div className='flex flex-col items-center justify-center h-[40rem] bg-gray-200'>
                <Form className='w-96 flex flex-col items-center justify-center bg-gray-300 h-[20rem] rounded-4xl'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Logar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ViewLogin