import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Detalhes from './pages/detalhes';
import Cadastro from './pages/cadastro';

export default function RoutesConfig() {
    return (
    <Routes>
        <Route path='/' element={<Home />} /> {/* rota page home */}
        <Route path='/detalhes/:filme' element={<Detalhes/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
    );
  }