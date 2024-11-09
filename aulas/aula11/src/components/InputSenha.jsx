function InputSenha(props) {
    const regras = {
        required: 'Senha é obrigatória',
        minLength: {value: 6, message: 'Senha deve ter tamanho mínimo de 6 caracteres'}
    };

    return (
        <>
            <label htmlFor="senha">Senha:</label>
            <input type="password" {...props.register("senha", regras)} />
            {props.error && <p>{props.error.message}</p>}
        </>
    )
}

export default InputSenha;
