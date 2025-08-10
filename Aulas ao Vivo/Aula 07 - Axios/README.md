# 📘 Aula 07 – React.js

> Nessa aula vimos como criar o login e lógicas de contexto para nossa aplicação.

---

## 📌 Separando chamadas e endpoints com um *service* para API

**`serviceApi.js`**
* Configuramos um arquivo `.env` com a porta onde está localizada a API.
* Mapeamos as rotas com funções para evitar repetição no código e proteger a rota da API.

```javascript
const API = axios.create({ 
    baseURL: import.meta.env.VITE_API_BASE_URL 
});

export const getUsers = () => API.get("/usuarios");
export const getUserById = (id) => API.get(`/usuario/${id}`);
export const createUser = (data) => API.post("/usuarios", data);
export const updateUser = (id, data) => API.put(`/usuarios/${id}`, data);
export const deleteUser = (id) => API.delete(`/usuarios/${id}`);

export const sign = (data) => API.post("/login", data);
```

---

## 📂 Organização de pastas

* **`src/pages`** → *Home*, *LandingPage*, *UserFormPage*, *Login*
* **`src/components`** → *Footer*, *Navbar*, *UserCard*, *UserForm*

Criamos:

* Um **footer** simples.
* Uma **navbar** com links para *Landing Page*, página de usuários, login e logout.
* Integração da navbar com a lógica de contexto, exibindo páginas restritas apenas quando logado.

---

## 🔑 Página de Login

Função de conexão com a API no backend:

```javascript
const handleLogin = async () => {
    const response = await login({ email, password });
    if (response.status == 200) {
        navigate("/");
    }
}
```

### Lógica para visualizar a senha

**Ícones usados:**

```javascript
import { Visibility, VisibilityOff } from "@mui/icons-material";
```

**Estado:**

```javascript
const [show, setShow] = useState(false);
```

**Propriedades no botão:**

```javascript
type={show ? 'text' : 'password'}
slotProps={{
    input: {
        endAdornment: (
            <IconButton onClick={() => setShow(!show)}>
                {show ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        ),
    }
}}
```

---

## 🌐 Lógica de Contexto

**Objetivo:**
Permitir que apenas pessoas logadas possam acessar páginas restritas, mantendo o estado de login.

**Onde armazenar informações:**

* **localStorage** → mantém dados mesmo com a aba fechada.
* **sessionStorage** → apaga dados ao fechar o navegador.
* **cookies** → enviados junto com requisições e compartilhados entre abas.

**Na aplicação usamos `localStorage` para:**

* Verificar se o usuário está logado.
* Decidir se a página pode ser exibida.

---

### **`AuthContext.jsx`**

Hook de Contexto:
```javascript
export const AuthContext = createContext();
```

Depois criamos nossa função de contexto que irá levar tudo que definirmos para os elementos children mapeados:
```javascript
export const AuthProvider = ({ children }) => {
    // -> Aqui já inicia ambos com os dados que estiverem no localStorage <-
    // Estado para o usuário
    const [userId, setUserId] = useState(localStorage.getItem("id"));
    // Estado para o token
    const [token, setToken] = useState(localStorage.getItem("token"));

    // Método de login: Ele vai receber um dado/objeto que vai ser retornado da minha autenticação
    const login = (data) => {
        // Inicializando os estados que criamos
        setUserId(data.userId);
        setToken(data.token);

        // Salva o id do usuário que vem no data dentro do local storage após ele ser autenticado
        localStorage.setItem("id", data.userId);
        // Quando usuário estiver logado seta o token que vem no data dentro do localstorage
        localStorage.setItem("token", data.token);
    }

    // Método de logout: Limpa as informações armazenadas
    const logout = () => {
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
```

---

### Aplicando o contexto
> Para utilizar efetivamente a função de contexto, precisamos mapear qual parte da minha aplicação irá usá-lo. Dessa forma, para nossa aplicação, mapeamos esse contexto nela toda

Liberando pra toda minha aplicação o acesso e uso do contexto criado
**`main.jsx`**

```javascript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
```

Também precisamos chamar nossa função de contexto na página de login, para que efetivamente as informações como o **token** e **id** sejam armazenadas no localStorage
**`Login.jsx`**

Adicionamos dentro da função de login nosso método de contexto:
```javascript
const { login } = useAuth();
```
E dentro da variável de validação, chamamos o método criado e passamos as informações do data:
```javascript
const handleLogin = async () => {
    const response = await login({ email, password });
    if (response.status == 200) {
        login(response.data);
        navigate("/");
    }
}
```

#### Demais componentes:

**`Navbar.jsx`**
Adicionado o método de logout:

```javascript
const { logout } = useAuth();

const handleLogout = () => {
    logout();
    navigate("/");
}
<Button color="inherit" onClick={handleLogout}>Sair</Button>
```

---

## 🔒 Protegendo rotas

**`App.jsx`**
Criando lógica de contexto para bloquear todas quando o usuário não estiver logado

**Como funciona?** 🤔
Se tiver o userId no meu contexto, significa que o usuário está logado

Então recebemos um componente, que pode ser qualquer uma de nossas páginas e, caso existir o userId, o componente será renderizado. Caso não receba, o usuário será direcionado para a página inicial ou de login

```javascript
const AuthRoutes = ({component: Component}) => {
  const { userId } = useAuth();
  // UserID - Se existir: Renderiza o componente. Se não existir: Direciona pra página inicial
  return userId ? <component /> : <Navigate to="/login"/>
}
```

Então utilizamos nosso método dentro das rotas que possuímos dentro do `App.jsx`

```javascript
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthRoutes component={LandingPage} />} />
          <Route path="/usuarios" element={<AuthRoutes component={Home} />} />
          <Route path="/registro" element={<AuthRoutes component={UserFormPage} />} />
          <Route path="/editar-usuario/:id" element={<AuthRoutes component={UserFormPage} />} />
        </Routes>
      </BrowserRouter>
  )
}
```

Assim, as páginas só são acessíveis se o usuário estiver logado!

---

## 🛡 Controle de ações no `UserCard.jsx`
> Não é ideal que o usuário logado possa editar os demais usuários além dele. Então pra isso, adicionamos a variável de contexto dentro dos cards de usuários também!

* Como o map já usa o user.id, podemos criar uma lógica utilizando ele mesmo para conferir qual o usuário logado e definir que ele não pode manipular os demais, desativando os botões.

Propriedade dentro do botão:
```javascript
disabled={userId != user.id}
```

**Exemplo completo:**

```javascript
<CardActions>                             
    <IconButton 
        disabled={userId != user.id}
        color="primary" 
        onClick={() => navigate(`/editar-usuario/${user.id}`)}>
        <EditIcon />
    </IconButton>
    <IconButton 
        disabled={userId != user.id}
        color="error" 
        onClick={() => handleDelete(user.id)}>
        <DeleteIcon />
    </IconButton>
</CardActions>
```

---

## 🛠 Correções

* Criado estado de erro no login:

```javascript
const [error, setError] = useState(false);
```

* No `handleLogin`, adicionado `else` para alterar estado:

```javascript
else {
    setError(true);
}
```

* Exibição da mensagem:

```javascript
{error && <p color="red">Usuário ou e-mail inválidos</p>}
```