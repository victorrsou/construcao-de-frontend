import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Formulario from "./Formulario";
import Conteudo from "../components/Conteudo";
import Cabecalho from "../components/Cabecalho";
import { atualizar, buscarUm } from "../services/ContatoService";


function Editar() {

    const [contato, setContato] = useState({});
    const [erro, setErro] = useState("");

    const {id} = useParams();

    const carregar = async () => {
        const resposta = await buscarUm(id);
        if (resposta.sucesso) {
            setContato(resposta.dados);
        } else {
            setErro(resposta.mensagem);
        }
    };

    const trataEnviar = async (data) => {
        const resposta = await atualizar({id, ...data});
        if (resposta.sucesso) {
            navigate("/");
        } else {
            setErro(resposta.mensagem);
        }
    };

    useEffect(() => {
        carregar();
    }, []);

    return (
        <>
            <Cabecalho />
            <Conteudo>
                <h2>Editar Contato</h2>
                <Formulario trataEnviar={trataEnviar} valores = {contato} />
                {erro && <p>{erro}</p>}
            </Conteudo>
        </>
    );
}

export default Editar;