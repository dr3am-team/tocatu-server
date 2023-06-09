import express from "express";
import BandController from "../controllers/BandController.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new BandController();
  }

  start() {
    this.router.get("/", this.controller.getBands);

    return this.router;
  }
}

export default Router;
