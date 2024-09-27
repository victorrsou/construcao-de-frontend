import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>
            <main>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/perfil">Perfil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Sair</NavLink>
                        </li>
                    </ul>
                </nav>
                <section>
                    <Outlet />
                </section>
            </main>
            <footer>Copyright (c) 2024</footer>
        </>
    );
}
