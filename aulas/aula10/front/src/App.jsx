import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listar from "./pages/Listar";
import Novo from "./pages/Novo";
import Editar from "./pages/Editar";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Listar />} />
                <Route path="/novo" element={<Novo />} />
                <Route path="/editar/:id" element={<Editar />} />
                <Route path="*" element={<p>ERROU</p>} />
            </Routes>
        </BrowserRouter>
    );
}
