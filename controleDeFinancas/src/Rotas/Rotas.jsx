import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewLogin from '../View/ViewLogin';
import ViewHome from '../View/ViewHome';
import ViewCadastro from '../View/ViewCadastro';

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
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;