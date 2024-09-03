import "./Logo.css";

function Logo(props) {
    const texto = "Logo da Aplicação";
    return <img className="logo" src={props.imagem} alt={texto}></img>;
}

export default Logo;
