function Conteudo(props) {
    return (
        // exibir os filhos do componente, props.children
        <main className={props.estilo}>{props.children}</main>
    );
}

export default Conteudo;