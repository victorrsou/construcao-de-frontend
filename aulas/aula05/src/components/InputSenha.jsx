function InputSenha(props) {
    return (
      <>
        <label htmlFor="senha">{props.texto}</label>
        <input type="password" id="senha" name="senha" value={props.valor} onChange={(e) => {props.alterarValor(e.target.value)}} />
      </>
    );
  }
  
  export default InputSenha;
  