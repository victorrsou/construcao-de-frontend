import BotaoSubmit from "../components/BotaoSubmit";
import InputSenha from "../components/InputSenha";
import InputUsuario from "../components/InputUsuario";
import Link from "../components/Link";
import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import Rodape from "../components/Rodape";
import "./Login.css";

function Login() {
    const urlLogo = "https://www.svgrepo.com/show/411955/learn.svg";
    const textoLogo = "Logo da Aplicação";
    return (
        <>
            <main className="login-form">
                <Logo imagem={urlLogo} texto={textoLogo}/>
                <Titulo texto={"Aluno Online"}/> 
                <InputUsuario />
                <InputSenha />
                {/* pode usar string sem as chaves  */}
                <BotaoSubmit texto="Entrar"/>
                <Link texto="Esqueceu a Senha"/>
                <Link texto="Criar uma Conta"/>
            </main>
            <Rodape />
        </>
    );
}

export default Login;