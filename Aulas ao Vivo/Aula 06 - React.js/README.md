# 📚 Aula 06 – React.js

> Nessa aula vimos mais sobre o react e como integrar e consumir a API criada nas aulas anteriores no frontend da aplicação

---

## 📌 Axios

O **Axios** é uma biblioteca do JavaScript para fazer requisições HTTP de forma assíncrona, tanto em navegadores quanto no Node.js.
Oferece uma interface simples para realizar operações como **GET**, **POST**, **PUT** e **DELETE**, além de suportar interceptadores para personalizar solicitações e respostas.
Ele é muito utilizado para interagir com APIs em aplicações JavaScript.

---

## ✨ Características do Axios

* **Sintaxe simples e intuitiva**
  Interface fácil de usar, com métodos simples para as requisições HTTP.

* **Suporte a Promessas**
  Utiliza *promises* para operações assíncronas, facilitando o tratamento de solicitações e respostas.

* **Interceptadores**
  Permite interceptar solicitações e respostas de forma global, facilitando adição de cabeçalhos, tratamento de erros e manipulações centralizadas.

* **Suporte a cancelamento de requisições**
  Possibilita cancelar solicitações pendentes, evitando processamento desnecessário e vazamentos de memória.

---

## ⚙️ Parte prática

### 1️⃣ Instalação de bibliotecas

```bash
npm install axios
npm install cors
npm install react-router-dom
```

* **Axios** → Requisições HTTP.
* **CORS** → Faz com que o backend reconheça o frontend e autorize requisições, mesmo em portas (*hosts*) diferentes.
* **React Router DOM** → Controle de rotas no frontend.

Bibliotecas de estilização:

```
mui-material
mui/icons-material
emotion/react
emotion/styled
```

---

### 2️⃣ Alterações no projeto

* Removido o código da aula anterior para criar um novo conectado à API desenvolvida anteriormente.

---

## 📂 Componentes criados

### **`UserCard.jsx`**

* Criado para exibir usuários.

* Estado para armazenar usuários:

  ```javascript
  const [users, setUsers] = useState([]);
  ```

* **Requisição GET** para buscar usuários:

  ```javascript
  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:porta/");
  }
  ```

* **Exibição com `map`**:

  ```javascript
  users.map((user) => (
    <Informações dos usuários>
  ))
  ```

* **Botão de delete**:

  ```javascript
  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir o usuário?")) {
      await axios.delete(`http://localhost:porta/usuarios/${id}`);
    }
  }
  ```

  * Uso no botão:

    ```jsx
    onClick={handleDelete}
    ```

* **Botão de edição (`PUT`)** usando `useParams`:

  ```javascript
  const { id } = useParams();

  if (id) {
    await axios.put("http://localhost:8080/usuarios", form);
  } else {
    await axios.post("http://localhost:8080/usuarios", form);
  }
  ```

* **Botão para criar usuário** → direciona ao formulário.

* **Título e botão dinâmicos**:

  ```javascript
  {id ? "Editar Usuário" : "Criar Usuário"}
  ```

* **Buscar usuário para edição**:

  ```javascript
  const findUser = async () => {
    if (id) {
      const response = await axios.get(`http://localhost:porta/usuario/${id}`);
      setForm(response.data);
    }
  }
  useEffect(() => { findUser(); }, []);
  ```

* **Filtro de busca**:

  ```javascript
  const [search, setSearch] = useState("");
  const usuariosFiltrados = users.filter((user) =>
    [user.name, user.email, user.phone].some(field =>
      field?.toLowerCase().includes(search.toLowerCase())
    )
  );
  ```

---

### **`UserForm.jsx`**

* Formulário para criar/editar usuários.

* Estado do formulário:

  ```javascript
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false
  });
  ```

* **`onChange` nos inputs**:

  ```javascript
  onChange={(e) => setForm({ ...form, name: e.target.value })}
  ```

* **Enviar formulário (`POST`)**:

  ```javascript
  const handleSubmit = async () => {
    await axios.post("http://localhost:porta/usuarios", form);
  }
  ```

* **Navegar após envio**:

  ```javascript
  const navigate = useNavigate();
  navigate("/rota");
  ```

---

## 📌 `App.js`

Mapeamento de rotas com `react-router-dom`:

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<UserCard />} />
    <Route path="/registro" element={<UserForm />} />
  </Routes>
</BrowserRouter>
```
