import jwt from "jsonwebtoken";

//* Verifica se o usuário é Admin, ou seja, se ele tem autorização para realizar tal requisição

export default function (request, response, next){
    const { authorization } = request.headers;

    // Verifica se o usuário está autenticado 
    if (!authorization){
        return response.status(401).json({"error:": "Token não encontrado"})
    }

    // Verifica se o token está gerado e se foi gerado pela nossa API
    try {
        // ? Essa linha substitui o bearer para o token diretamente
        const token = authorization.replace("Bearer ", "");
        const { isAdmin } = jwt.decode(token, process.env.SECRET_JWT);

        if (!isAdmin){
          return response.status(403).json({"error:": "Unauthorized - Usuário não é Admin!"})  
        }

        //Chama o próximo método definido na rota
        next();

    } catch(error){
        return response.status(401).json({"error:": "Token inválido"})
    }
}