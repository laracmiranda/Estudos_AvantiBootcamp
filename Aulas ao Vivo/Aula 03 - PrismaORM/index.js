import express from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ["query","error"]});
const app = express();
app.use(express.json());


// Método GET - Puxa os dados
app.get("/usuarios", async (request, response) => {
    const usuarios = await prisma.user.findMany();
    return response.status(200).json(usuarios);
})

// Método POST - Insere novos dados
app.post("/usuarios", async (request, response) => {
    const { name, email, phone } = request.body;

    const usuarios = await prisma.user.create({
        data:{ 
            name, email, phone
        }
})
    return response.status(201).json(usuarios);
})

// Método PUT - Atualiza os dados
app.put("/usuarios/:id", async (request, response) => {
    const { name, email, phone } = request.body;
    const { id } = request.params;

    const user = await prisma.user.findUnique({
        where: { id }
    })

    if (!user){
        return response.status(404).json("Usuário nao encontrado");
    }

    const usuarios = await prisma.user.update({
        where: { id },
        data:{
            name, email, phone
        }
    })

    return response.status(200).json(usuarios);
})

// Método DELETE - Deleta os dados
app.delete("/usuarios/:id", async (request, response) => {
    const { id } = request.params;

    const user = await prisma.user.findUnique({
        where: { id }
    })

    if (!user){
        return response.status(404).json("Usuário nao encontrado");
    }

    await prisma.user.delete({
        where: { id }
    });

    return response.status(204).send();
})

// Porta que está rodando
app.listen(8080, () => {
    console.log("Running on port 8080")
})

