import jwt from "jsonwebtoken";

//* Verifica se o usuário é válido, ou seja, se ele está autenticado!

export default function (request, response, next){
    const { authorization } = request.headers;

    // Verifica se o usuário está autenticado 
    if (!authorization){
        return response.status(401).json({"error:": "Token não encontrado"})
    }

    // Verifica se o token está gerado e se foi gerado pela nossa API
    try {
        const token = authorization.replace("Bearer ", "");
        const { userId } = jwt.decode(token, process.env.SECRET_JWT);

        if (!userId){
          return response.status(401).json({"error:": "Unauthorized - Usuário não encontrado"})  
        }

        // Chama o próximo método definido nos routes
        next();

    } catch(error){
        return response.status(401).json({"error:": "Token inválido"})
    }
}