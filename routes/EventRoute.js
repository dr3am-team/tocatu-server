import express from "express";
import EventController from "../controllers/EventController.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new EventController();
  }

  start() {
    this.router.get("/", this.controller.getEvents);
    this.router.get("/:id", this.controller.getEventById);
    this.router.post("/", upload.single("avatar"), this.controller.createEvent);
    this.router.put("/:id", this.controller.updateEvent);
    this.router.delete("/:id", this.controller.deleteEvent);
    return this.router;
  }
}

export default Router;
