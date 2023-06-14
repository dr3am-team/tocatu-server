import express from "express";
import BarController from "../controllers/BarController.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new BarController();
  }

  start() {
    this.router.get("/", this.controller.getBars);
    this.router.get("/:id", this.controller.getBarById);
    this.router.post("/", this.controller.createBar);
    this.router.put("/:id", this.controller.updateBar);
    this.router.delete("/:id", this.controller.deleteBar);
    return this.router;
  }
}

export default Router;
