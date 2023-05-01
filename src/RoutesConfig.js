import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Detalhes from './pages/detalhes';
import Cadastro from './pages/cadastro';
import ErrorPage from './pages/errorPage';

export default function RoutesConfig() {
    return (
    <Routes>
        <Route path='/' element={<Home />} /> {/* rota page home */}
        <Route path='/detalhes/:id' element={<Detalhes/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    );
  }