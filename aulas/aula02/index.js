const root = document.getElementById("root");

// Componentes da aplicação 
function Cabecalho() {
    const header = document.createElement("header");
    return header;
}

function Principal() {
    const main = document.createElement("main");
    return main;
}

function Rodape() {
    const footer = document.createElement("footer")
    return footer;
}

function Botao(nome) {
    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("value", nome);
    return button;
}

function FormLogin() {
    const button = Botao("Entrar");

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "post");
    form.append(button);
    return form;
}


// páginas da aplicação
function Perfil() {
    root.append(Cabecalho());
    root.append(Principal());
}

function Home() {
    root.append(Cabecalho());
    root.append(Principal());
}

function Login() {
    const main = Principal();
    main.append(FormLogin());
    root.append(main);
    root.append(Rodape());
}

Login();