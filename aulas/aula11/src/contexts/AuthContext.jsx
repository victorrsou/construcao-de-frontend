import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [usuario, setUsuario] = useState({
    email: "",
    perfil: "",
    logado: false,
  });

  const login = (dados) => {
    if (dados.email === "jose@iesb.br" && dados.senha === "abcd1234") {
      setUsuario({ email: dados.email, perfil: "aluno", logado: true });
    }
  };

  const logout = () => {
    setUsuario({ email: "", perfil: "", logado: false });
  };

  const contexto = {
    usuario,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider}