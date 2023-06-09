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
    this.router.delete("/:id", this.controller.deleteBand);
    this.router.post("/login", this.controller.loginBand);
    return this.router;
  }
}

export default Router;
