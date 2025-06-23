# 📘 Aula 02 – Introdução ao Desenvolvimento Backend

> Resumo dos principais conceitos sobre HTTP, status codes, métodos, APIs e REST.

---

## 🌐 Protocolo HTTP

### 🧭 O que é?
- Protocolo de comunicação usado para transferir dados pela internet.
- Baseado no modelo de **requisição e resposta** entre **cliente** (ex: navegador) e **servidor** (ex: site).

### 🔁 Como funciona?
1. O cliente envia uma requisição HTTP ao servidor (com método, URL, cabeçalhos, etc.).
2. O servidor processa e retorna uma resposta (com status, cabeçalhos e, opcionalmente, um corpo de mensagem).

---

## 🔒 HTTP x HTTPS

| HTTP | HTTPS |
|------|-------|
| Dados **não criptografados** | Dados **criptografados** via SSL/TLS |
| Risco de interceptação | Comunicação segura e protegida |
| Usado em sites públicos, blogs, notícias | Ideal para redes sociais, e-commerce, dados sensíveis |

---

## 📌 Características Principais do HTTP

- **Stateless:** Cada requisição é independente; o servidor não armazena o estado da sessão.
- **Baseado em texto:** As mensagens são legíveis (linha de status, cabeçalhos e corpo).
- **Cabeçalhos HTTP:** Informações adicionais sobre requisições e respostas (ex: tipo de conteúdo, autenticação).
- **Códigos de Status HTTP:** Informam o resultado da requisição.

---

## 📥 Métodos HTTP

| Método  | Função                                                                 |
|---------|------------------------------------------------------------------------|
| `GET`   | Recupera dados de um recurso                                           |
| `POST`  | Envia dados para criar/atualizar um recurso                            |
| `PUT`   | Atualiza completamente um recurso existente                            |
| `DELETE`| Remove um recurso especificado                                         |
| `PATCH` | Aplica atualizações parciais a um recurso                              |

---

## 📊 Códigos de Status HTTP

### ✅ 1xx – Informacional
- **100 Continue:** Requisição recebida, continue
- **101 Switching Protocols:** Mudança de protocolo aceita

### ✅ 2xx – Sucesso
- **200 OK:** Requisição bem-sucedida
- **201 Created:** Recurso criado
- **204 No Content:** Requisição sem conteúdo de retorno

### 🔁 3xx – Redirecionamento
- **301 Moved Permanently:** URL foi movida permanentemente
- **302 Found:** Redirecionamento temporário

### 🚫 4xx – Erro do Cliente
- **400 Bad Request:** Requisição malformada
- **401 Unauthorized:** Sem autorização
- **404 Not Found:** Recurso não encontrado

### 💥 5xx – Erro no Servidor
- **500 Internal Server Error:** Erro inesperado no servidor
- **503 Service Unavailable:** Serviço indisponível
- **504 Gateway Timeout:** Tempo de resposta excedido

---

## 🔌 API – *Application Programming Interface*

- Conjunto de **regras e definições** para que softwares diferentes se comuniquem entre si.
- **Permite integração** entre serviços, sistemas e aplicativos.
- Garante que os dados sejam acessados de forma **segura e controlada**.

---

## 📡 REST API

- Abordagem que define como usar o protocolo HTTP de forma **padrão** e organizada dentro da API.
- Uma API REST segue princípios como:
  - Uso dos métodos HTTP corretamente (`GET`, `POST`, etc.)
  - Recursos acessíveis via **URLs**
  - Comunicação via **JSON**
  - Stateless: cada requisição é isolada
