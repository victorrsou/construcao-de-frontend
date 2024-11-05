function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <button onClick={(e) => props.onSair(false)}>Sair</button>
    </>
  );
}

export default Home;