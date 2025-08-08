import bcrypt from "bcryptjs";
import { prismaClient } from "../../database/PrismaClient.js";
import jwt from "jsonwebtoken";

export class LoginController {

    async login(request, response){
        const { email, password } = request.body;

        // Verifica se o e-mail existe
        const user = await prismaClient.user.findUnique({
            where: { email }
        })
        
        // Verifica se o usuário existe
        if (!user){
            return response.status(401).json({"error:": "Unauthorized - Usuário não existe"})
        }

        // Verifica se a senha é valida. Bcrypt compara a senha aberta com o hash no banco
        const userValid = bcrypt.compareSync(password, user.password);

        if (!userValid){
            return response.status(401).json({"error:": "Unauthorized - Credenciais inválidas"})
        }

        // Se o usuário chegou até aqui, quer dizer que o email e a senha dele são válidos
        
        // -- Gerando token para autenticação -- 

        // Informações que iremos guardar dentro do token
        const payload = { userId: user.id, isAdmin: user.isAdmin }
        const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '30m'})

        return response.status(200).json({...payload, token})
    }
}