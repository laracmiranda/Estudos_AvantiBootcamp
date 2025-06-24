// --> Não é mais necessário, pois realizamos a conexão com o banco no novo index.js

import express from "express"

const app = express();
app.use(express.json());


const usuarios = [
    {id: 1, nome: "Lara", idade: 24},
    {id: 2, nome: "Luci", idade: 55},
    {id: 3, nome: "Agnaldo", idade: 58}
]

// Método GET - Puxa os dados
app.get("/usuarios", (request, response) => {
    return response.json(usuarios).status(200);
})

// Método POST - Insere novos dados
app.post("/usuarios", (request, response) => {
    const {id, nome, idade} = request.body;
    usuarios.push({id, nome, idade});
    return response.json(usuarios).status(201);
})

// Método PUT - Atualiza os dados
app.put("/usuarios/:id", (request, response) => {
    const {nome, idade} = request.body;
    const { id } = request.params;

    const index = usuarios.findIndex(u => u.id == id);
    if(index == -1){
        return response.status(404).json({message: "Usuário não encontrado"});
    }

    usuarios[index] = {id, nome, idade};

    return response.json({id, nome, idade}).status(200);
})

// Método DELETE - Deleta os dados
app.delete("/usuarios/:id", (request, response) => {
    const { id } = request.params;

    const index = usuarios.findIndex(u => u.id == id);
    if(index == -1){
        return response.status(404).json({message: "Usuário não encontrado"});
    }
    usuarios.splice(index, 1);
    return response.status(204).send();
})

// Porta que está rodando
app.listen(8080, () => {
    console.log("Running on port 8080")
})

