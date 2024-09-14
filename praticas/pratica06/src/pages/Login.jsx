import Conteudo from "../components/Conteudo";
import Titulo from "../components/Titulos";
import FormLogin from "./FormLogin";

function Login(props) {
    return (
        <Conteudo>
            <Titulo texto="Aluno Online" />
            <FormLogin navegaPara={props.navegaPara} />
        </Conteudo>
    );
}

export default Login;