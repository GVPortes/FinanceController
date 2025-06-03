import { Link } from "react-router-dom";
import CabecalhoHome from '../components/CabecalhoHome';

const ViewHome = () => {

    return (
        <div>
            <CabecalhoHome />
            <div className="flex flex-col items-center justify-center h-[40rem] bg-gray-200">
                <div className='flex flex-col items-center justify-center bg-gray-300 p-8 gap-4 rounded-4xl'>
                    <p className='text-4xl'>Bem vindo ao controle de finanças</p>
                    <p className='text-2xl'>Faça seu login!</p>
                    <Link to="/login" className='bg-[#157347] p-2.5 text-white'>Logar</Link>
                    <p className='text-2xl'>Cadastre aqui!</p>
                    <Link to="/cadastro" className='bg-[#157347] p-2.5 text-white'>Cadastro</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewHome