import Link from "./Link";

function Menu() {
  const opcoes = ["Home", "Perfil", "Sair"];

  return (
    <nav>
      <ul>
        {/* map, percorre todos os itens de um array e aciona uma função  */}
        {opcoes.map((opcao, index) => (
        // Não está sabendo diferenciar o elemento na renderização da página. por isso a criação do index 
          <li key={index}>
            <Link texto={opcao} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
