import { useForm } from "react-hook-form";
import InputNome from "../components/InputNome";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function FormPerfil() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {id} = useParams();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputNome register={register} error={errors.nome} />
            <InputEmail register={register} error={errors.email}/>
            <InputSenha register={register} errpr={errors.senha}/>
            <Botao texto="Salvar" />
            
        </form>
    );
}

export default FormPerfil;