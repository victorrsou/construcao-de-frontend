import axios from "axios";

const url = import.meta.env.VITE_URL_API;

function carregarContatos() {
    const dados = [];
    axios
        .get(import.meta.env.VITE_URL_API)
        .then((response) => dados.push(...response.data))
        .catch((error) => new Error("Deu ruim"));
    return dados;
}

async function criarContato(contato) {
    return axios
        .post(url, contato)
        .then((response) => {
            return { sucesso: true, dados: response.data };
        })
        .catch((error) => {
            return { sucesso: false, mensagem: error.message };
        });

    // forma tradicional  
    // try {
    //     const response = await axios.post(url, contato)
    //     return {sucesso: true, dados: response.data}
    // } catch (error) {
    //     return { sucesso: false, mensagem: error.message}
    // }
}

function atualizarContato(contato) {}

function removerContato(contato) {}

function obterContato(contato) {}

export { carregarContatos, criarContato };
