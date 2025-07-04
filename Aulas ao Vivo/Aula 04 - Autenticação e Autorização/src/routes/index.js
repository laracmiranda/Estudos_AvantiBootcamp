import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

const router = Router();
const userController = new UserController();

// Método GET - Puxa os dados
router.get("/usuarios", userController.findAllUsers)

// Método POST - Insere novos dados
router.post("/usuarios", userController.createUser)

// Método PUT - Atualiza os dados
router.put("/usuarios/:id", userController.updateUser)

// Método DELETE - Deleta os dados
router.delete("/usuarios/:id", userController.deleteUser)

export { router }