import express from "express"
import pg from "pg"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Faz a conexão com o banco de dados
const { Pool } = pg;
const pool = new Pool ({
    user: "postgres",
    password: "adminlara",
    host: "localhost",
    port: 5432,
    database: "avanti"
})

// Método GET - Puxa os dados
app.get("/usuarios", async (request, response) => {
    // const usuarios = await pool.query("SELECT * FROM usuarios");
    const usuarios = await prisma.usuarios.findMany();
    return response.json(usuarios).status(200);
})

// Método POST - Insere novos dados
app.post("/usuarios", async (request, response) => {
    const { nome, email, telefone } = request.body;
    const usuario = await pool.query("INSERT INTO usuarios (nome, email, telefone) VALUES ($1, $2, $3)", [nome, email, telefone])
    return response.json(usuario).status(201);
})

// Método PUT - Atualiza os dados
app.put("/usuarios/:id", async (request, response) => {
    const { nome, email, telefone } = request.body;
    const { id } = request.params;
    const user = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
    if (user.rowCount < 1){
        return response.status(404).json("Usuário não encontrado");
    }
    const usuarios = await pool.query("UPDATE usuarios SET nome = $1, email = $2, telefone = $3 WHERE id = $4", [nome, email, telefone, id])

    return response.json().status(200);
})

// Método DELETE - Deleta os dados
app.delete("/usuarios/:id", async (request, response) => {
    const { id } = request.params;

    const user = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
    if (user.rowCount < 1){
        return response.status(404).json("Usuário não encontrado");
    }
    const usuarios = await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);

    return response.status(204).send();
})

// Porta que está rodando
app.listen(8080, () => {
    console.log("Running on port 8080")
})

