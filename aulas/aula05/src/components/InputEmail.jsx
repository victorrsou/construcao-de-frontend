function InputEmail(props) {
  return (
    <>
      <label htmlFor="email">{props.texto}</label>
      <input
        type="email"
        id="email"
        name="email"
        value={props.valor}
        onChange={(e) => {props.alterarValor(e.target.value)}}
      />
    </>
  );
}

export default InputEmail;
