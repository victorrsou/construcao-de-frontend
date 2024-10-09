function InputNome({register, error}) {
    const regras = {
        required: 'Nome é obrigatório',
        minLength: {
            value: 2,
            message: 'O nome deve ter pelo menos 2 caracteres'
        },
        maxLength: {
            value: 100,
            message: 'O nome deve ter até 100 caracteres'
        }
    }

    return (
        <>
            <label htmlFor="nome">Nome</label>
            <input type="text" {...register("nome", regras)} />
            {error && <p>{error.message}</p>}
        </>
    );
}

export default InputNome;