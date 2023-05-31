import express from "express";
import UserController from "../controllers/UserController.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new UserController();
  }

  start() {
    this.router.get("/", this.controller.getUsers);
    this.router.post("/", this.controller.addUser);
    this.router.put("/", this.controller.editUser);

    return this.router;
  }
}

export default Router;
