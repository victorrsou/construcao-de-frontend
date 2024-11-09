import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

function Menu() {
    const { usuario } = useContext(AuthContext);

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/perfil">Perfil</NavLink>
                </li>
                {usuario.perfil === "admin" && (
                    <li>
                        <NavLink to="/admin">Administração</NavLink>
                    </li>
                )}
                <li>
                    <NavLink to="/" onClick={() => {}}>Sair</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;