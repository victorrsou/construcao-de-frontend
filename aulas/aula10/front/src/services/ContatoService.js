import axios from "axios";

const url = import.meta.env.VITE_URL_API;

function carregarContatos() {
    return axios
        .get(url)
        .then((response) => {
            return { sucesso: true, dados: response.data };
        })
        .catch((error) => {
            return { sucesso: false, mensagem: error.message };
        });
}

function criarContato(contato) {
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

function removerContato(id) {
    return axios
        .delete(`${url}/${id}`) // http://localhost:3000/contatos/id
        .then((response) => {
            return { sucesso: true, dados: response.data };
        })
        .catch((error) => {
            return { sucesso: false, mensagem: error.message };
        });
}

function obterContato(id) {
    return axios
        .get(`${url}/${id}`)
        .then((response) => {
            return { sucesso: true, dados: response.data };
        })
        .catch((error) => {
            return { sucesso: false, mensagem: error.message };
        });
}

export { carregarContatos, criarContato, removerContato, obterContato };
