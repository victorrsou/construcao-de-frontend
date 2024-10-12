// o useEffect dispara algo depois que o componente aparece na tela
import { useContext, useEffect } from "react";
import { TarefaContext } from "../contexts/TarefaContext";

function ListTarefa() {
    // importar o carregar do contexto
    const { tarefas, remover, carregar } = useContext(TarefaContext);
    // tarefas = useContext(TarefaContext).tarefas <<< 

    useEffect(() => {
        carregar();
    }, []);

    return (
        <ul>
            {tarefas.map((item, index) => (
                <li key={index}>
                    {item.tarefa}
                    <button onClick={() => remover(item)}>Remover</button>
                </li>
            ))}
        </ul>
    );
}

export default ListTarefa;
