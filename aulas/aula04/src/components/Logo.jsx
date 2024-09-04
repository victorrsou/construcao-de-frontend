import "./Logo.css";

function Logo(props) {
    return <img className="logo" src={props.imagem} alt={props.texto}></img>;
}

export default Logo;
