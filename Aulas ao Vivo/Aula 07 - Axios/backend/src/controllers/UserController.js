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

    async findUser(request, response) {
        const { id } = request.params;

        try {
        const usuario = await prismaClient.user.findUnique({
            where: { id },
            select: { id: true, name: true, email: true, phone: true, isAdmin: true },
        });
        return response.status(200).json(usuario);
        } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
        }
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
        const { id } = request.params;
        const { name, email, phone, isAdmin, password } = request.body;    
    
        try{
            const user = await prismaClient.user.findUnique({
                where: { id }
            })
        
            if (!user){
                return response.status(404).json("Usuário nao encontrado");
            }

            const dataToUpdate = {
                name, email, phone, isAdmin,
            };

            if (password){
                const hashedPassword = bcrypt.hashSync(password, 10);
                dataToUpdate.password = hashedPassword;
            }
        
            const usuarios = await prismaClient.user.update({
                where: { id },
                data: dataToUpdate,
                select: { id:true, name:true, email:true, phone:true }
            });
            return response.status(200).json(usuarios);
        
        } catch (error){
            return response.status(500).json({ error: "Erro interno do servidor"});
        }
    }

    async deleteUser(request, response) {
    const { id } = request.params;

    try {
      const user = await prismaClient.user.findUnique({ where: { id } });

      if (!user) {
        return response.status(404).json({ error: "Usuário não encontrado" });
      }

      await prismaClient.user.delete({ where: { id } });

      return response.status(204).send();

    } catch (error) {
      return response.status(500).json({ error: "Internal server error" });
    }
    }
}