import express from "express";
import BandController from "../controllers/BandController.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new BandController();
  }

  start() {
    this.router.get("/", this.controller.getBands);
    this.router.get("/:id", this.controller.getBandById);
    this.router.post("/", this.controller.createBand);
    this.router.put("/:id", this.controller.updateBand);
    return this.router;
  }
}

export default Router;
