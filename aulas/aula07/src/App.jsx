// npm install react-router-dom;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;