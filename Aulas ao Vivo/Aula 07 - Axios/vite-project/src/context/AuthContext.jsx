import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// Vai levar todo esse contexto para as childrens mapeadas
export const AuthProvider = ({ children }) => {
    // Estado para o usuário
    const [userId, setUserId] = useState(localStorage.getItem("id"));
    // Estado para o token
    const [token, setToken] = useState(localStorage.getItem("token"));

    // Método de login
    const login = (data) => {
        // Inicializando os estados que criamos
        setUserId(data.userId);
        setToken(data.token);

        // Salva o id do usuário que vem no data dentro do local storage após ele ser autenticado
        localStorage.setItem("id", data.userId)
        // Quando usuário estiver logado seta o token que vem no data dentro do localstorage
        localStorage.setItem("token", data.token)
    }

    // Método de logout
    const logout = () => {
        // Limpa as informações
        setUserId(null);
        setToken(null);
        localStorage.removeItem("id");
        localStorage.removeItem("token");
    }

    return(
        // Disponibiliza as informações para um contexto específico
        <AuthContext.Provider value={{ userId, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);