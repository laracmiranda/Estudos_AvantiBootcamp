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

// User Routes
router.get("/usuarios", userController.findAllUsers)
router.post("/usuarios", userController.createUser)
router.put("/usuarios/:id", userController.updateUser)
router.delete("/usuarios/:id", userController.deleteUser)

// Login Routes
router.post("/login", loginController.login)

export { router }