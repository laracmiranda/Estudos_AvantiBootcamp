# 📘 Aula 05 – Fundamentos de Front-End e Introdução ao React

> Nesta aula vimos os fundamentos do front-end com HTML, CSS, responsividade com Flexbox e uma introdução prática ao ReactJS com Vite.

---

## 🎨 O que é Front-End?

Parte de um sistema com a qual o **usuário interage diretamente**. Inclui:
- Interfaces gráficas
- Layouts
- Botões, formulários e elementos visuais

🔍 É essencial pensar na **experiência do usuário (UX)** ao construir o front-end.

---

## 🧱 HTML e CSS

### 🔤 HTML – Linguagem de Marcação

Define a **estrutura e conteúdo** de uma página web (texto, imagens, links, multimídia).

#### 🏷️ Principais tags HTML:

| Tipo            | Exemplos |
|-----------------|----------|
| **Cabeçalho**   | `<html>`, `<head>`, `<title>` |
| **Corpo**       | `<body>`, `<h1>`, `<p>`, `<ul>`, `<li>`, `<a>`, `<img>` |
| **Estruturação**| `<div>`, `<section>`, `<header>`, `<footer>`, `<main>` |
| **Formatação**  | `<em>`, `<strong>`, `<b>`, `<i>`, `<u>`, `<code>`, `<blockquote>` |
| **Formulário**  | `<form>`, `<input>`, `<label>`, `<select>`, `<button>` |

---

### 🎨 CSS – Estilização

Define o **visual** da página: cores, espaçamentos, fontes, animações, etc.

#### 📌 Características do CSS:

- **Seletores**: Define quais elementos serão estilizados (`.classe`, `#id`, `tag`)
- **Propriedades e valores**: Define o estilo aplicado
- **Cascata**: Regras aplicadas em ordem de precedência
- **Compatibilidade entre navegadores**
- **Reutilização e modularidade**
- **Layout responsivo** com:
  - `Media queries`
  - `Flexbox`
  - `Grid`
- **Animações e transições**: Sem uso de JS

---

## 📱 Responsividade com Flexbox

Permite criar layouts adaptáveis a diferentes dispositivos de forma simples.

### ⚙️ Conceitos do Flexbox:

- **Container flexível**: `display: flex;`
- **Direção do layout**: `flex-direction: row | column`
- **Alinhamento e justificação**: `justify-content`, `align-items`
- **Redimensionamento e reorganização** automática dos itens filhos

📌 **Resumo**:
- `HTML` → Estrutura  
- `CSS` → Estilo  
- `JavaScript` → Ação

---

## ⚛️ ReactJS – Introdução

**React** é uma biblioteca JavaScript para criar interfaces de usuário **dinâmicas** e **reutilizáveis**.

### 🧩 Principais conceitos:

- **Componentes**: Partes independentes da interface
- **Props**: Permite passar dados de um componente pai para um filho
- **State**: Armazena informações mutáveis no componente
- **JSX**: Sintaxe que mistura HTML com JavaScript
- **Virtual DOM**: Atualiza apenas o necessário, otimizando performance

---

## 🧬 Componentes em React

### 📦 Componentes de Classe

```js
class MeuComponente extends React.Component {
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
}
````

* `componentDidMount`: Após renderizar
* `componentDidUpdate`: Após atualizar
* `componentWillUnmount`: Antes de remover do DOM

---

### 🧪 Componentes Funcionais com Hooks

Utilizam funções JavaScript + hooks para acessar estado, efeitos, etc.

```js
useEffect(() => {
  // efeito
  return () => {
    // limpeza
  };
}, [dependências]);
```

| Fase        | Hook Equivalente                        |
| ----------- | --------------------------------------- |
| Montagem    | `useEffect()`                           |
| Atualização | `useEffect()` (com deps)                |
| Desmontagem | `return () => {}` dentro do `useEffect` |

---

## 🪝 Principais Hooks do React

| Hook          | Função                                      |
| ------------- | ------------------------------------------- |
| `useState`    | Armazena e altera estados locais            |
| `useEffect`   | Lida com efeitos colaterais (fetch, timers) |
| `useContext`  | Acessa dados globais do contexto            |
| `useReducer`  | Gerencia estados complexos                  |
| `useCallback` | Memoriza funções                            |
| `useMemo`     | Memoriza valores calculados                 |

✅ **Vantagens dos hooks**:

* Simplicidade
* Reutilização de lógica
* Flexibilidade

---

## 🛠️ Parte Prática – React com Vite

### 🚀 Criando um projeto com Vite + React

```bash
npm create vite@latest nome-da-pasta
# Escolher: Framework → React
# Variant → JavaScript + SWC

cd nome-da-pasta
npm install
npm run dev
```

### 📂 Componentes

* Criamos um componente simples para entender como passar **propriedades (`props`)** entre componentes.
* Exploramos a criação de componentes reutilizáveis e o uso de `useState` para controlar dados dentro da interface.

---

📌 *A aula apresentou os principais fundamentos de desenvolvimento front-end e deu os primeiros passos práticos com ReactJS.*
