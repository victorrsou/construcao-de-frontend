import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Erro404 from "./pages/Erro404";
import Login from './pages/Login';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="home" element={<Home />}/>
          <Route path="/perfil/:id" element={<Perfil />}/>
          <Route path="*" element={<Erro404 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
