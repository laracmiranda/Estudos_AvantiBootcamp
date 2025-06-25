# 📘 Aula 04 – ORM com Prisma

> Nesta aula aprendemos o que é um ORM, suas vantagens e como utilizá-lo na prática com o Prisma no Node.js para facilitar a comunicação com bancos de dados relacionais.

---

## 🧠 O que é ORM?

**ORM (Object-Relational Mapping)** é uma técnica de programação que faz o **mapeamento entre objetos do código** e **entidades do banco de dados relacional**.

### ✅ Vantagens do ORM:

- Permite trabalhar com **objetos e métodos** ao invés de comandos SQL
- Facilita a **manutenção do código**
- Elimina a repetição de queries SQL
- Simplifica a migração entre **diferentes bancos de dados** (ex: PostgreSQL, MySQL)

> 💡 Cada registro do banco pode ser tratado como um **objeto** dentro do código.

---

## 🔧 Prisma ORM

O **Prisma** é um ORM moderno para **Node.js** que facilita o desenvolvimento de aplicações com banco de dados.

### 🚫 Boas práticas:
- Evitar **SQL diretamente no código**
- Não deixar **credenciais de banco** expostas no código-fonte
- Utilizar **variáveis de ambiente** via `.env`

---

## ⚙️ Parte prática

### 📦 Instalação do Prisma

```bash
npm install @prisma/client
npm install prisma --save-dev
```
### 🛠️ Inicialização do Prisma

```bash
npx prisma init
```
**Isso irá criar:**
Uma pasta `prisma/`
Um arquivo `schema.prisma`
Um arquivo `.env` para as configurações do banco

### 🔗 Conexão com o banco de dados

1. Editamos o arquivo `.env` para incluir as credenciais:

```ini
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco"
```
2. Atualizamos o schema com o banco existente:
```bash
npx prisma db pull
```
3. Adicionamos o `.env` ao `.gitignore` para evitar o versionamento das credenciais.

--- 

## 🔄 Atualização dos métodos da API

Substituímos as queries SQL diretas por métodos do Prisma ORM:

| Método do Prisma | Equivalente SQL     |
|------------------|---------------------|
| `findMany()`     | `SELECT * FROM`     |
| `create()`       | `INSERT INTO`       |
| `update()`       | `UPDATE`            |
| `delete()`       | `DELETE`            |
