import express from "express";
import BarController from "../controllers/BarController.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new BarController();
  }

  start() {
    /**
     * @openapi
     * /api/bars:
     *   get:
     *     tags:
     *       - Bares
     *     summary: Obtiene los bares existentes en la db
     *     responses:
     *       200:
     *         description: Usuario encontrado
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Bar'
     */

    /**
     * @openapi
     * components:
     *   schemas:
     *     Bar:
     *       type: object
     *       properties:
     *         _id:
     *           type: ObjectId
     *         username:
     *           type: string
     *           minimum: 3
     *         mail:
     *           type: string
     *         name:
     *           type: string
     *         address:
     *           type: string
     *         capacity:
     *           type: number
     *         userType:
     *           type: string
     *         eventId:
     *           type: array
     *           items:
     *            type: ObjectId
     *       example:
     *         id: 649aebb3bd35f0c731b07f3e
     *         username: bar2852
     *         email: bar@bar.com
     *         name: "El bar"
     *         capacity: 200
     *         userType: bar
     *         eventId: "649aebb3bd35f0c731b07f3e"
     */

    this.router.get("/", this.controller.getBars);
    this.router.get("/:id", this.controller.getBarById);
    this.router.post("/", this.controller.createBar);
    this.router.put("/:id", this.controller.updateBar);
    this.router.delete("/:id", this.controller.deleteBar);
    this.router.post("/login", this.controller.loginBar);
    return this.router;
  }
}

export default Router;
