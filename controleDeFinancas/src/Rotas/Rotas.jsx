import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewLogin from '../View/ViewLogin';
import ViewHome from '../View/ViewHome';
import ViewCadastro from '../View/ViewCadastro';
import ViewPrincipal from '../View/ViewPrincipal';
import ViewReceitas from '../View/ViewReceitas';
import ViewDespesas from '../View/ViewDespesas';

function Rotas() {
  return (
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
  );
}

export default Rotas;

