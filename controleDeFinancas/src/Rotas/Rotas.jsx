import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewLogin from '../View/ViewLogin';
import ViewHome from '../View/ViewHome';
import ViewCadastro from '../View/ViewCadastro';
import ViewPrincipal from '../View/ViewPrincipal';
import ViewReceitas from '../View/ViewReceitas';
import ViewDespesas from '../View/ViewDespesas';
import { AuthProvider } from '../context/AuthProvider';

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
          <Route path="/receitas" element={
            <ViewReceitas />
            }/>
          <Route path="/despesas" element={
            <ViewDespesas />
            }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Rotas;

