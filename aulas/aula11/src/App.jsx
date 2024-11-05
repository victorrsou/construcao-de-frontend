import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Erro404 from "./pages/Erro404";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {logado ? (
          <>
            <Route path="/" element={<Home onSair={setLogado} />} />
            <Route path="/perfil" element={<Perfil />} />
          </>
        ) : (
          <Route path="/" element={<Login onEntrar={setLogado} />} />
        )}
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
