import express from "express";
import UserController from "../controllers/UserController.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new UserController();
  }

  start() {
    this.router.get("/", this.controller.getUsers);
    this.router.post("/", this.controller.createUser);
    this.router.put("/:id", this.controller.editUser);
    this.router.delete("/:id", this.controller.deleteUser);
    this.router.post("/login", this.controller.loginUser);
    return this.router;
  }
}

export default Router;
