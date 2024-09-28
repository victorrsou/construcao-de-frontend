// para consultar parametro de uma rota 
import { useParams } from "react-router-dom";

export default function Perfil() {
    const { id } = useParams();

    return (
        <>
            { id == 1
            ? <h2>Perfil do Aluno</h2>
            : <p>Não pode!!!</p> }
        </>
    );
}
