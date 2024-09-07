function Painel(props) {
  return (
    <arcticle>
      <h3>{props.texto}</h3>
      <ul>
        {props.itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </arcticle>
  );
}

export default Painel;
