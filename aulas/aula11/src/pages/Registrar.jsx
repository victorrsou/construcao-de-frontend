import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

function Registrar() {
    const { registrar } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            <h1>Registrar</h1>
            <button
                onClick={() => {
                    registrar({ email: "jose@iesb.br", senha: "abcd1234" });
                    navigate("/");
                }}      
            ></button>
        </>
    );
}

export default Registrar;
