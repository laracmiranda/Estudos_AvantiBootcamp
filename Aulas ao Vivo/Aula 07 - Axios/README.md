# 📘 Aula 07 – React.js

> Nessa aula vimos como criar o login e contexto para nossa aplicação

---

Separando nossas chamadas e endpoints utilizando um service para API
serviceApi.js
const API = axios.create({ 
    baseURL: import.meta.env.VITE_API_BASE_URL 
});

export const getUsers = () => API.get("/usuarios");
export const getUserById = (id) => API.get(`/usuario/${id}`);
export const createUser = (data) => API.post("/usuarios", data);
export const updateUser = (id, data) => API.put(`/usuarios/${id}`, data);
export const deleteUser = (id) => API.delete(`/usuarios/${id}`);

export const sign = (data) => API.post("/login", data);

Configuramos um arquivo .env com a porta onde está localizada a API e mapeamos as demais rotas com funções, para que não precise repetir ao longo do código e também proteja a rota da API

Organizamos as pastas novamente
Agora, existe uma pasta em src apenas para as páginas que criamos e definimos as rotas
Home, landingpage, userformPage, login
Outra para os componenta
Footer
Navbar
UserCard
UserForm

Criamos um footer simples e uma navbar que contém o link para a landing page, página de usuários, login e logout. Ela se encaixa dentro da lógica de contexto que criamos, onde quando deslogado, a página de usuários não é exibida e quando logado, ele consegue visualizar


Página de Login
Criada a página de login e a função que irá fazer a conexão com a api no backend para a requisição
const handleLogin = async () => {
        const response = await login({ email, password });
        if(response.status == 200){
            navigate("/")
        }
    }

Lógica do ícone de visualizar a senha:
 
Ícones usados
import { Visibility, VisibilityOff } from "@mui/icons-material";

Estado definido para a exibição da senha
const [show, setShow] = useState(false);

Propriedades dentro do botão
type={show ? 'text' : 'password'}
slotProps={{
    input: {
      endAdornment: (
        <IconButton onClick={() => setShow(!show)}>
          {show ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      ),
    }
}

Lógica de Contexto
Ideia: Permitir que apenas pessoas logadas possam acessar páginas restritas. Permanência do estado de login
É um hook do próprio react
Ele também precisa de um provider, que irá porcionar todo o contexto para as childrens mapeadas
Normalmente em aplicações front-end guardamos algumas informações no próprio navegador, para evitar precisar ter que repetir requisições e conseguir mapear se o usuário está logado ou não, preferências (idioma, tema, etc)
Essas informações podem ficar guardadas por exemplo no: 
localstorage: salva e mantém a permanência dos dados mesmo que a aba seja fechada, até que a aplicação ou o usuário remova
sessionstorage: dados que são removidos quando o usuário fecha a aba e/ou navegador
cookies: são informações que vão junto com requisições. É compartilhado entre várias abas

Para a nossa aplicação, usamos o localstorage para guardar informações importantes, como:
- Verificar se o usuário está logado
- Se pode continuar mostrando a página para ele

`AuthContext.jsx`
// Hook de contexto
export const AuthContext = createContext();

// Depois criamos nossa função de contexto que irá levar tudo que definirmos para os elementos children mapeados

export const AuthProvider = ({ children }) => {
    // -> Aqui já inicia ambos com os dados que estiverem no localStorage <-
    // Estado para o usuário
    const [userId, setUserId] = useState(localStorage.getItem("id"));
    // Estado para o token
    const [token, setToken] = useState(localStorage.getItem("token"));

    // Método de login : Ele vai receber um dado/objeto que vai ser retornado da minha autenticação
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

Para utilizar efetivamente minha função de contexto, precisamos mapear qual parte da minha aplicação irá usá-lo. Dessa forma, para nossa aplicação, mapeamos esse contexto nela toda

`main.jsx`
Estou liberando pra toda minha aplicação o acesso e uso do contexto criado

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)

Também precisamos chamar nossa função de contexto na página de login, para que efetivamente as informações como o token e id sejam armazenadas no localStorage

`Login.jsx`
Adicionamos dentro da função de login nosso método de contexto
const { login } = useAuth();

E dentro da variável de validação, chamamos o método criado e passamos as informações do data

const handleLogin = async () => {
        const response = await login({ email, password });
        if(response.status == 200){
            -> login(response.data);
            navigate("/")
        }
    }
