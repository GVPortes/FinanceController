import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewLogin from '../View/ViewLogin';
import ViewHome from '../View/ViewHome';

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
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;