import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";
import Cabecalho from "../components/Cabecalho";
import { criarContato } from "../services/ContatoService";

function Novo() {
    const [erro, setErro] = useState();

    const navigate = useNavigate();
    // data são os dados do formulário
    const onSalvar = async (data) => {
        const resposta = await criarContato(data);
        if (resposta.sucesso) {
            setErro("");
            navigate("/");
        } else {
            setErro(resposta.mensagem);
        }
    };

    return (
        <>
            <Cabecalho />
            <Conteudo>
                <h2>Novo Contato</h2>
                {erro && <p>{erro}</p>}
                <Formulario trataEnviar={onSalvar} />
            </Conteudo>
        </>
    );
}

export default Novo;
