# 📘 Aula 01 – Modelagem de Banco de Dados

> Resumo dos principais pontos abordados na aula sobre modelagem e fundamentos de bancos de dados relacionais e não relacionais.

---

## 🗃️ Tipos principais de SGBD

### 🔗 Relacional
- Armazena dados em **tabelas relacionadas**
- Estrutura definida previamente: colunas, tipos e relacionamentos
- Utiliza **linguagem SQL**
- Segue os princípios **ACID** (Atomicidade, Consistência, Isolamento e Durabilidade)

### 🌀 Não Relacional (NoSQL)
- Armazena dados **semiestruturados ou não relacionados**
- Estrutura flexível, sem necessidade de esquema fixo
- Permite adicionar campos livremente
- Alta escalabilidade e distribuição

---

## 🧩 Modelagem de Dados Relacional

- **Entidades**: Representam objetos reais (ex: Pessoa, Empresa, Produto)
- **Atributos**: Características de uma entidade (ex: nome, CPF, e-mail)
- **Relacionamentos**: Ligações entre entidades (ex: "Cliente faz Pedido")

---

## 💬 SQL – Structured Query Language

Linguagem padrão usada para manipular bancos de dados relacionais.

---

## 🧮 Tipos de dados no PostgreSQL

| Tipo         | Descrição                                                                 |
|--------------|---------------------------------------------------------------------------|
| `VARCHAR(n)` | String com tamanho máximo definido                                        |
| `TEXT`       | String com comprimento variável                                           |
| `CHAR(n)`    | String com tamanho fixo                                                   |
| `INTEGER`    | Número inteiro                                                            |
| `NUMERIC(p,s)`| Número decimal com precisão (p = total de dígitos, s = casas decimais) |
| `BOOLEAN`    | Verdadeiro ou falso                                                       |
| `DATE`       | Data                                                                      |
| `TIME`       | Hora                                                                      |
| `TIMESTAMP`  | Data e hora                                                               |

---

## 🧱 DDL – *Data Definition Language*

Linguagem para definir a **estrutura** do banco de dados:

- `CREATE`: Cria objetos no banco (ex: tabelas)
- `ALTER`: Modifica a estrutura (ex: adicionar/remover colunas)
- `DROP`: Exclui objetos do banco

---

## ✍️ DML – *Data Manipulation Language*

Linguagem para **manipular dados** existentes:

- `SELECT`: Consulta registros
- `INSERT`: Insere novos registros
- `UPDATE`: Altera registros existentes
- `DELETE`: Remove registros

---

## 🔗 JOIN – Combinação de Tabelas

| Tipo       | Descrição                                                                |
|------------|--------------------------------------------------------------------------|
| `JOIN`     | Retorna apenas dados que existem nas duas tabelas (interseção)          |
| `LEFT JOIN`| Retorna todos da tabela da esquerda e os coincidentes da direita        |
| `RIGHT JOIN`| Retorna todos da direita e os coincidentes da esquerda                 |
| `FULL JOIN`| Retorna todos os registros de ambas as tabelas                          |

---

## 💻 Comandos básicos em SQL

### Criar um banco de dados
```sql
CREATE DATABASE nome_do_banco;
```

### Criar uma tabela
```sql
CREATE TABLE nome_da_tabela (
    coluna1 tipo,
    coluna2 tipo,
    ...
);
```

### Inserir registros
```sql
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor1', 'valor2');
```

### Atualizar registros
```sql
UPDATE nome_da_tabela
SET coluna = 'novo_valor'
WHERE condição;
```

### Consultar dados
```sql
SELECT coluna1, coluna2
FROM nome_da_tabela
WHERE condição;
```

### Deletar registros
```sql
DELETE FROM nome_da_tabela
WHERE condição;
```





