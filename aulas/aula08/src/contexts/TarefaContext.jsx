import { createContext, useState } from "react";

const TarefaContext = createContext();

function TarefaProvider(props) {
    const [tarefas, setTarefas] = useState([]);

    // formas simples de executar a integração com a aula09, gravar as requisições
    const carregar = () => {
        // fetch faz uma chamada javascript em qualquer endereço, faz o GET! backend
        // .then para caso dê certo e catch caso dê errado
        fetch("http://localhost:3000/tarefas")
            .then((response) => response.json())
            // data é a resposta do json
            .then((data) => setTarefas(data))
            .catch((error) => console.log("deu ruim!", error.message));
    };

    const incluir = (tarefa) => {
        fetch("http://localhost:3000/tarefas", {
            method: "POST",
            // converte o objeto e formata o json 
            body: JSON.stringify({tarefa}),
        })
            // clone do tarefas ...
            .then((response) => response.json())
            .then((data) => setTarefas([...tarefas, data]))
            .catch((error) => console.log("Deu ruim!", error.message));
    };

    const remover = (tarefa) => {
        fetch(`http://localhost:3000/tarefas/${tarefa.id}`, {
            method: "DELETE",
        })
            .then((response) =>
                setTarefas(tarefas.filter((item) => item != tarefa))
            )
            .catch((error) => console.log("Deu ruim!", error.message));
    };

    // prof: "compartilho com os demais que posso fazer uso desse cara"
    const contexto = { tarefas, incluir, remover, carregar };

    return (
        <TarefaContext.Provider value={contexto}>
            {props.children}
        </TarefaContext.Provider>
    );
}

// export default serve apenas para um componente !
export { TarefaContext, TarefaProvider };
