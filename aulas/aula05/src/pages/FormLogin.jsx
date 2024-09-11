import { useState } from "react";
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormLogin(props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const efetuarLogin = (e) => {
        // para o botão enviar não fazer nada
        e.preventDefault();
        props.navegaPara("/home");
        // chamada ao backend
    };

    return (
        <form onSubmit={efetuarLogin}>
            <InputEmail texto="E-mail" valor={email} alterarValor={setEmail} />
            <InputSenha texto="Senha" valor={senha} alterarValor={setSenha} />
            <Botao texto="Entrar" />
        </form>
    );
}

export default FormLogin;
