# 📘 Aula 04 – Boas Práticas em APIs + Autenticação com JWT

> Nesta aula abordamos boas práticas na criação de rotas e URLs, autenticação e autorização de usuários, e implementação de segurança utilizando JWT na API.
*Essa aula abordou fundamentos de segurança e boas práticas essenciais para construir APIs robustas, organizadas e confiáveis.*

---

## 🌐 Boas Práticas para Definição de URLs em APIs

- **🔹 Simplicidade**: Use URLs simples e descritivas que representem os recursos (ex: `/usuarios`, `/produtos`).
- **🔹 Nomeclatura no plural**: Representa coleções de dados (ex: `/usuarios`, e não `/usuario`).
- **🔹 Uso correto dos métodos HTTP**: Utilize `GET`, `POST`, `PUT` e `DELETE` de acordo com a operação.
- **🔹 Evitar URLs longas e complexas**
- **🔹 Nomes compostos com hífen**: Exemplo: `/usuarios-registrados`
- **🔹 Versionamento da API**: Incluir a versão na URL, como `/api/v1/usuarios`, para garantir compatibilidade futura.

---

## 🔧 Boas Práticas para Parâmetros

### 📬 1. Headers
- Metadados enviados com a requisição HTTP (ex: autenticação, idioma, tipo de conteúdo).
- **Boa prática**: Evitar grandes volumes de dados.

### 📍 2. Path Parameters
- Parâmetros embutidos na URL para identificar recursos.
- **Boa prática**: Usar para identificar **recursos específicos**. Evitar passar dados sensíveis.

### 🔎 3. Query Parameters
- Parâmetros opcionais usados para **filtros**, **ordenação** ou **paginação**.
- **Boa prática**: Usar de forma controlada, evitando excesso de parâmetros para manter URLs limpas.

---

## 🔐 Autenticação vs Autorização

| Conceito       | Descrição |
|----------------|-----------|
| **Autenticação** | Verifica **quem é você**. Confirma a identidade via e-mail, senha ou token. |
| **Autorização**  | Verifica **o que você pode fazer**. Define permissões e acessos após autenticação. |

---

## 🪙 JWT – JSON Web Token

- **Padrão aberto** para transmitir informações de forma segura entre duas partes.
- Composto por:
  - **Payload**: dados que serão transportados
  - **Secret**: chave de assinatura
  - **Expiration**: tempo de expiração do token

Exemplo de geração:
```js
const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '4h' });
```

---

## 💻 Parte Prática

### 🗂️ Organização de Pastas

| Pasta          | Finalidade                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| `routes/`      | Contém os arquivos de rotas. Exporta funções para o servidor (`server.js`) |
| `controllers/` | Conecta as requisições ao banco de dados (lógica de controle)              |
| `middlewares/` | Verificações como autenticação/autorizações antes de chegar no controller  |

---

### 🔒 Autenticação de Usuários

#### 📦 Dependências instaladas:

```bash
npm install bcryptjs jsonwebtoken
```

#### 🔑 Hash da senha:

```js
const passhash = bcrypt.hashSync(password, 10);
```

> Adiciona um **salt** de 10 caracteres aleatórios antes de gerar o hash da senha.

#### 🔐 Login:

* Criado em `src/controllers/LoginController.js`
* Verifica:

  * Se o e-mail existe no banco
  * Se a senha informada corresponde ao hash armazenado
* Se válidos, gera o token de autenticação com JWT

---

### 🛡️ Autorização

* Criamos a pasta `middlewares/` para proteger rotas.
* As requisições passam **primeiro pela verificação do token**, e só depois seguem para o controller.

---

## ⚠️ Atenção às Boas Práticas de Segurança

* **Nunca salvar senhas em texto plano** — sempre gerar hash (ex: com `bcrypt`)
* **Nunca retornar senhas**, nem mesmo com hash, nos métodos `GET`
* **Selecionar apenas os atributos necessários** ao retornar dados de usuários
