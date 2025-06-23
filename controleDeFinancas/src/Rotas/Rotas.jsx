import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewLogin from '../View/ViewLogin';
import ViewHome from '../View/ViewHome';
import ViewCadastro from '../View/ViewCadastro';
import ViewPrincipal from '../View/ViewPrincipal';
import { AuthProvider } from '../context/AuthProvider';
import ViewSimulacao from '../View/ViewSimulacao';

function Rotas() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ViewHome />
            }/>
          <Route path="/login" element={
            <ViewLogin />
            }/>
          <Route path="/cadastro" element={
            <ViewCadastro />
            }/>
          <Route path="/principal" element={
            <ViewPrincipal />
            }/>
          <Route path="/simulacao" element={
              <ViewSimulacao />
            }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Rotas;

