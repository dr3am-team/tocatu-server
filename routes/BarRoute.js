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
     *       example:
     *         id: 649aebb3bd35f0c731b07f3e
     *         username: bar2852
     *         email: bar@bar.com
     *         name: "El bar"
     *         capacity: 200
     *         userType: bar
     *         eventId: ["649aebb3bd35f0c731b07f3e"]
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

/** 
barSchema:
type: object
properties:
  username:
    type: string
    minLength: 3
    description: Username of the bar
  mail:
    type: string
    description: Email address of the bar
  password:
    type: string
    minLength: 3
    description: Password of the bar
  name:
    type: string
    description: Name of the bar
  address:
    type: string
    minLength: 3
    description: Address of the bar
  capacity:
    type: integer
    description: Capacity of the bar
  userType:
    type: string
    default: "bar"
    description: Type of the user
  eventId:
    type: array
    items:
      type: string
    description: IDs of events associated with the bar
required:
  - username
  - mail
  - password
  - name
  - address
  - capacity
  */
