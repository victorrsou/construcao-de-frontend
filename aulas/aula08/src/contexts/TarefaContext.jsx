import { createContext, useState } from "react";

const TarefaContext = createContext();

function TarefaProvider(props) {
    const [tarefas, setTarefas] = useState(["Estudar React", "Fazer a pratica"]);

    const incluir = (tarefa) => {
        // clone do tarefas ...
        setTarefas([...tarefas, tarefa]);
    };

    const remover = (tarefa) => {
        setTarefas(tarefas.filter((item) => item != tarefa));
    };

    const contexto = { tarefas, incluir, remover };

    return (
        <TarefaContext.Provider value={contexto}>
            {props.children}
        </TarefaContext.Provider>
    );
}

// export default serve apenas para um componente !
export { TarefaContext, TarefaProvider };
