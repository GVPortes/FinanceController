import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const FormularioReceitas = () => {

    return(
        <>
            <Form.Label htmlFor="basic-url">Nome da receita</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control/>
            </InputGroup>

            <Form.Label htmlFor="basic-url">Nome da receita</Form.Label>
            <InputGroup className="mb-3"></InputGroup>

            
            <Form.Label htmlFor="basic-url">Valor da receita</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
            </InputGroup>
        </>

    )
}

export default FormularioReceitas