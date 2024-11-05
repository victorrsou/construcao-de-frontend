function Login(props) {
    return (
      <>
        <h1>Login</h1>
        <button onClick={(e) => props.onEntrar(true)}>Entrar</button>
      </>
    );
  }
  
  export default Login;