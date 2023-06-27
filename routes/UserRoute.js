import express from "express";
import UserController from "../controllers/UserController.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new UserController();
  }

  start() {
    this.router.get("/", this.controller.getUsers);
    this.router.get("/:id", this.controller.getUserById);
    /**
     * @openapi
     * /api/users:
     *   post:
     *     tags:
     *       - Usuarios
     *     summary: Agrega un nuevo usuario
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: El objeto creado
     *       500:
     *         description: "Check your fields"
     *       400:
     *         description: "Bad request"
     *
     */

    /**
     * @openapi
     * components:
     *   schemas:
     *     User:
     *       type: object
     *       required:
     *         - mail
     *         - username
     *         - password
     *       properties:
     *         mail:
     *           type: string
     *           default: example@example.com
     *         username:
     *           type: string
     *           minimum: 3
     *           default: example
     *         password:
     *           type: string
     *           default: password123
     */

    this.router.post("/", this.controller.createUser);
    this.router.put("/:id", this.controller.editUser);
    this.router.delete("/:id", this.controller.deleteUser);
    this.router.post("/login", this.controller.loginUser);
    return this.router;
  }
}

export default Router;
