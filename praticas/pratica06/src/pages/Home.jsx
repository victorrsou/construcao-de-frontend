import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Titulo from "../components/Titulos";

function Home(props) {
    return (
        <Conteudo>
            <Titulo texto="Página Inicial" />
            <Menu navegaPara={props.navegaPara}/>
        </Conteudo>
    );
}

export default Home;