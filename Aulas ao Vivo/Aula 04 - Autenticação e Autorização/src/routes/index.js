import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { LoginController } from "../controllers/LoginController.js";
import dotenv from 'dotenv';
dotenv.config();
import authenticate from "../middlewares/authenticate.js";
import authorization from "../middlewares/authorization.js";

const router = Router();
const userController = new UserController();
const loginController = new LoginController();

// Método GET - Puxa os dados
router.get("/usuarios", authorization, userController.findAllUsers)

// Método POST - Insere novos dados
router.post("/usuarios", userController.createUser)

// Método PUT - Atualiza os dados
router.put("/usuarios/:id", userController.updateUser)

// Método DELETE - Deleta os dados
router.delete("/usuarios/:id", userController.deleteUser)

router.post("/login", loginController.login)

export { router }