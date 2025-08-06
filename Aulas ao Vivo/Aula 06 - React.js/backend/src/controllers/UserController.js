import { prismaClient } from "../../database/PrismaClient.js";
import bcrypt from "bcryptjs";

export class UserController { 

    async findAllUsers (request, response) {
    const usuarios = await prismaClient.user.findMany({
        // Não retornar a senha na requisição ao buscar todos os usuários
        select: {id: true, name: true, email: true, phone: true, isAdmin: true}
    });
    return response.status(200).json(usuarios);
}

    async createUser (request, response) {
        const { name, email, password, isAdmin, phone } = request.body;
    
        // Recebe 2 parâmetros: String(senha) e Salt(10 caracteres aleatórios) - Gera o hash
        const passhash = bcrypt.hashSync(password, 10);
    
        const usuarios = await prismaClient.user.create({
            data:{ 
                name: name, email, phone, password: passhash, isAdmin
            },
            // Não retornar a senha na requisição após criar o usuário
            select: {id: true, name: true, email: true, phone: true, isAdmin: true}
    })
        return response.status(201).json(usuarios);
    }

    async updateUser (request, response) {
        const { name, email, phone } = request.body;
        const { id } = request.params;
    
        const user = await prismaClient.user.findUnique({
            where: { id }
        })
    
        if (!user){
            return response.status(404).json("Usuário nao encontrado");
        }
    
        const usuarios = await prismaClient.user.update({
            where: { id },
            data:{
                name, email, phone
            }
        })
    
        return response.status(200).json(usuarios);
    }

    async deleteUser (request, response) {
    const { id } = request.params;

    const user = await prismaClient.user.findUnique({
        where: { id }
    })

    if (!user){
        return response.status(404).json("Usuário nao encontrado");
    }

    await prismaClient.user.delete({
        where: { id }
    });

    return response.status(204).send();
    }
}