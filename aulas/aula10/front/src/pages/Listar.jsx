import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Listagem from "./Listagem";
import { carregarContatos, removerContato } from "../services/ContatoService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// useEffect para carregar após a página ser carreada

function Listar() {
    const [contatos, setContatos] = useState([]);
    const [erro, setErro] = useState();
    
    const navigate = useNavigate();

    const onEditar = (id) => {
        navigate(`/editar/${id}`);
    }

    const onRemover = async (id) => {
        const resultado = await removerContato(id);
        if (resultado.sucesso) {
            await carregar();
            setErro("");
        } else {
            setErro(resultado.mensagem);
        }
    };

    const carregar = async () => {
        const resultado = await carregarContatos();
        if (resultado.sucesso) {
            setContatos(resultado.dados);
            setErro("");
        } else {
            setContatos([]);
            setErro(resultado.mensagem);
        }
    };

    // recebe uma função e um array de funções externas. como todas as funções estão dentro do listar, não é ncessário preencher o array
    useEffect(() => {
        carregar();
    }, []);

    return (
        <>
            <Cabecalho />
            <Conteudo>
                {erro && <p>{erro}</p>}
                <h2>Lista de Contatos</h2>
                <Listagem itens={contatos} onEditar={onEditar} onRemover={onRemover} />
            </Conteudo>
        </>
    );
}

export default Listar;
