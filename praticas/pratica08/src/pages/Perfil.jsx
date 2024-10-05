import { useParams } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Secao from "../components/Secao";

function Perfil() {
    const { id } = useParams();
    return (
        <>
            <Cabecalho />
            <Conteudo>
                <Menu />
                <Secao>
                    {id == 1 ? <FormPerfil /> : <p>Usuário não encontrado</p>}
                </Secao>
            </Conteudo>
        </>
    );
}

export default Perfil;
